module.exports = app => {
    // app.get('/', (req, res) => res.send('Rota principal'));
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'));

}