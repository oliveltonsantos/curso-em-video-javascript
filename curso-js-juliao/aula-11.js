/*

Problema: 
    - Ganhar dinheiro para fazer uma viagem.
    - Vai começar com R$0
    - Objetivo final é R$30
    - A meta é ganhar R$1 por dia

*/

for(let reais = 0; reais <= 30; reais = reais + 1) {
    console.log("Valor atual: ")
    console.log(reais)
}

let lista = ['João', 'Ana', 'Goku', 'Goten', 'Gohan']

for(let i = 0; i < 5; i = i + 1) {
    // O lista[i] quer dizer que para cada nome da lista na posição X irá ser escrito. Exemplo: João = 0, Ana = 1, Goku = 2, Goten = 3, Gohan = 4
    console.log("O nome da vez é: " + lista[i] + " na posição " + i)
}


let produtos = ['Bolsa', 'Calça', 'Sapato', 'Moleton', 'Vestido']

for(let i = 0; i < produtos.length; i = i + 1) {
    console.log("Produto da lista: " + produtos[i])
}



