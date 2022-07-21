let tela = document.getElementById("tela")

 let ctx = tela.getContext("2d")

 //ctx.arc(x, y, raio, angInicial, angFinal)

 let x = 250
 let y = 250
 let raio = 150
 let angInicial = 0
 let angFinal = 2 * Math.PI

 ctx.beginPath()
 ctx.strokeStyle = "gray"
 ctx.fillStyle = 'lightslategray'

 ctx.arc(x, y, raio, angInicial, angFinal)
 ctx.stroke()
 ctx.fill()