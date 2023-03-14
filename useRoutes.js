import db from '../..';
const router = require('express').Router();

//inserir dados
router.post('/add', (req, res) =>{
const body = req.body
if(!body)
return res.status(400).end()
db.push(body)
return res.json(body)
})

