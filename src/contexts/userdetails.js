import React from "react";
import cookies from 'js-cookie'
export let userdetailscontext = React.createContext()
let UserDetails =({children})=>{
    // color status state
    let [ isDarkMode,setDarkMode ] =React.useState(cookies.get('isDarkMode')==undefined?false:cookies.get('isDarkMode'))
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