const express = require('express');
const server = express();

// o servidor escuta ate mesmo se vc passar uma URL assim: /api/bla/teste1/servidor
server.use('/api', function(req, res, next){
    console.log('Inicio...');
    next();
    console.log('Fim...');
});

server.use('/api', function(req, res){
    console.log('Resposta...');
    res.send('<h1>API!</h1>');
});

server.listen(3000, () => console.log('Servidor ON > localhost:3000'));
