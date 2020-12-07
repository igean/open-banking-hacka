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

.get('/', (req, res) => {
    return res.render('index')
})

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

.post('/pesquisa-sobre-perfil', (req, res) => {
    const pontos = [0, 142.8, 92.5, 51.3]

    console.log(req.body)

    let total = 
    pontos[req.body.q1] + pontos[req.body.q2] + pontos[req.body.q3] + pontos[req.body.q4] + pontos[req.body.q5] + pontos[req.body.q7]

    if (req.body.q6 == 'yes') {
        total = total + 142.8
        return res.render('resultado-pesquisa', {total})
    } else {
        total = total + 50.6
        console.log(total)
        return res.render('resultado-pesquisa', {total})
    }
})

.post('/login', login)

.get('/inicio', (req, res) => {
    return res.render('dashboard')
})

.get('/solicitar-credito', (req, res) => {
    return res.render('solicitar-credito')
})

.get('/status-da-solicitacao-de-credito',(req, res) => {
    return res.render('status-solicitacao')
})

.listen(process.env.PORT)