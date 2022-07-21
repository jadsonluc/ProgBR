 let tela = document.getElementById("tela")

 let ctx = tela.getContext("2d")

 ctx.beginPath()

 ctx.lineWidth = 4
 ctx.strokeStyle = "lightgray"
 ctx.moveTo(10, 10)
 ctx.lineTo(400, 200)
 ctx.stroke()

 ctx.beginPath()

 ctx.lineWidth = 7
 ctx.strokeStyle = "lightslategray"
 ctx.fillStyle = "lightblue"
 ctx.moveTo(50, 10)
 ctx.lineTo(300, 300)
 ctx.lineTo(200, 250)
 ctx.closePath()
 ctx.stroke()
 ctx.fill()