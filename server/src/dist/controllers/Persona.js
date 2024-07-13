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
const bcrypt_helper_1 = require("../helpers/bcrypt.helper");
const prisma = new client_1.PrismaClient();
const createOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pNombre, sNombre, pApellido, sApellido, documento, tipoDocumento, correo, clave, tipoUsuario } = req.body;
    const passwordHash = yield (0, bcrypt_helper_1.hashPassword)(clave);
    try {
        const result = prisma.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            const persona = yield prisma.persona.create({
                data: {
                    pNombre,
                    sNombre,
                    pApellido,
                    sApellido,
                    documento,
                    tipoDocumento
                }
            });
            const usuario = yield prisma.usuario.create({
                data: {
                    idUsuario: persona.idPersona,
                    correo,
                    clave: passwordHash,
                    tipoUsuario
                }
            });
        }));
        return res.status(201).json({ message: 'the data was created ', result });
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating data', details: error });
    }
});
exports.createOne = createOne;
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.persona.findMany({
            select: {
                pNombre: true,
                sNombre: true,
                pApellido: true,
                sApellido: true,
                documento: true,
                tipoDocRel: {
                    select: {
                        tipoDoc: true
                    }
                },
                user: {
                    select: {
                        correo: true,
                        clave: true,
                        tipoUs: {
                            select: {
                                tipoUsuario: true
                            }
                        }
                    }
                }
            }
        });
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching data', details: error });
    }
});
exports.findAll = findAll;
const findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.findOne = findOne;
const updateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.updateOne = updateOne;
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteOne = deleteOne;
