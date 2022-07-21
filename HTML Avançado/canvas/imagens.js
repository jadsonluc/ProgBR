
let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

let img = new Image()
img.src = "./imagem/garrafa.jpg"
img.onload = desenharImg

function desenharImg() {
    ctx.drawImage(this, 20, 20, this.naturalWidth / 1.3, this.naturalHeight / 1.3)
}

