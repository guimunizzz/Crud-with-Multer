import produtoModel from "../models/produtos.model.js";
import fs from 'fs';
import { type } from "os";
import path from 'path';

const produtosController = {
    selecionaTodos: async (req, res) => {
        try {
            const resultado = await produtoModel.selectAll();
            if (resultado.length === 0) {
                return res.status(200).json({
                    message: "A consulta não retornou resultados"
                });
            }
            res.status(200).json({
                data: resultado
            });
        } catch (error) {
            console.error(`Erro ao executar: ${error}`);
            res.status(500).json({
                message: "Ocorreu um erro no servidor",
                errorMessage: error.message,
            });
        }
    },
    insertProdutos: async (req, res) => {
        try {
            const { idCategoria, nomeProduto, valorProduto } = req.body;

            const pIdCategoria = parseInt(idCategoria)
            const pValorProduto = parseFloat(valorProduto)

            const vinculoImagem = req.file.filename;
            if (!pIdCategoria || isNaN(pIdCategoria) || !nomeProduto || !pValorProduto || isNaN(pValorProduto) || !vinculoImagem) {
                return res.status(400).json({
                    message: "Dados do produto errados ou incompletos"
                });
            }

            const resultado = await produtoModel.insertProduto(pIdCategoria, nomeProduto, pValorProduto, vinculoImagem)

            res.status(201).json({
                message: "Produto inserido com sucesso",
                data: resultado
            });
        } catch (error) {
            console.error(`Erro ao executar: ${error}`);
            res.status(500).json({
                message: "Ocorreu um erro no servidor",
                errorMessage: error.message,
            });
        }
    },
    deletaProdutos: async (req, res) => {
        try {
            const idProduto = Number(req.params.idProduto);
            const imageName = await produtoModel.searchImage(idProduto)
            const filePath = 'uploads/Images'
            const fullPath = path.join(filePath, imageName[0].vinculoImagem);

            if (isNaN(idProduto) || idProduto <= 0) {
                return res.status(400).json({
                    message: "ID do produto inválido ou não fornecido"
                })
            }
            const produtoSelecionado = await produtoModel.selectById(idProduto);
            if (produtoSelecionado.length === 0) {
                return res.status(404).json({
                    message: "Produto não localizado"
                });
            }

            const resultadoDelete = await produtoModel.deleteProdutos(idProduto);
            if (resultadoDelete.affectedRows !== 0) {
                fs.unlinkSync(fullPath)

                return res.status(200).json({
                    message: "Produto excluido com sucesso"
                })
            } else {
                res.status(500).json({
                    message: "Ocorreu um erro ao excluir o produto"
                });
            }


        } catch (error) {
            console.error(`Erro ao executar: ${error}`);
            res.status(500).json({
                message: "Ocorreu um erro no servidor",
                errorMessage: error.message,
            });
        }
    },

    updateProduto: async (req, res) => {
        try {
            const { idCategoria, nomeProduto, valorProduto } = req.body;
            const idProduto = Number(req.params.idProduto);


            const pIdCategoria = parseInt(idCategoria)
            const pValorProduto = parseFloat(valorProduto)

            const vinculoImagem = req.file.filename;

            if (!idProduto || isNaN(idProduto) || !pIdCategoria || isNaN(pIdCategoria) || !nomeProduto || !pValorProduto || isNaN(pValorProduto) || !vinculoImagem) {
                return res.status(400).json({
                    message: "Dados do produto errados ou incompletos"
                });
            }

            const produtoSelecionado = await produtoModel.selectById(idProduto);
            if (produtoSelecionado.length === 0) {
                return res.status(404).json({
                    message: "Produto não localizado"
                });
            }

            const resultado = await produtoModel.updateProduto(pIdCategoria, nomeProduto, pValorProduto, vinculoImagem, idProduto)

            res.status(201).json({
                message: "Produto inserido com sucesso",
                data: resultado
            });

        } catch (error) {
            console.error(`Erro ao executar: ${error}`);
            res.status(500).json({
                message: "Ocorreu um erro no servidor",
                errorMessage: error.message,
            });
        }
    }
};

export default produtosController