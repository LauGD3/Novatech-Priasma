"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Persona_1 = require("../controllers/Persona");
const router = express_1.default.Router();
router.get('/FindAll', Persona_1.findAll);
router.get('/FindOne/:id', Persona_1.findOne);
router.post('/CreateOne', Persona_1.createOne);
router.put('/UpdateOne/:id', Persona_1.updateOne);
router.delete('/DeleteOne/:id', Persona_1.deleteOne);
exports.default = router;
