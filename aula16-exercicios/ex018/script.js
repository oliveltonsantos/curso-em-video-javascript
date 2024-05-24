let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = [] // Variável composta

// Verifica se a caixa está vazia ou se o valor está entre 1 e 100.

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Verifica se o valor já foi adicionado na lista.

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''  // se a pessoa adicionar novos números as respostas anteriores serão apagadas
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // apagar o número já adicionado do campo
    num.focus() // ponteiro do campo ficar piscando
}


function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {

        let tot = valores.length // saber o total de elementos
        let maior = valores[0]
        let menor = valores[0]

        for (let pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = '' // zerar o valor de res
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        
    }
}


