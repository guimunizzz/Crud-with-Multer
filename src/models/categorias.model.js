import pool from "../config/db.js";

const categoriaModel = {
    selectAll: async () => {
        const sql = 'SELECT * FROM categoria;';
        const [rows] = await pool.execute(sql)

        return rows
    },
    selectCategoriaById: async (pIdCategoria) => {
        const sql = 'SELECT * FROM categoria WHERE idCategoria = ?;';
        const values = [pIdCategoria]
        const [rows] = await pool.execute(sql, values)

        return rows
    },
    insertCategoria: async (pDescricaoCategoria) => {
        const sql = 'INSERT INTO categoria(descricaoCategoria) VALUES (?);';
        const values = [pDescricaoCategoria];
        const [rows] = await pool.execute(sql, values);

        return rows
    },
    updateCategoria: async (pDescricaoCategoria, pIdCategoria) => {
        const sql = 'UPDATE categoria SET descricaoCategoria = ? WHERE idCategoria = ?;';
        const values = [pDescricaoCategoria, pIdCategoria];
        const [rows] = await pool.execute(sql, values);

        return rows;
    }
};

export default categoriaModel;