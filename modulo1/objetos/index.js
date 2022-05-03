/* RESPOSTAS
Exercicios de interpretação:

1.a) Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"

2.a) nome: "Juca", idade: 3, raca: "SRD"
nome: "Juba", idade: 3, raca: "SRD"
nome: "Jubo", idade: 3, raca: "SRD

b) É uma sintaxe usada para copiar um objeto ou array inteiro

3.a)false
undefined

b) No primeiro console.log retornou da minhaFuncao - pessoa - beckender. Já o segundo, não encontrou depois de pessoa.
*/

// Exercicio de escrita de código

//1.a)


 const pessoa = {
   nome: "Wilson",
   apelidos: ["Will", "Wilsinho", "Willabi"]
 }

function imprimePessoa(objeto) {
 console.log(
    `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`
 );
}

imprimePessoa(pessoa);
