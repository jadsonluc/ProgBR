var nota1 = 9
var nota2 = 8

var media = (nota1 + nota2) / 2

if (media >= 5) {
    console.log (`Sua média foi ${media}, Aprovado!`)
} else {
    console.log(`Sua média foi ${media}, você está em recuperação!`)
}

var idade = 72

if(idade >= 18 && idade <= 35){
    console.log("Mostre sua identidade")
} else if (idade > 35 && idade <= 70) {
    console.log("Faça seu pedido")
} else if(idade < 18) {
    console.log("você é menor de idade, volte futuramente!")
} else if (idade > 70) {
    console.log("Você não deve consumir bebida alcóolica, consulte seu médico!")
}