/* 

Crie duas listas:

- uma lista de compras vazia
- uma lista de frutas com as seguintes frutas:
    maça, banana, kiwi, ameixa, abacaxi

Você deverá adicionar comidas do seu gosto na lista de compras.
Porém, ao final, você deverá checar se a sua lista de compras contém pelo menos 3 frutas da lista de frutas.

Caso isso não seja verdade, printe no terminal:
- Deve haver pelo menos 3 frutas.

*/

let listaCompras = []
let listaFrutas = ['maça', 'banana', ' kiwi', 'ameixa', 'abacaxi']

listaCompras.push('bis', ' pão', ' sorvete', ' pudim')
console.log('Foi adicionado a lista estes itens: ' + listaCompras)

let numeroDeFrutas = 0

listaCompras.map((elemento) => {
    if(listaFrutas.includes(elemento)) {
        numeroDeFrutas = numeroDeFrutas + 1
    }
})

if(numeroDeFrutas >= 3) {
    console.log("Tenho 3 ou mais frutas.")
} else {
    console.log("Preciso de mais frutas.")
}

