const criarAluno = require('./aluno');
let listaAlunos = require('./estudantes');

let curso = {
  nome: 'Curso FullStack',
  notaAprovacao: 7,
  faltasMaximas: 15,
  estudantes: listaAlunos.listaEstudantes,
  addAluno: function (nome, faltas, [nota1 = 0, nota2 = 0, nota3 = 0]) {
    let novoAluno = new criarAluno.Aluno(nome, faltas, [nota1, nota2, nota3])
    listaAlunos.listaEstudantes.push(novoAluno)
  },
  checarAprovacao: function (index) {
    let media = this.estudantes[index].media();
    let faltas = this.estudantes[index].faltas();
    let porcentagem = this.notaAprovacao + this.notaAprovacao * 0.10

    if ((media >= this.notaAprovacao && faltas <= this.faltasMaximas) || (faltas == this.faltasMaximas && media >= porcentagem)) {
      return console.log(`Aprovado: ${true} \n`);
    };
    return console.log(`Aprovado: ${false} \n`);
  },

  listaAprovacao: function () {
    this.estudantes.forEach((estudante, index) => {
      this.checarAprovacao(index);
    })
  }
}

module.exports = { curso }