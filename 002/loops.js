let cores = [
    {nome:'preto', qt: 10},
    {nome:'azul', qt: 15},
    {nome:'lilas', qt: 9}
]
cores.push('lilas')

/*
for(let n = 2; n < cores.length; n++){ //são necessárias 3 regras
    console.log(cores[n])
}*/

for(let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase();
}

/*
for (let cor of cores){
    console.group(cor.nome)
}*/

console.log(cores)