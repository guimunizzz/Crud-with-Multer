import pool from "../config/db.js";

const produtoModel = {
    selectAll: async () => {
        const sql = 'SELECT * FROM produto;';
        const [rows] = await pool.execute(sql)

        return rows
    },
    insertProduto: async (pIdCategoria, pNomeProduto, pValorProduto, pVinculoImagem) => {
        const sql = 'INSERT INTO produto(idCategoria, nomeProduto, valorProduto, vinculoImagem) VALUES (?, ?, ?, ?);';
        const values = [pIdCategoria, pNomeProduto, pValorProduto, pVinculoImagem];
        const [rows] = await pool.execute(sql, values);

        return rows;

    }
};

export default produtoModel;