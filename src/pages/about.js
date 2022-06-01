import { useParams } from "react-router-dom"
import React from 'react'
let About =()=>{
let {name }= useParams()
    return(
        <div>
            <p>am in about {name}  </p>
        </div>
    )
}
export {About}