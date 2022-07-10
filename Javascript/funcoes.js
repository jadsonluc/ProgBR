
function media(n1, n2) {
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2) / 2
    //console.log(media)
    return media
}

var resultado1 = media(7, 9)
var resultado2 = media(5, 9)
var resultado3 = media(3, 8)
var resultado4 = media(7, 9)
var resultado5 = media(9, 3)
var m = media

var resultado7 = m(6, 9.5)

console.log(resultado1, resultado2, resultado3, resultado4, resultado5)
console.log(m(2.5, 5.5))

function saudacao(){
    return 'Olá mundo!'
}

var s = saudacao

console.log(s())

var media = function (n1, n2) {
    return (n1 + n2) / 2
}

var m = media(5.5, 9.7)


console.log(m)