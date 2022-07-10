

var alunos = ['Igor', 'Jadson', 'Valter', 'João', 'Suzana', 'Marcos', 'Everton', 'Marina', 'Leo']

for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}

for (var aluno in alunos){
    console.log(alunos[aluno])
}

for (var aluno of alunos){
    console.log(aluno)
}