
let video = document.getElementById("video1")

function voltar() {
    video.currentTime -= 10
}

function avancar() {
    video.currentTime += 10
}

function diminuirVelocidade() {
    video.playbackRate -= 0.1
}

function aumentarVelocidade() {
    video.playbackRate += 0.1
}

function play() {
    video.play()
}

function stop() {
    video.pause()
    video.currentTime = 0
}