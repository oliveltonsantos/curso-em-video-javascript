/* 

Crie uma função que irá avaliar as notas de um aluno
e sua presença na aula

Entradas da função:
- porcentagemDePresenca: numero de 0 a 100
- notaA: numero de 0 a 10
- notaB: numero de 0 a 10

Para que o aluno passe de ano, ele deverá ter dois requisitos (os dois 
requisitos têm de ser satisfeitos. Se um deles não for, o aluno reprova)

O aluno passará se:
- A porcentagem de presença for maior que 75 
E
- A média das notas for maior que 6

Saída (retorno):
Se o aluno passou, retornar "Passou"
Se ele reprovou, retornar "Reprovou"

*/

function avaliacaoAluno(porcentagemPresenca, notaA, notaB) {
    let mediaNota = (notaA + notaB) / 2
    if(porcentagemPresenca > 75 && mediaNota > 6) {
        return console.log("Passou.")
    } else {
        return console.log("Reprovou")
    }
}

avaliacaoAluno(73, 5, 9)

