

var aluno = {
    matricula: 454545,
    nome: "Jadson",
    telefone: 7198247,
    Cidade: "Salvador"
}

const {matricula, nome, ...resto} = aluno

console.log(resto)

/*var {matricula, nome} = aluno

console.log(matricula)
console.log(nome)

var copia = {...aluno}
copia.nome = "João"
copia.telefone = 4544545454
console.log(copia)*/


var aluno1 = {
    matricula: 3333,
    nome: "João",
    telefone: 7198245557,
    Cidade: "Salvador"
}


var aluno2 = {
    matricula: 3333,
    nome: "Marcos",
    telefone: 7198245557,
    Cidade: "Salvador"
}

var alunos = [aluno, aluno1, aluno2]

var [ Jadson, ...outros] = alunos

console.log(Jadson)

console.log(outros)