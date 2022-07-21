let tela = document.getElementById("tela")

 let ctx = tela.getContext("2d")

  //ctx.arc(x, y, raio, angInicial, angFinal)

  let circle = {
    x : 250,
    y : 250,
    raio : 150,
    angInicial : 0,
    angFinal : 0
}

  function drawCircle(c) {
  
  ctx.beginPath()
  ctx.rect(0, 0, 500, 500)
  ctx.fillStyle = "blue"
  ctx.fill()

  ctx.beginPath()
  ctx.strokeStyle = "gray"
  ctx.fillStyle = 'lightslategray'
 
  ctx.arc(c.x, c.y, c.raio, c.angInicial, c.angFinal)
  ctx.fill()
  ctx.stroke()
  
  }

  setInterval(function(){
    if (circle.angFinal < 2 * Math.PI) {
        circle.angFinal+=0.3
        circle.x += 3
    }
        drawCircle(circle)
  }, 50)