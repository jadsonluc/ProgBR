//Nome do aluno - nota1 - nota2 - media - Aprovado

var nomes = ['Igor', 'José', 'Maria']
var notasA = [5, 5.5, 9]
var notasB = [7, 9, 5]

function media(n1, n2){
    return (n1 + n2 ) / 2
}



function passou(media) {
    if (media >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}
for (var index in nomes) {

    var nota1 = notasA[index]
    var nota2 = notasB[index]
    var alunos = nomes[index]
    var m = media(nota1, nota2)
    console.log(alunos + " - " +
                nota1 + " - " +
                nota2 + " - " +
                media(nota1, nota2) + " - " +
                passou(m)
    ) 
}



