//Nome do aluno - nota1 - nota2 - media - Aprovado

var alunos = ['João', 'Maria', 'Pedro', 'Jadson', 'Bombom' ]
var notasA = [9.5, 9, 5, 8, 9.5]
var notasB = [9, 9.2, 4.4, 9, 10]

 function media(n1, n2) {
    return (n1 + n2) / 2
 }

 function aproved(media){
    if (media >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
 }
 
for (var index in alunos) {
    var nome = alunos[index]
    var nota1 = notasA[index]
    var nota2 = notasB[index]
    var m = media(nota1,nota2)
    console.log(nome + " - " + nota1 + " - " + nota2 + " - " + m + " - " + aproved(m))
}