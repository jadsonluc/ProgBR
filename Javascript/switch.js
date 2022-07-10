var nota1 = 8
var nota2 = 1

var media = (nota1 + nota2) / 2

var conceito = ""

if (media >= 8.5) {
    conceito = "Ótimo";
} else if (media >= 7 && media < 8.5) {
    conceito = "Bom";
} else {
    conceito = "Regular";
}

conceito = "Mais ou menos "

console.log(media);
console.log(conceito);

switch(conceito) {
    case "Ótimo":
        console.log("Parabéns, você é um ótimo aluno!")
        break
    case "Bom":
        console.log("Você está indo bem!")
        break
    case "Regular":
        console.log("Você está quase lá, só precisa estudar mais um pouco!")
        break
    default:
        console.log("[ERRO]")
}