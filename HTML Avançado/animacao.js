
let jogador = document.getElementById("jogador")

/*let xInicial = 0
let yInicial = 0

function moverJogadorPara(x,y){
    let posX = x + "px"
    let posY = y + "px"
    
    jogador.style.top = posX
    jogador.style.left = posY
}

setInterval(function(){
    moverJogadorPara(xInicial++, yInicial++)
}, 500)*/
let inicioX = 0
let inicioY = 0

function moverQuadrado(x,y){
    let posX = x + "px"
    let posY = y + "px"
    
    jogador.style.top = posX
    jogador.style.left = posY
}

setInterval(function () {
    moverQuadrado(inicioX++, inicioY++)
}, 150)