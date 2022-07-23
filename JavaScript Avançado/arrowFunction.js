
function dobro(x) {
    console.log(2*x)
}
dobro(5)

 /*Outra forma de fazer a mesma função é declarando uma variável*/

 let triplo = function(x) {
    console.log(3*x)
 }
 triplo(9)

 /*Existe também as Arrow Function*/

 let quadruplo = (x) => {
    console.log(4 * x)
 }
 quadruplo(10)

 /*Outra maneira de usar as Arrow Function de forma reduzida é:*/

 let quintuplo = x => 5 * x 
 console.log(quintuplo(10))

 /*Porém uma Arrow Function não funciona o this e o bind que vimos na aula anterior*/