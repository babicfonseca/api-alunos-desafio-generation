const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API CRUD Alunos - Desafio Generation',
    description: 'O desafio proposto visa a criação de uma API para realizar operações básicas (Create, Read, Update e Delete - CRUD) em uma tabela de alunos armazenada em um banco de dados PostgreSQL.'
  },
  host: 'https://api-alunos-generation.onrender.com'
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/aluno.routes.js'];


swaggerAutogen(outputFile, routes, doc);