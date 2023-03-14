const express = require('express')
const nodemon = require('nodemon')
const app = express()

let db = [
    {'1': {nome: 'cliente 1', idade:'20'} },
    {'2': {nome: 'cliente 2', idade:'30'} },
    {'3': {nome: 'cliente 3', idade:'25'} }
]

app.use(express.json())
app.listen(3000, () =>{
    console.log(`Express stated at http://localhost:3000`)
})
module.exports = db