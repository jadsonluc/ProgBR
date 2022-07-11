function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) /2
}}}

var turma = [
    criarAluno("Jadson", 9, 8),
    criarAluno("João", 9.2, 6.5),
    criarAluno("Maria", 8, 9.6)
]

for (var alunos of turma){
    console.log(alunos.nome + " - " + alunos.media())
}