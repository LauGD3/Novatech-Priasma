"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateOne = exports.findOne = exports.findAll = exports.createOne = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipoUsuairo } = req.body;
    const result = yield prisma.tipoDocumento.create({
        data: tipoUsuairo
    });
    if (result != null) {
        return res.status(201).json(result);
    }
});
exports.createOne = createOne;
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.tipoDocumento.findMany();
    return res.status(200).json({ result });
});
exports.findAll = findAll;
const findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield prisma.tipoDocumento.findUnique({
        where: {
            idTipoDocumento: parseInt(id)
        }
    });
    if (result != null) {
        return res.status(202).json({ result });
    }
    else {
        return res.status(404).json({ message: `Data with id: ${id} do not exist` });
    }
});
exports.findOne = findOne;
const updateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { tipoUsuairo } = req.body;
    const data = yield prisma.tipoDocumento.findUnique({
        where: {
            idTipoDocumento: parseInt(id)
        }
    });
    if (data != null) {
        const result = yield prisma.tipoDocumento.update({
            where: {
                idTipoDocumento: parseInt(id)
            },
            data: tipoUsuairo
        });
        return res.status(202).json({ message: 'Data was updated', data });
    }
    else {
        return res.status(404).json({ message: `Data with id: ${id} do not exist` });
    }
});
exports.updateOne = updateOne;
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield prisma.tipoDocumento.findUnique({
        where: {
            idTipoDocumento: parseInt(id)
        }
    });
    if (data != null) {
        const result = yield prisma.tipoDocumento.delete({
            where: {
                idTipoDocumento: parseInt(id)
            }
        });
        return res.status(202).json({ message: 'Data was deleted' });
    }
    else {
        return res.status(404).json({ message: `Data with id: ${id} do not exist` });
    }
});
exports.deleteOne = deleteOne;
