const bcrypt = require('bcrypt')

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect()
const cadastro = (req, res) => {
    pool.query(`SELECT * FROM users WHERE cpf='${req.body.cpf}'`).then(
        results => {
            if (results.rows.length > 0) {
                return res.send('Encontramos um usuário cadastrado com esse cpf')
            }
        })

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.send(err)
        }

        req.body.password = hash

        pool.query(`
            INSERT INTO users (
                name,
                cpf,
                email,
                password
            ) VALUES (
                '${req.body.name}',
                '${req.body.cpf}',
                '${req.body.email}',
                '${req.body.password}'
            )
        `)

        return res.send('cadastrado')
    })

}

const login = (req, res) => {
    pool.query(`
        SELECT * FROM users WHERE cpf='${req.body.cpf}'
    `).then(r => {
        if (r.rows.length < 1) {
            return res.send('Usuário não cadastrado')
        } else {
            if (bcrypt.compare(req.body.password, r.rows.password)) {
                return res.send('Logado')
            }
        }
    })
}

module.exports = {cadastro, login}