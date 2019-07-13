import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@JsonController()
abstract class BaseController
{
  @Get("/posts")
  index()
  {

  }

  @Get("/posts/:id")
  find(@Param('id') id: number)
  {
  }

  @Post("/posts")
  store(@Body() user: any)
  {
  }

  @Put("/posts/:id")
  update(@Param('id') id: number, @Body() post: any)
  {
  }

  @Delete("/posts/:id")
  destroy(@Param("id") id: number)
  {
  }
}

export default BaseController;
