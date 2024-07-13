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
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = require("bcrypt");
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 10;
    const salt = yield (0, bcrypt_1.genSalt)(saltRounds);
    const passwordHash = yield (0, bcrypt_1.hash)(password, salt);
    return passwordHash;
});
exports.hashPassword = hashPassword;
const comparePassword = (hashPassword, password) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, bcrypt_1.compare)(password, hashPassword);
    return result;
});
exports.comparePassword = comparePassword;
