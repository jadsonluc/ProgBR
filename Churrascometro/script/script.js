/*
Carne - 400gr por pessoa + 6 horas - 650
Cerveja - 1200ml por pessoa + 6 horas - 2000ml
Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
Crianças valem 0,5
*/ 

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    let adultos = inputAdultos.value 
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    let duracaoMaior = (adultos * 650) + (650/2 * criancas)
    let duracaoMenor = (adultos * 400) + (400/2 * criancas)
    let duracaoMaiorCerveja = (adultos * 2000) 
    let duracaoMenorCerveja = (adultos * 1200) 
    let duracaoMaiorBebida = (adultos * 1500) + (1500/2 * criancas)
    let duracaoMenorBebida = (adultos * 1000) + (1000/2 * criancas)
if (duracao >= 6) {
    resultado.innerHTML = `${duracaoMaior/1000}Kg de Carne, <br>
                           ${Math.ceil(duracaoMaiorCerveja/355)} latas de Cerveja, <br>
                           ${duracaoMaiorBebida/1000} litros de Bebidas.`
    
} else {
    resultado.innerHTML = `${duracaoMenor/1000}Kg de Carne, <br>
                           ${Math.ceil(duracaoMenorCerveja/355)} latas de Cerveja, <br>
                           ${duracaoMenorBebida/1000} litros de Bebidas.`
}}






