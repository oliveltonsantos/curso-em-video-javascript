let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições.`)
console.log(`O primeiro valor é ${num[0]}.`)

/*Uso do indexOf*/

let pos = num.indexOf(2)

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}.`)
}

