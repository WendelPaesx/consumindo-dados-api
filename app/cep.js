let  consultaCEP = fetch ('https://viacep.com.br/ws/01001250/json')
.then(resposta =>resposta.json())
.then(r => {
    if (r.erro){
        throw Error('cep invalido')
    }else

    
    console.log(r)
})
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('processamento concluido'))
console.log(consultaCEP)