/*Promises veio pra substituir o Callback e melhorar a antiga applicação*/

let usuarios = ["Adriano", "Marcia", "João", "Jadson"]

function inserirUsuario(nome) {

    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {usuarios.push(nome)

                          let error = false

                          if(!error) {
                            resolve() 
                          }else{
                            reject({msg:"Erro de qualquer coisa"})
                          }
                          }, 1000)
    })
    return promise
}

function listarUsuarios() {
    console.log(usuarios)
}

//listarUsuarios()
inserirUsuario("Janete").then(listarUsuarios).catch((error) => {
    console.log(error.msg)
})

