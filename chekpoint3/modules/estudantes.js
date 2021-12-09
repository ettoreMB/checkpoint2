const criarAluno = require('./aluno')

const aluno0 = new criarAluno.Aluno('ettore', 10, [5,5,8]);
const aluno1 = new criarAluno.Aluno('Joana', 3, [9,7,8]);
const aluno2 = new criarAluno.Aluno('Maria', 14, [10,10,10]);
const aluno3 = new criarAluno.Aluno('Flavia', 0, [7,7,7]);

let listaEstudantes = [ aluno0, aluno1, aluno2, aluno3]

module.exports = { listaEstudantes }