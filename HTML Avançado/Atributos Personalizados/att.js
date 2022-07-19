let image = document.getElementById("like")

image.addEventListener("click", function(){
    //image.src = "./imagens/imagem01.png" ou
    let lastImage = image.getAttribute("src")
    image.setAttribute("src", "./imagens/imagem01.png")
    console.log(lastImage)
})

let lista = document.getElementById("lista")
let num = Number(lista.getAttribute("num"))
let conteudo = ""

for ( let i = 1; i <= num; i++) {
    conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo