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

.post('/cadastro', cadastro)

.get('/login', (req, res) => {
    return res.render('login')
})

.post('/login', login)

.listen(process.env.PORT)