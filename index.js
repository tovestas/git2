const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({message: 'olá mundo esse é o meu novo repositorio clonado'})
})

app.listen(4001, () => {
    console.log('Api inicializada na porta 4001');
})