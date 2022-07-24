let url = "'https://api.apilayer.com/exchangerates_data/live?base=USD&symbols=BRL"



function converter(){
    let input = document.getElementById("valor")
    let valor = input.value
    console.log(valor)

    fetch(url).then((res)=> {
        return res.json()
    }).then((data)=>{
        console.log(data)
        let rate = data.rate.BRL
        document.getElementById("resultado").innerHTML = rate*valor
    })
}
