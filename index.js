
const express = require("express");

// Cria uma aplicação Express
const app = express();

//Permitir enviar dados para a App no formato JSON
app.use(express.json());

// Redireciona o caminho http://localhost:3000/api para o routes
app.use('/api', require('./routes'));


//Inicia o servidor na porta '3000'
app.listen(3000, () => {
    console.log("App ouvindo a porta 3000")
})