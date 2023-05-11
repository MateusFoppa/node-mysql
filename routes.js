//Importando dependências do projeto

const express = require('express');

// Referencia ao db.js
const db = require("./db");

const routes = express.Router();

// associa as rotas ao seu método do db.js
routes.get('/authors', db.selectAuthors);
routes.post('/authors',db.insertAuthor);
routes.put('/authors/:id',db.updateAuthor);
routes.delete('/authors/:id',db.deleteAuthor);


module.exports = routes;

