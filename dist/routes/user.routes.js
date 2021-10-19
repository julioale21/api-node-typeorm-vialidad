"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var user_controller_1 = require("../controllers/user.controller");
router.get('/users', user_controller_1.getUsers);
// router.get('/users/:id',)
// router.post('/users',)
// router.put('/users',)
// router.delete('/users/:id',)
exports.default = router;
