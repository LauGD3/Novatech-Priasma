"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Routers
const TipoDocumento_routes_1 = __importDefault(require("./routes/TipoDocumento.routes"));
const TipoUsuario_routes_1 = __importDefault(require("./routes/TipoUsuario.routes"));
const Persona_routes_1 = __importDefault(require("./routes/Persona.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.listen(PORT, () => console.log(`app running on port ${PORT}`));
app.use('/Api/TipoDocumento', TipoDocumento_routes_1.default);
app.use('/Api/TipoUsuario', TipoUsuario_routes_1.default);
app.use('/Api/Persona', Persona_routes_1.default);
