import produtoModel from "../models/produtos.model.js";

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
            console.log(req.body)
            const {idCategoria, nomeProduto, valorProduto} = req.body;

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
    }
};

export default produtosController