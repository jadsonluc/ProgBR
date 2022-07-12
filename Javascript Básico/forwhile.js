var numero = 5

for (var vez = 1; vez <= numero; vez++) {
    console.log(`Executando o for ${vez} vezes `)
}

console.log("Acabou")

while (numero < 18) {
    console.log(`Número ${numero}`)
    numero++;
}

var random = Math.random() * 100

while (random < 90) {
    console.log(random)
    random = Math.random() * 100
}

console.log(random)
