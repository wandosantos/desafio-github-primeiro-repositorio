
import React from "react"

const Item = ({children})=>{
    return(
        <a href="/" class="list-group-item list-group-item-action list-group-item-dark">{children}</a>       
    )
}

export default Item