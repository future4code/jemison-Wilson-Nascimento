// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function funcaoDeComparacao(num1, num2) {
        if (num1 < num2) {
            return -1;
        } else {
            return 1
        }
    }
    return array.sort(funcaoDeComparacao)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((numero) => {
        if (numero % 2 === 0) {
            return numero;
        }
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((numero) => {
        if (numero % 2 === 0) {
            return Math.pow(numero, 2)
        }
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for(let numero of array){
        if(numero < maior){
            maior = numero
            return numero
        }
    }
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}