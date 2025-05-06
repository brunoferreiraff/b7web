//exercicio de array
//1. No array abaixo, qual o número que pega a ferrari?
let carros = ['bmw', 'Ferrari', 'mercedes']
console.log(`O número que é o da ${carros[1]} é o 1.`)

//Troque a ferrari por Audi
console.log('2. Lista com Audi:')
carros[1] = 'Audi';
console.log(carros)

//3. Adicione volto a lista

console.log('3. Lista com volvo:')
carros.push('Volvo')
console.log(carros)

//4. Exiba quantos itens tem no array
console.log(`4. Itens no array: ${carros.length}`)