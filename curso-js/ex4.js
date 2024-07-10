/*

Faça um programa que declare uma lista de alunos de uma escola, com seus respectivos nomes.

Depois, você deve tentar adicionar um aluno novo na lista de alunos. Você deve checar:

- Se a lista de alunos já conter 10 alunos, então você deve printar uma mensagem que o limite máximo foi atingido.
- Se não, adicione um novo aluno.

*/

let listaAlunos = ['Ana', ' Goku', ' Vegeta', ' Trunks', ' Goten']
let alunoNovo = ' Gohan'

if(listaAlunos.length > 10) {
    console.log("Limite atingido. Não podemos adicionar novos alunos.")
}else {
    listaAlunos.push(alunoNovo)
    console.log("Novo aluno(a) adicionado: " + listaAlunos)
}

