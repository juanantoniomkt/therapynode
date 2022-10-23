"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("../controllers/Author"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/get/', Author_1.default.readAll);
exports.default = router;
