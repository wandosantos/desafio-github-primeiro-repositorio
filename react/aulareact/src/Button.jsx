import React from 'react'



function Button(props){

    const {onClick,nome} = props

    return(
        <button onClick={onClick}>{nome}</button>
    )

}
export default Button