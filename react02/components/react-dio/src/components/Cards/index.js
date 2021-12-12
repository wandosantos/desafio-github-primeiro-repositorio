import { useState } from 'react'
import Button from '../Button/Button'

const Cards = () =>{

   const [valor , setValor] = useState(0)

   function Adicionar(){
       setValor(valor + 1)
   }
   function Remover(){
       setValor(valor - 1)
   }

    return(
        <div className="card">
        <h5  className="card-header">Meu primeiro card</h5>
        <div className="card-body">
        <Button className = "btn btn-outline-secondary" onClick={Adicionar}>
            Adicionar
        </Button>
        <Button className = "btn btn-outline-danger" onClick={Remover}>
            Remover
        </Button>

        <p>{valor}</p>

        </div>
      </div>
    )
}

export default Cards