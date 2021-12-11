import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Button from './Button'



function nomealert(a,b){
     alert(a+b)

}

function sum(){
    
    
    return (
       

        <div>
            <Button onClick={()=> nomealert(2,3)} nome='wando santos' />
        </div>
        
    )
}

function primeiroJSX(){
    return(
        <div>

        <h1>
            dos santos 
        </h1>
            Soma:{sum(3,2)}
        </div>
    )
}

const App = () =>{
    return (

        <div className="App">

    <h2>
        wando
    </h2>
        {primeiroJSX()}
        </div>
        )
}


const rootElement = document.getElementById('root')

ReactDOM.render(
    <App />,rootElement
)