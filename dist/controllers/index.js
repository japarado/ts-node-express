"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = __importDefault(require("./BaseController"));
const PageController_1 = __importDefault(require("./PageController"));
const controllers = [
    BaseController_1.default,
    PageController_1.default
];
exports.default = controllers;
