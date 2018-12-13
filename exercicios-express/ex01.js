const express = require('express');
const server = express();

// o servidor escuta somente a URL que eu especifiquei via GET
server.get('/', function(req, res){
    res.send('<h1>Index!</h1>');
});

// o servidor escuta a URL por todos os metodos, GET, POST, PUT e DELETE
server.all('/teste', function(req, res){
    res.send('<h1>Teste!</h1>');
});

// o servidor escuta a URL como uma expressao regular, toda a URL que conter
// /api sera escutada

server.get(/api/, function(req, res){
    res.send('<h1>API!</h1>');
});

// executa o servidor na porta 3000, e retorna um callback do tipo Arrow Function
server.listen(3000, () => console.log('Servidor ON > localhost:3000'));
