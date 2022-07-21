let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

ctx.fillStyle = "lightslategray"
ctx.fillRect(20, 20, 100, 200)
ctx.lineWidth = 3
ctx.strokeStyle = "gray"
ctx.strokeRect(20, 20, 100, 200)


ctx.strokeStyle = "gray"
ctx.strokeRect(150, 20, 100, 200)

ctx.clearRect(25, 25, 20, 20)