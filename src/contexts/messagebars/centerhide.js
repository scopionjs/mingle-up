import { createContext, useState } from "react";
import React from 'react'
export  let hideCenterContext= createContext()
let CenterHide =({children})=>{
let [shouldHide,setShouldHide]=useState(true)
return( 
<hideCenterContext.Provider value={{shouldHide,setShouldHide}} >
    {children}
</hideCenterContext.Provider>
)
}
export {CenterHide}