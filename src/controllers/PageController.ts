import { Controller, Param, Body, Get, Post, Put, Delete, Redirect, UseBefore } from "routing-controllers";
import JwtMiddleware from "../middleware/JwtMiddleware";

@Controller()
@UseBefore(JwtMiddleware)
class PageController
{
  @Get("/")
  index()
  {
    return "Hello, there is nothing here"
  }
}

export default PageController;
