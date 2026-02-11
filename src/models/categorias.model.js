import pool from "../config/db.js";

const categoriaModel = {
    selectAll: async () => {
        const sql = 'SELECT * FROM categoria;';
        const [rows] = await pool.execute(sql)

        return rows
    },
    insertCategoria: async (pDescricaoCategoria) => {
        const sql = 'INSERT INTO categoria(descricaoCategoria) VALUES (?);';
        const values = [pDescricaoCategoria];
        const [rows] = await pool.execute(sql, values);

        return rows
    }
};

export default categoriaModel;