const express = require('express');

const app = express();

app.listen(3000, () => console.log('Servidor Rodando na Porta 3000'));

// app.get('/', (req, res) => res.send('Rota principal'));
app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'));









