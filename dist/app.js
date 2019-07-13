"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const index_1 = __importDefault(require("./controllers/index"));
const app = routing_controllers_1.createExpressServer({
    controllers: index_1.default
});
app.listen(process.env.PORT, () => console.log(`Server Running on port ${process.env.PORT}`));
