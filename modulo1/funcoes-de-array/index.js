// RESPOSTAS
//Exercícios de interpretação de código

/*
---EXERCICIO 1

a)  nome: "Amanda Rangel", apelido: "Mandi" 
nome: "Laís Petra", apelido: "Laura"
nome: "Letícia Chijo", apelido: "Chijo"

---EXERCICIO 2

a)['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

---EXERCICIO 3

a) ["Mandi", "Laura"]
*/

//Exercícios de escrita de código

//EXERCICIO 1
/*a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
*/
 /*const ArrayNomeDeDogs = pets.map((item) => {
return item.nome
 })

 console.log(ArrayNomeDeDogs)
*/

/*b)
 const ArraySalsichas = pets.filter((item, index) => {
return item.raca === "Salsicha"
 })

 console.log(ArraySalsichas)
*/
/*c)
const ArrayPoodles = pets.filter((item) => {
item.raca === "Poodle"
})

const ArrayNomeDePoodle = ArrayPoodles.map((item) => {
console.log('Você ganhou um cupom de desconto de 10% para tosar o/a ' + item.nome)
})

console.log(ArrayPoodles)
*/

//EXERCICIO 2

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
const ArrayNomes = produtos.map((item) => {
    return item.nome
})

console.log(ArrayNomes)
