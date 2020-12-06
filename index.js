const express = require('express')
const bodyParser = require('body-parser')

const {cadastro, login} = require('./server/forms')

const app = express()

app
.set('view engine','hbs')
.set('views', 'views')
.use(express.static('public'))
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended: true}))

.get('/cadastro', (req, res) => {
    return res.render('cadastro')
})

.get('/login', (req, res) => {
    return res.render('login')
})

.post('/cadastro', cadastro)

.get('/cnpj', (req, res) => {
    return res.render('cnpj')
})

.get('/pesquisa-sobre-perfil', (req, res) => {
    return res.render('perfil-investidor')
})

.post('/login', login)

.listen(process.env.PORT)