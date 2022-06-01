import { createContext, useState } from "react";
import React from 'react'
export  let hideLeftContext= createContext()
let LeftHide =({children})=>{
let [shouldHide,setShouldHide]=useState(false)
return(
<hideLeftContext.Provider value={{shouldHide,setShouldHide}} >
    {children}
</hideLeftContext.Provider>
)
}
export {LeftHide}