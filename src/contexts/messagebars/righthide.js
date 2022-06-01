import { createContext, useState } from "react";
import React from 'react'
export  let hideRightContext= createContext()
let RightHide =({children})=>{
let [shouldHide,setShouldHide]=useState(true)
return(
<hideRightContext.Provider value={{shouldHide,setShouldHide}} >
    {children}
</hideRightContext.Provider>
)
}
export {RightHide}