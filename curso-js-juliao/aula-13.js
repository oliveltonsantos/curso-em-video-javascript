let pessoa = {
    // variáveis
    idade: 18,
    altura: 180,
    peso: 70,

    // funções

    estudar() {
        console.log('Estudando agora.')
    }
}

// chamando as variáveis

console.log(pessoa.altura)
console.log(pessoa.idade)
console.log(pessoa.peso)

// chamando a função

pessoa.estudar()

// objeto dentro de uma lista

let pessoa1 = {
    // variáveis
    idade: 18,
    altura: 180,
    peso: 70,

    // funções

    estudar() {
        console.log('Estudando agora.')
    }
}

let pessoa2 = {
    // variáveis
    idade: 25,
    altura: 160,
    peso: 65,

    // funções

    estudar() {
        console.log('Programar.')
    }
}

let lista = [pessoa1, pessoa2]
console.log(lista)

