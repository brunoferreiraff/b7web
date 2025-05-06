/*function gravidade(){
    console.log('A gravidade do planeta é: ');
    console.log(9.8);
}

//console.log('Olá, tudo bem?')


gravidade(); // Você deve CHAMAR-USAR a função para que ela apareça no log
*/

/*function somar(x,y) {
    let resultado = x + y;
    console.log('Resultado: ' + resultado);
}


somar(7, 1);



function nomeCompleto(nome, sobrenome){
    console.log(`${nome} ${sobrenome}`)
}

nomeCompleto("Bruno", "Ferreira")


function nomeCmplt(nome, sobrenome){
    return `${nome} ${sobrenome}`
}
var completo = nomeCmplt("Bruno", "Alves pedro")

console.log(completo)*/

function maiorDeIdade(idade){
    if(idade >= 18) {
        return('Maior de idade');
    }else {
        return('Menor de idade')
    }
}

let verificacao = maiorDeIdade(29)
console.log(verificacao) 

let count = 0 //variavel de escopo global
function add(){
    // se a variavel tivesse sido criada dentro da função, ela seria especifica da função.
    count += 10;
}

add();

console.log(count);




function addSquares(a, b){
    function square(x){
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3))
