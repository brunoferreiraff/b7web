function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

  // ul.children[0].append("(alterado)");
   
 

   /*  ul.append("<li> Item Adicionado<li>");

    let newLi = document.createElement ("li");
    newLi.innerText = "Item adicionado";

    ul.appendChild(newLi)*/
   
    let newUl = document.createElement('ul')
    
    for ( let i = 0; i < 5; i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = " Item add " + i;
        newUl.append(newLi);
    }
    
}