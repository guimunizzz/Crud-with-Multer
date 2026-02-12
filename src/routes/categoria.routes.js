import {Router} from 'express';
import categoriaController from '../controllers/categorias.controller.js';

const categoriaRoutes = Router();

categoriaRoutes.get('/categorias', categoriaController.selecionaTodos);
categoriaRoutes.post('/categorias', categoriaController.insertCategoria);
categoriaRoutes.put('/categorias/:idCategoria', categoriaController.updateCategoria);

export default categoriaRoutes;