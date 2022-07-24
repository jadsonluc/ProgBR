/*Uma outra maneira de usar promise*/

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
                          }, 10000)
    })
    return promise
}

function listarUsuarios() {
    console.log(usuarios)
}

async function executar() {
    await inserirUsuario("Ana")
    listarUsuarios()
}

executar()