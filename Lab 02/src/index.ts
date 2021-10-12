//1. Escreva um trecho de código para imprimir os números pares definidos por um intervalo de valores inteiros 
//não-negativos inicio e fim. Utilize versões com for e while.
const numeros = [1,2,3,4,5,6,7,8,9,10];
const pares = numeros.filter((x:number)=> x % 2 ==0);
console.log('Return 01 => '+pares);


//2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado?
//let i: number = 0;
//while (i != 10) {
 //i += 0.2;
//}
//RESPOSTA -> Entra em estado de loop infinito

