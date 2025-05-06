let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'

]
let ingredientes2 = ['caramelo', 'feijão', 'perfume']
ingredientes.push(ingredientes2)//Isso é uma função para adicionar mais itens no array
ingredientes.pop()//remove o último item do meu array
ingredientes.shift()//remove o primeiro item do meu array
console.log(`total de ingredientes do bolo: ${ingredientes.length}`)
console.log(ingredientes)

