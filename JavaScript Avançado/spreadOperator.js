
var pessoa = {
    name: "Jadson Lucas",
    idade: 32
}

var contato = {
    telefone: 71982474,
    email: "jlas@hotmail.com"
}

var copia = {...pessoa, cidade: "Salvador", ...contato}
copia.idade = 40
copia.name = "João Pedro"

console.log(pessoa)
console.log(copia)

/*Arrays*/

var notasTurma1 = [
    10, 8, 6, 7.5
]

var notasTurma2 = [
    5, 8, 9, 10
]

var todasNotas = [...notasTurma1, ...notasTurma2]

console.log(notasTurma1)
console.log(notasTurma2)
console.log(todasNotas)