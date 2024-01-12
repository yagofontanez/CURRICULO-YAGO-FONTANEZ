const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 5500;

// Configurar o middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para a página inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo à página inicial!');
});

// Rota para processar dados do formulário
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log(formData);

    // Salvar os dados em um arquivo JSON
    saveFormData(formData);

    res.redirect('/confirmacao.html');
});

// Função para salvar dados em um arquivo JSON
function saveFormData(formData) {
    // Ler dados existentes do arquivo (se existirem)
    let existingData = [];

    try {
        const fileContent = fs.readFileSync('dados-do-formulario.json', 'utf-8');
        existingData = JSON.parse(fileContent);
    } catch (error) {
        console.error('Erro ao ler o arquivo dados-do-formulario.json:', error.message);
        // Continuar com um array vazio
    }

    // Certificar-se de que existingData é um array
    if (!Array.isArray(existingData)) {
        existingData = [];
    }

    // Adicionar novos dados ao array existente
    existingData.push(formData);

    // Escrever os dados atualizados de volta ao arquivo JSON
    try {
        fs.writeFileSync('dados-do-formulario.json', JSON.stringify(existingData, null, 2) + '\n');
        console.log('Dados gravados com sucesso no arquivo dados-do-formulario.json');
    } catch (error) {
        console.error('Erro ao escrever no arquivo dados-do-formulario.json:', error.message);
    }
}

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
});