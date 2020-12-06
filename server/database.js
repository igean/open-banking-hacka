const { Pool } = require('pg');
const bcrypt = require('bcrypt')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();

pool.query(`
    SELECT * FROM users WHERE id=1;
`).then(r => {
  console.log(bcrypt.compare('geanpaiva', r.rows[0].password))
})