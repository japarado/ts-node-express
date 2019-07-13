"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
let BaseController = class BaseController {
    index() {
        return "All Posts";
    }
    find(id) {
        return `Getting post with an ID of ${id}`;
    }
    store(user) {
        return "Saving user";
    }
    update(id, post) {
        return `Updating user with an ID of ${id}`;
    }
    destroy(id) {
        return `Removing user with an ID of: ${id}`;
    }
};
__decorate([
    routing_controllers_1.Get("/posts"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaseController.prototype, "index", null);
__decorate([
    routing_controllers_1.Get("/posts/:id"),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BaseController.prototype, "find", null);
__decorate([
    routing_controllers_1.Post("/posts"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BaseController.prototype, "store", null);
__decorate([
    routing_controllers_1.Put("/posts/:id"),
    __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BaseController.prototype, "update", null);
__decorate([
    routing_controllers_1.Delete("/posts/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BaseController.prototype, "destroy", null);
BaseController = __decorate([
    routing_controllers_1.JsonController()
], BaseController);
exports.default = BaseController;
