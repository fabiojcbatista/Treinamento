//1. Escreva um trecho de código para imprimir os números pares definidos por um intervalo de valores inteiros 
//não-negativos inicio e fim. Utilize versões com for e while.
let retorno:number[];
let inicio:number = 0;
let fim:number=10;
let i = inicio;

for(i=inicio;i<=fim;i++){
    if(i % 2 == 0){
        console.log(i+',');
    }
}

while(inicio<=fim){
    if(inicio % 2 == 0){
        console.log(inicio+',');
    }  
    inicio++;
}


//2. Qual o resultado do seguinte bloco de comandos? Qual a explicação para o resultado?
//let i: number = 0;
//while (i != 10) {
 //i += 0.2;
//}
//RESPOSTA -> Entra em estado de loop infinito
console.log('Return 02 => Entra em estado de loop infinito');

//3. Escreva uma função min(x,y) que devolve o menor entre dois números. Não use funções auxiliares de 
//Math. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função.

function min(x:number,y:number):number{
    if (x<y){
        return x;
    }
        return y;
}
console.log('Return 03 => '+min(12,10));

//4. Escreva uma função pow(x,y) que calcula o valor de 𝑥
//𝑦
//, ou seja, x elevado a potência y. Assuma que os 
//valores de x e y são números inteiros não negativos e que 𝑥
//0 = 1 para qualquer valor de x. Apresente uma 
//versão iterativa e uma versão recursiva para a função. Não utilize o operador **. Utilize corretamente a 
//declaração de tipos nos parâmetros e no resultado da função.

function pow (x:number,y:number):number{
    if(y==0){
        return 1;
    }
    return x*pow(x,y-1);
}
console.log('Return 04 => '+pow(2,3));

//5. Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s (assuma qualquer string não vazia) e 
//retorna a mesma string com a primeira letra em maiúscula. Utilize corretamente a declaração de tipos nos 
//parâmetros e no resultado da função.

const s:string = "treinaMENTO Dbserver";
function toMaiusculaPrimeira(s:string):string{
    return s.substring(0,1).toUpperCase()+s.substring(1,s.length).toLowerCase();
}
console.log('Return 05 => '+toMaiusculaPrimeira(s));

//6. Escreva uma função getMax(arr) que recebe um array de número inteiros e retorna o maior elemento 
//encontrado no array. Assuma que o array não está vazio. Não utilize funções auxiliares de outros objetos 
//disponibilizados pelo TypeScript. Utilize corretamente a declaração de tipos nos parâmetros e no resultado da 
//função.

const arr:number[] = [1,2,3,4,5,6,7,8,900,10,20,30,40,50,60,70,80,90,100,200];
let maior:number;
function getMax(arr:number[]): number{
    for(let i=0;i<=arr.length;i++){
        if(i===0){
            maior=arr[i];
        }

        if(arr[i]>maior){
            maior=arr[i];
        }
    }
    return maior;
}

console.log('Return 06 => '+getMax(arr));

//7. Escreva uma função que, utilizando objetos Map, calcule a frequência de cada número presente em um 
//determinado array contendo números inteiros. Utilize corretamente a declaração de tipos nos parâmetros e no 
//resultado da função.

const arrNumero:number[]=[1,2,2,3,4,5,6,2,2,4,5,5,6,6,7,7,7,7];
let cont:number;
const repetidos = arrNumero.map(function(x){
    
   for(let i=0;i<=arrNumero.length;i++){
       if (x==arrNumero[i]){
           cont++;
           arrNumero.splice(i,1);
       }
   }
  
   return "Valor: "+x+" QTDE: "+cont;

});
console.log(repetidos);


/*
console.log(countDuplicates(arr));

function countDuplicates(arr) {
  // Nosso mapa (objeto vazio sem protótipo):
  const map = Object.create(null);
  
  for (const str of arr) {
    map[str] = (map[str] || 0) + 1;
  }
  
  const repeatedMap = Object.create(null);
  for (const prop in map) {
    if (map[prop] > 1) {
      repeatedMap[prop] = map[prop];
    }
  }
  
  return repeatedMap;
}
*/