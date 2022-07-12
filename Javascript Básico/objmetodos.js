
function calcMedia() {
     return (this.notas[0] + this.notas[1]) / 2 }

var aluno = {nome: 'Jadson', notas: [9.9, 7.8],
             media: calcMedia
            
}

var aluno1 = {nome: 'João', notas: [8, 6.9],
             media: calcMedia   
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())