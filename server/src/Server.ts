import express from 'express'
// Routers
import RouterTipoDoc from './routes/TipoDocumento.routes'
import RouterTipoUsuario from './routes/TipoUsuario.routes'
import RouterPersona from './routes/Persona.routes'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT, () => console.log(`app running on port ${ PORT }`));

app.use('/Api/TipoDocumento', RouterTipoDoc);
app.use('/Api/TipoUsuario', RouterTipoUsuario);
app.use('/Api/Persona', RouterPersona);
