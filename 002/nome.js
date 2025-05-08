let nome = 'Bonieky';
let nomes = ['Bonieky', 'Pedro']
let personagens = {
    nome: 'Bonieky',
   cidade: 'fortaleza',
    estado:'Minas Gerais',
    idade: 90,
    caracteristicas: {
        forca: 20,
        magia: 4,
        stamina: 90,
    }
}

console.log(`O personagem ${personagens.nome} tem ${personagens.idade} anos e ele tem ${personagens.caracteristicas.forca} de força`)


personagens.nome = 'Gabriel'
console.log(`O personagem ${personagens.nome} tem ${personagens.idade} anos e ele tem ${personagens.caracteristicas.forca} de força`)


nomes.push('José Marcio')
console.log(nomes)


let person = {
    nome: 'Bruno',
    age: 90,
    car: [ // Coloquei um objeto dentro do meu array. 
        {modelo:'Ferrari', cor: 'Vermelho'},
        {modelo: 'Fiat', cor: 'Preto'},

    ]
}

console.log(person.car[1].modelo) //acessei o objeto, acessei a caracteristica que é um array, escolhi o item e que é outro objeto e escolhi o item dentor do objeto


//funções dentro de um objeto

let pessoa = {
    nome:'Bruno',
    sobrenome: 'Ferreira',
    idad: 32,
    nomeCompleto: function(){
        return `O nome completo do cliente é ${this.nome} ${this.sobrenome} e ele tem ${this.idad} anos` 
    }
}

console.log(pessoa.nomeCompleto())
//console.log(`O nome complleto do cliente é ${nomeCompleto}`)