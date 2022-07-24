

function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("João", 27),
    novoAluno("Jadson", 29),
    novoAluno("Janete", 38),
    novoAluno("Marlene", 47)
]

function nomeIdade(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos."
}


console.log(alunos.map(nomeIdade))