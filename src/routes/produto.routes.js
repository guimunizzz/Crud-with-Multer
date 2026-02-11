import {Router} from 'express';
import produtosController from '../controllers/produtos.controller.js';
import uploadImage from '../middlewares/uploadImage.middleware.js';

const produtoRoutes = Router();

produtoRoutes.get('/produtos', produtosController.selecionaTodos);
produtoRoutes.post('/produtos', uploadImage, produtosController.insertProdutos);
// produtoRoutes.post('/produto/images', uploadImage, produtosController.uploadController);

export default produtoRoutes;