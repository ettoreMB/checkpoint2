function Aluno(nome, faltas, notas) {
  this.nome = nome,
  this.nFaltas = faltas,
  this.notas = notas,

  this.media = () => {
    let totalNotas = 0
    this.notas.forEach((nota) => {
        totalNotas += nota
      })
      let mediaFinal = totalNotas / this.notas.length;

      console.log(`A media do aluno ${this.nome} foi ${mediaFinal}`)
      return mediaFinal
    }

  this.faltas = () => {
    let totalFaltas = this.nFaltas + 1;

    if (totalFaltas >= 2) {
      console.log(`O total de faltas do aluno ${this.nome} foram de ${totalFaltas} faltas`)
      return totalFaltas
    }
    console.log(`O total de faltas do aluno ${this.nome} foi de ${totalFaltas} falta`)
    return totalFaltas

  }
}

module.exports = { Aluno }

