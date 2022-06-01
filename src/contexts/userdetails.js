import React from "react";
export let userdetailscontext = React.createContext()
let UserDetails =({children})=>{
    // color status state
    let [ isDarkMode,setDarkMode ] =React.useState(false)
    // states to be used everywhere
    let states={
        isDarkMode,setDarkMode
    }
    return(
<userdetailscontext.Provider value={states} >
{children}
</userdetailscontext.Provider>
    )
}
export {UserDetails}