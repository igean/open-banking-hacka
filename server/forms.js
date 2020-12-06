const bcrypt = require('bcrypt')

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();


const cadastro = (req, res) => {
    bcrypt.hash(req.body.password, 30, (err, hash, next) => {
        if (err) {
            return res.status(400).send('erro')
        }

        pool.query(`
            INSERT INTO users (name, cpf, password)
            VALUE (
                ${req.body.name},
                ${req.body.name},
                ${hash}
            );
        `).then(
            next()
        )
    })
}

const login = (req, res) => {

}

module.exports = {cadastro, login}