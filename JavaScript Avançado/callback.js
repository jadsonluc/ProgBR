/*Callback é uma função como argumento de outra função*/

/*function ola() {
    console.log("olá")
}

function go() {
    console.log("tcahu,")
}
//ola()

//ola(ola(ola(ola(ola(ola)))))

function name(s, nome) {
s()
 console.log(nome)
}

name(go, "Jadson!")
ola(go(ola()))
/*Porém o caso acima não faz muito sentido, vamos criar uma hipótese melhor abaixo.*/

let usuarios = ["Adriano", "Marcia", "João", "Jadson"]

function inserirUsuario(nome, callback) {
    setTimeout(() => {usuarios.push(nome)
                      callback()}, 16000)
    
}

function listarUsuarios() {
    console.log(usuarios)
}


//listarUsuarios()
inserirUsuario("Roberto", listarUsuarios)