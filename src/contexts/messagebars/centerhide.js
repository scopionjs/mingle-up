import { createContext, useState } from "react";
import React from 'react'
export  let hideCenterContext= createContext()
let CenterHide =({children})=>{
let [shouldHide,setShouldHide]=useState(true)
let [queryChanged,setQueryChanged]=useState(null)
return( 
<hideCenterContext.Provider value={{shouldHide,setShouldHide,queryChanged,setQueryChanged}} >
    {children}
</hideCenterContext.Provider>
)
}
export {CenterHide}