"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("../models/Author"));
const readAll = (_req, res, next) => {
    try {
        return Author_1.default.find()
            .then((pensamientos) => res.status(200).json({ pensamientos }))
            .catch((error) => res.status(500).json({ error }));
        next();
    }
    catch (error) {
        return 'error';
    }
};
exports.default = { readAll };
