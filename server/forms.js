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
    pool.query(`SELECT * FROM users WHERE email='${req.body.cpf}'`).then(
        results => {
            if (results.rows.length > 0) {
                return res.send('Encontramos um usuário cadastrado com esse cpf')
            }

            bcrypt.hash(req.body.password, 20, (err, hash) => {
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

                return res.send('Cadastrado com sucesso')
            })
        })
}

const login = (req, res) => {

}

module.exports = {cadastro, login}