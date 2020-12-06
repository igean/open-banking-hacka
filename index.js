const express = require('express')
const path = require('path')
const bodyParser = require('body-parser').urlencoded

const {cadastro, login} = require('./server/forms')

const app = express()

app
.set('view engine','hbs')
.set('views', 'views')
.use(express.static('public'))

.get('/cadastro', (req, res) => {
    return res.render('cadastro')
})

.post('/cadastro', bodyParser, cadastro)

.get('/login', (req, res) => {
    return res.render('login')
})

.post('/login', bodyParser, login)

.listen(process.env.PORT)