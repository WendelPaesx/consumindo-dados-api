async function buscaEndereco(cep) {
    try {


        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro){
            throw Error('CEP nao existe.')

        }
        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch (erro) {
        console.log(erro)
    }
}

let ceps = ['01001000','01001001']
let conjuntoDeCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoDeCeps).then(respostas => console.log(respostas))
console.log(conjuntoDeCeps)