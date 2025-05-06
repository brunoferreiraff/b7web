/* Calcule a porcentagem entre 2 números.

exemplo: 25% de 40 é 10
Formula da porcentagem: (y / x ) * 100

Uso da função

let x = 40;
let y = 10;
let pct = calcPct(x,y);
console.log(`${pct}$ de ${x} é ${y}) */


function calcPct(q,u){
    let pct = (u / q ) * 100;
    return pct;
   
}

let x = 25
let y = 12
let pct = calcPct(x,y)
console.log(`${pct}% de ${x} é ${y}`);