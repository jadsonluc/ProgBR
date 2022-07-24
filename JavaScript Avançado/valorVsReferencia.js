
function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("João", 27),
    novoAluno("Jadson", 29),
    novoAluno("Janete", 38),
    novoAluno("Marlene", 47)
]

function alunoDaquiA5Anos(aluno) {
    let novoAluno = aluno
    novoAluno.idade += 5
    return novoAluno
}


console.log(alunos.map(alunoDaquiA5Anos))