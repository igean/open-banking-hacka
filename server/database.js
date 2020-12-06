const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();

pool.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200),
        cpf VARCHAR(200),
        email VARCHAR(200),
        cnpj VARCHAR(200),
        password VARCHAR(200)
    )
`)