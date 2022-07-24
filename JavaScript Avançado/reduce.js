
function novoAluno(nome, idade) {
    return {nome, idade}
} 

let alunos = [
    novoAluno("Márcio", 40),
    novoAluno("Jadson", 29),
    novoAluno("João", 22),
    novoAluno("Janete", 48)
]

function idadeTurma(total, aluno) {
    return total + aluno.idade;
}

console.log(alunos.reduce(idadeTurma, 0))