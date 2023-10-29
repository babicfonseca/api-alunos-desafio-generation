const db = require("../config/database");

// ==> Método responsável por criar um novo 'Aluno':
exports.createAluno = async (req, res) => {
  const { id_aluno, nome_aluno, idade_aluno, nota_1semestre, nota_2semestre, nome_professor, numero_sala } = req.body;
  const { rows } = await db.query(
    "INSERT INTO alunos (id_aluno, nome_aluno, idade_aluno, nota_1semestre, nota_2semestre, nome_professor, numero_sala) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [id_aluno, nome_aluno, idade_aluno, nota_1semestre, nota_2semestre, nome_professor, numero_sala]
  );

  res.status(201).send({
    message: "Aluno added successfully!",
    body: {
      aluno: { id_aluno, nome_aluno, idade_aluno, nota_1semestre, nota_2semestre, nome_professor, numero_sala }
    },
  });
};

// ==> Método responsável por listar todos os 'Alunos':
exports.listAllAlunos = async (req, res) => {
    const response = await db.query('SELECT * FROM alunos ORDER BY nome_aluno ASC');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Aluno' pelo 'Id':
exports.findAlunoById = async (req, res) => {
    const idAluno = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM alunos WHERE id_aluno = $1', [idAluno]);
    res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'Aluno' pelo 'Id':
exports.updateAlunoById = async (req, res) => {
    const idAluno = parseInt(req.params.id);
    const { id_aluno, nome_aluno, idade_aluno, nota_1semestre, nota_2semestre, nome_professor, numero_sala } = req.body;
    const response = await db.query(
      "UPDATE alunos SET nome_aluno = $2, idade_aluno = $3, nota_1semestre = $4, nota_2semestre = $5, nome_professor = $6, numero_sala = $7 WHERE id_aluno = $1",
      [id_aluno, nome_aluno, idade_aluno, nota_1semestre, nota_2semestre, nome_professor, numero_sala]
    );
    res.status(200).send({ message: "Aluno Updated Successfully!" });
};

// ==> Método responsável por excluir um 'Product' pelo 'Id':
exports.deleteAlunoById = async (req, res) => {
    const idAluno = parseInt(req.params.id);
    await db.query('DELETE FROM alunos WHERE id_aluno = $1', [
        idAluno
    ]);
    res.status(200).send({ message: 'Aluno deleted successfully!', idAluno });
  };