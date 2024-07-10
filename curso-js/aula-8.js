/*

Esquema lógico:

se passar na prova for true
    ir ao cinema
se não
    estudar mais

se passarNaProva == true
    irAoCinema()
se não
    estudarMais()

*/

let nota = 7
let notaMinimaPraPassar = 6

if (nota > notaMinimaPraPassar) {
    console.log("Aluno passou.")
} else {
    console.log("Aluno não passou.")
}


let frutas = ['Uva', 'Banana', 'Laranja', 'Ameixa']

if(frutas.includes('Mamão') == true) {
    console.log("A lista está completa.")
} else {
    console.log("Está faltando mamão.")
}

