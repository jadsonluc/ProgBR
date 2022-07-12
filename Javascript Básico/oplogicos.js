/*
&& e
|| ou
! Negativo 
*/

//var a = true
//var b = true
//var c = a && b
//console.log(c)

var idade = 10

var maior20 = idade > 20
var menor30 = idade < 30
var entre = maior20 && menor30

console.log("Idade", idade)
console.log("Maior que 20", maior20)
console.log("menor que 30", menor30)
console.log("Está entre 20 e 30", entre)


var menor10 = idade <= 10
var maior65 = idade >= 65

console.log("gratuidade", menor10 || maior65 )

console.log(!false)