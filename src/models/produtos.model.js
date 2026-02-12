import pool from "../config/db.js";

const produtoModel = {
    selectAll: async () => {
        const sql = 'SELECT * FROM produto;';
        const [rows] = await pool.execute(sql)

        return rows
    },
    
    searchImage:async (pIdProduto) => {
        const sql = 'SELECT vinculoImagem FROM produto WHERE idProduto = ?;';
        const values = [pIdProduto]
        const [rows] = await pool.execute(sql, values)

        return rows
    },

    selectById: async (pIdProduto) => {
        const sql = 'SELECT * FROM produto WHERE idProduto = ?;';
        const values = [pIdProduto]
        const [rows] = await pool.execute(sql, values)

        return rows
    },

    insertProduto: async (pIdCategoria, pNomeProduto, pValorProduto, pVinculoImagem) => {
        const sql = 'INSERT INTO produto(idCategoria, nomeProduto, valorProduto, vinculoImagem) VALUES (?, ?, ?, ?);';
        const values = [pIdCategoria, pNomeProduto, pValorProduto, pVinculoImagem];
        const [rows] = await pool.execute(sql, values);

        return rows;

    },
    deleteProdutos: async (pIdProduto) => {
        const sql = 'DELETE FROM produto WHERE idProduto = ?;';
        const values = [pIdProduto];

        const [rows] = await pool.execute(sql, values);

        return rows;
    },
    updateProduto: async (pIdCategoria, pNomeProduto, pValorProduto, pVinculoImagem, pIdProduto) => {
        const sql = 'UPDATE produto SET idCategoria = ?, nomeProduto = ?, valorProduto = ?, vinculoImagem = ? WHERE idProduto = ?;';
        const values = [pIdCategoria, pNomeProduto, pValorProduto, pVinculoImagem, pIdProduto];
        const [rows] = await pool.execute(sql, values);

        return rows;
    }
};

export default produtoModel;