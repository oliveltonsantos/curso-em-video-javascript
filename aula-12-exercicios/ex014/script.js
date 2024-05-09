function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = './Imagens/morning.jpg'
        document.body.style.background = '#006d8e'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = './Imagens/afternoon.jpg'
        document.body.style.background = '#fdae5f'
    } else {
        // BOA NOITE!
        img.src = './Imagens/night.jpg'
        document.body.style.background = '#2c394c'
    }
}