let lista = ["arroz", "feijão", "carne", "azeite", "pão"]

lista.map((item) => {
    console.log(item)
}
) 

let listaNotas = [5, 8, 3, 2]

listaNotas.map((itemgenerico) => {
    let numero = itemgenerico + 1
    console.log(numero)
})

console.log(lista.length)