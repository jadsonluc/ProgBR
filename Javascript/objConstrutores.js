
function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
          nota1: n1,
          nota2: n2,
          media: function() {
          return (this.nota1 + this.nota2) / 2
}}}

/*var calcMedia = function() {
    return (this.nota1 + this.nota2) / 2
}

var turma = [
         {nome: "Jadson",
          nota1: 9,
          nota2: 9.3,
          media: calcMedia},

          {nome: "João",
          not1: 8,
          nota2: 9.3,
          media: calcMedia}
]
 var aluno = turma[1]*/
var aluno = criarAluno("Jadson", 9, 8.5///////////////////////////////////////////////////////////////////////////////////////////////////)
 console.log(aluno)
 console.log(aluno.media())


