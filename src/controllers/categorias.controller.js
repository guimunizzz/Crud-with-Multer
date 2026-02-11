import categoriaModel from "../models/categorias.model.js";

const categoriaController = {
    selecionaTodos: async (req, res) => {
        try {
            const resultado = await categoriaModel.selectAll();
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
    insertCategoria:async (req, res) => {
        try {
            const {descricaoCategoria} = req.body;
            if (!descricaoCategoria) {
                return res.status(400).json({
                    message: "Descrição inválida"
                });
            }

            const resultado = await categoriaModel.insertCategoria(descricaoCategoria);

            res.status(201).json({
                message: "Descrição incluida com sucesso",
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

export default categoriaController