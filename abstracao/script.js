/**
 -Implemente uma função que cria e retorna um elemenro  HTML,
-Ela deve receber o nome do elemento HTML a ser criado e um objeto com os atributos
que o elemento deve conter;
-A quantidade de atributos que o elemento ira conter pode variar.
 */

const inputeElement = (inputName , atributos)=>{
    const elementInput = document.createElement(inputName)
    const atributoArray = Object.entries(atributos)

    atributoArray.forEach(([key , value])=>{
        
        elementInput.setAttribute(key, value)
    })
    
    console.log(elementInput)

}


const input = inputeElement('input', { //elemento e o objeto(atributos)
    type:'text',
    id:'box',
    value:'total',
    for:'index.html',
    name:'wando'
})

console.log(input)