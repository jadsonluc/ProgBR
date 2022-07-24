
let nome = ""

try{
    if (nome == ""){
        throw "O nome está vazio!"
    }
console.log(nome)
}catch(err){
    console.log("Erro de referência  :", err)
} finally {
    console.log("Boa noite!")
}

