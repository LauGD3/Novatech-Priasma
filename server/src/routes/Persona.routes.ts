import express from "express";
import { findAll, createOne, findOne, updateOne, deleteOne } from "../controllers/Persona";

const router = express.Router();

router.get('/FindAll', findAll);
router.get('/FindOne/:id', findOne);
router.post('/CreateOne', createOne);
router.put('/UpdateOne/:id', updateOne);
router.delete('/DeleteOne/:id', deleteOne);

export default router;