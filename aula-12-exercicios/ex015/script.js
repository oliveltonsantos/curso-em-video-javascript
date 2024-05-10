function verificar() {
    var ano = window.document.getElementById('ano')
    var agora = new Date()
    var anoatual = agora.getFullYear()
    var anodig = Number(ano.value)
    var idade = anoatual - anodig
    var masc = window.document.getElementById('masculino')
    var fem = window.document.getElementById('feminino')
    var sexo1 = masc
    var sexo2 = fem
    var msg = window.document.getElementById('msg')
    
    if (sexo1 = masc) {
        msg.innerHTML = `Seu sexo é ${sexo1.name} e sua idade é ${idade} anos.` 
    } else (sexo2 = fem) {
        msg.innerHTML = `Seu sexo é ${sexo2.name} e sua idade é ${idade} anos.`
    }
}

