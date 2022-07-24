
/*
function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("João", 27),
    novoAluno("Jadson", 29),
    novoAluno("Janete", 38),
    novoAluno("Marlene", 47)
]


for(let aluno of alunos) {
    if (aluno.idade < 35){
    console.log(aluno.nome + " " + aluno.idade + " anos de idade")
}}
*/
/*Vamos fazer o mesmo exemplo acima com FILTER*/
/*
function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("João", 27),
    novoAluno("Jadson", 29),
    novoAluno("Janete", 38),
    novoAluno("Marlene", 47)
]

 function menosDe30(aluno) {
    return aluno.idade < 30
 }

 function maisDe30(aluno) {
    return aluno.idade > 30
 }

 let alunosComMenosde30 = alunos.filter(menosDe30)

 let alunosComMaisde30 = alunos.filter(maisDe30)

 console.log(alunosComMenosde30)
 console.log(alunosComMaisde30)
 */

 /*Como fazer a mesma coisa usando callback e boleanos*/
 
/*
 function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("João", 27),
    novoAluno("Jadson", 29),
    novoAluno("Janete", 38),
    novoAluno("Marlene", 47)
]


 function menosDe30(aluno) {
    return aluno.idade < 30
 }

 function maisDe30(aluno) {
    return aluno.idade > 30
 }

 function filtro(callback) {
    let alunosFiltrados = []
    for(let aluno of alunos){
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados
 }

 console.log(filtro(maisDe30))
 */
/*Usando os filtros da própria array*/

function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("João", 27),
    novoAluno("Jadson", 29),
    novoAluno("Janete", 38),
    novoAluno("Marlene", 47)
]


 function menosDe30(aluno) {
    return aluno.idade < 30
 }

 function maisDe30(aluno) {
    return aluno.idade > 30
 }


 console.log(alunos.filter(menosDe30))

