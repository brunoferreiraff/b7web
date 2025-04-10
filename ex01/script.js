console.log("Hello world")
//alert('Olá, mundão!') - Comentário para parar com o alert mas deixar o código para consulta.

let nome = "Bruno"; let sobrenome = "Ferreira"//string
console.log(nome)

var turbo = "José"
console.log(turbo)
console.log(sobrenome)
nome = "Pedro"
var idade = 29

console.log("nome: " + nome + " " + sobrenome )
console.log(`nome: ${nome} ${sobrenome} e ele tem ${idade} anos`)
let logado = true //boolean
let deslogado = false //boolean


 //number
let y = 10 + 5
let z = 10 * 7
let h = 15 / 9
let g = (idade + y + (z / h))
let f = "" //undefined
let r = 4 //Nan
let lista = ["Bruno", " Rua Fortaleza", " Minas Gerais", " Thainá", 14] // array
let nomeCompleto = {
    nome: "Bruno",
    idade: 31,
    endereco: "Rua Fortaleza, 150",
    estado: "Minas Gerais"
}

console.log(g)
console.log(idade+ y + (z / h))

console.log(typeof(r))
console.log(typeof(idade))
console.log(typeof(logado))
console.log(typeof(deslogado))
console.log(typeof(f))
console.log(typeof(nome))
console.log(typeof(lista)) // é array apesar de mostrar object no console.log. Tanto object quanto array são classificados como object. Visto que ambos são listas


if (idade >= 18){ // < > == >= <= != estes são os simbolos que você pode utilizar
    //alert('Você pode jogar no tigrinho')
    console.log("Você é maior de idade")
} else{
    //alert('Você pode jogar no tigrinho')
    console.log("Você não é maior de idade")
}


var idade = 20

if(idade === 20){
    console.log("Você tem 20 anos")
}

var idade = "20"

if(idade == 20){
    console.log(idade + 15)
    console.log("Como foi utilizado == ele deixou passar a string, por isso o resultado errado. Deveria ter utilizado ===")
}


var idade = 65;

if ( idade >= 18 && idade < 60){ // idade menor do que 18 e idade menor do que 60. 
        console.log("Você é um adulto")
    }


    var idade = 65;

if ( idade >= 18 || idade < 60){ // idade menor do que 18 e idade menor do que 60. 
        console.log("Você é um adulto")
    }



var idade = 99

if (idade < 18){
    console.log("você é uma criança")
}else if(idade >= 18 && idade <= 60 ){
    console.log("Você é um adulto")
}else{
    console.log("Você é um idoso")
}


var idade = 12;

var verificacao = idade > 18; // boolean

if(verificacao){
    console.log("Pode brincar no tigrinho")
}else{
    console.log("Não Pode brincar no tigrinho, menor de idade")
}


// condicional ternário
// basicamente, um IF que é feito em uma linha só

let member = true;

let shipping = member ? 2 : 10; // shipping = variavel, member = variavel booleana, interrogacao para validar. primeiro valor é o IF, segundo valor é o ELSE,
console.log("Frete: " + shipping)


let membro = false;

let netflix = (membro ? "Você é assinante" : "Você não é assinante"); // shipping = variavel, member = variavel booleana, interrogacao para validar. primeiro valor é o IF, segundo valor é o ELSE,
console.log(netflix)


let age = 90

let isAdult = ((age >= 18) ? 'Sim' : 'Não');
console.log(isAdult)



let height = 1.8

let building = ((height >= 4.5 )) ? " Parabéns, a construção terminou!" : " Ainda falta subir bastante"
console.log(building)



//switch

let profession = ""

switch (profession){
    case 'fiscal':
        console.log('Sua camisa é verde')
    break;
    case 'bombeiro':
        console.log('Sua camisa é vermelha')
    break;
    case 'policial':
        console.log('Sua camisa é azul')
    break;

    default:
        console.log('Sua camisa será preta')
        break;
    
}