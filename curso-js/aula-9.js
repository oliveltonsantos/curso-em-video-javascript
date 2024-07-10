let notaFinal = 60

if (notaFinal >= 60) {
    console.log("Aluno passou.")
} else if (notaFinal < 60 && notaFinal >= 30) {
    console.log("Aluno de recuperação.")
} else {
    console.log("Aluno reprovado.")
}

let pagouBoleto = false
let venceu = true

if(pagouBoleto == true && venceu == false) {
    console.log('Compra confirmada.')
} else if(pagouBoleto == false && venceu == false) {
    console.log("Compra aguardando pagamento.")
} else if(venceu == true) {
    console.log("Compra cancelada.")
}