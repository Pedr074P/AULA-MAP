/** //declarando um array vazio
var numeros=[];

//adicionando elementos ao array
numeros.push(4);
numeros.push(10);

//acessando elementos do array
console.log(numeros[0]);
console.log(numeros[1]); **/

//usando arrays map
const numeros= [1, 2, 3, 4, 5];
const dobrados= numeros.map(numero => numero*2);
console.log(dobrados);

//usando forEach
let notas = [8, 9, 7];
notas.forEach((nota,index,array) => array[index]=nota+1);
console.log(notas);