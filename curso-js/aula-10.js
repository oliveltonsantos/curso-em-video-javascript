// Estrutura da função

function preparativoReceita() {
    console.log("Deixar as vasilhas limpas.")
    console.log("Ter os ingredientes.")
    console.log("Pre aquecer o forno.")
}

// Chamando a função

preparativoReceita()


function soma(numeroA, numeroB) {
    let soma = numeroA + numeroB
    console.log(soma)
}

// Você precisa passar os parâmetors para a função
soma(5, 2)


function liquidificador(ingredientes) {
    console.log("Estou misturando: " + ingredientes)
}

liquidificador('banana')


function mediaNota(nota1, nota2, nota3) {
    let soma = nota1 + nota2 + nota3
    let media = soma / 3
    // O return é um comando que tem a função de retorna um resultado.
    return media
}

// A função mediaNota está retornando o valor para a variável mediaRes
let mediaRes = mediaNota(23, 10, 60)




