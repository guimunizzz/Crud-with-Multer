import express from "express";
import { initializeDatabase } from "./config/db.js"; // Importação corrigida
import routes from "./routes/routes.js";
import path from 'path';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use('/', routes);
app.use('/imagens', express.static(path.resolve('uploads/Images')));

// Chama o banco uma vez só e, se der certo, sobe o servidor
initializeDatabase().then(() => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`);
    });
}).catch(err => {
    console.error("Erro ao inicializar o banco de dados:", err);
});