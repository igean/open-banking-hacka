const express = require('express')
const path = require('path')

const app = express()

app
.set('view engine','hbs')
.set('views', 'views')
.use(express.static('public'))

.get('/cadastro', (req, res) => {
    return res.render('cadastro')
})

.get('/login', (req, res) => {
    return res.render('login')
})

.listen(process.env.PORT)