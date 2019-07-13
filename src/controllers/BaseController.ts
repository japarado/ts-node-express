import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@JsonController()
class BaseController
{
    @Get("/posts")
    index()
    {
        return "All Posts";
    }

    @Get("/posts/:id")
    find(@Param('id') id: number)
    {
        return `Getting post with an ID of ${id}`;
    }

    @Post("/posts")
    store(@Body() user: any)
    {
        return "Saving user";
    }

    @Put("/posts/:id")
    update(@Param('id') id: number, @Body() post: any)
    {
        return `Updating user with an ID of ${id}`;
    }

    @Delete("/posts/:id")
    destroy(@Param("id") id: number)
    {
        return `Removing user with an ID of: ${id}`
    }

}

export default BaseController;
