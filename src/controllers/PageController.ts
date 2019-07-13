import { Controller, Param, Body, Get, Post, Put, Delete, Redirect } from "routing-controllers";
import JwtMiddleware from "../middleware/JwtMiddleware";

@Controller()
class PageController
{
  @Get("/")
  index()
  {
    return "Hello, there is nothing here"
  }
}

export default PageController;
