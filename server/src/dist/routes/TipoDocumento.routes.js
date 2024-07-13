"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TipoUsuario_1 = require("../controllers/TipoUsuario");
const router = express_1.default.Router();
router.get('/FindAll', TipoUsuario_1.findAll);
router.get('/FindOne/:id', TipoUsuario_1.findOne);
router.post('/CreateOne', TipoUsuario_1.createOne);
router.put('/UpdateOne/:id', TipoUsuario_1.updateOne);
router.delete('/DeleteOne/:id', TipoUsuario_1.deleteOne);
exports.default = router;
