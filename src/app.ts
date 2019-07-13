require('dotenv').config();
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import controllers from "./controllers/index";
import { Application } from 'express'

const app: Application = createExpressServer({
    cors: true,
    controllers: controllers
})

app.listen(process.env.PORT,() => console.log(`Server Running on port ${process.env.PORT}`))
