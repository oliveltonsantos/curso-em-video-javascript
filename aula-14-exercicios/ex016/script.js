function contar() {
    var ninicial = window.document.getElementById('ninicial')
    var nfinal = window.document.getElementById('nfinal')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    if (passo.value.length == 0) {
        window.alert('Passo inválido! Considerando PASSO com valor igual a 1.')
    } else (ninicial.value.length == 0 || nfinal.value.length == 0) 
    window.alert('Impossível contar!')
}