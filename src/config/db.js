import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool ({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conectado ao MYSQL');
        connection.release();
    } catch (error) {
        console.error('Erro ao conectar ao mysql')
    }
})();

export default pool;