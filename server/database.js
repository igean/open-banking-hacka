const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();

pool.query(`
    INSERT INTO users (name, cpf, email, password)
    VALUES ('teste', 'teste', 'teste', 'teste')
`).then(
    pool.query(`
        SELECT * FROM users;
    `).then(r => console.log(r.rows))
)