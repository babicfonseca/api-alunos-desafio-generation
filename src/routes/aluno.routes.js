const router = require('express-promise-router')();
const alunoController = require('../controllers/aluno.controller');

// ==> Definindo as rotas do CRUD - 'Aluno':

// ==> Rota responsável por criar um novo 'Aluno': (POST): localhost:3000/api/alunos
router.post('/alunos', alunoController.createAluno);

// ==> Rota responsável por listar todos os 'Alunos': (GET): localhost:3000/api/alunos
router.get('/alunos', alunoController.listAllAlunos);

// ==> Rota responsável por selecionar 'Aluno' pelo 'Id': (GET): localhost:3000/api/alunos/:id
router.get('/alunos/:id', alunoController.findAlunoById);

// ==> Rota responsável por atualizar 'Aluno' pelo 'Id': (PUT): localhost:3000/api/alunos/:id
router.put('/alunos/:id', alunoController.updateAlunoById);

// ==> Rota responsável por excluir 'Product' pelo 'Id': (DELETE): localhost:3000/api/products/:id
router.delete('/alunos/:id', alunoController.deleteAlunoById);

module.exports = router;