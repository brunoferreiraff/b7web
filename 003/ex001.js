const input = document.querySelector('input');
const lista = document.querySelector('ul');

input.addEventListener('keyup', handleKeyUp);

function handleKeyUp(e) {
    if(e.key === 'Enter'){
        //adiciona o elemento na lista
    const newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    lista.appendChild(newLi);
    //limpa o input para a inserção de novos elementos
    input.value = ' ';
    }
}