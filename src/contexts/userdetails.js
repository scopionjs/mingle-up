import React from "react";
export let userdetailscontext = React.createContext()
let UserDetails =({children})=>{
    // color status state
    let [ isDarkMode,setDarkMode ] =React.useState(false)
    let [user_credentials,set_user_credentials] =React.useState(null)
    // states to be used everywhere
    let states={
        isDarkMode,setDarkMode,user_credentials,set_user_credentials
    }
    return(
<userdetailscontext.Provider value={states} >
{children}
</userdetailscontext.Provider>
    )
}
export {UserDetails}