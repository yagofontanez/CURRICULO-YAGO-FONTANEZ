const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


mongoose.connect('')


app.use(bodyParser.urlencoded({ extended: false}));

app.post('/salvar-formulario', (req, res) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const mensagem = req.body.mensagem;
})