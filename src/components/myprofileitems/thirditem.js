import React from 'react';
import './profileitems.css'
import { useContext} from "react"
import { userdetailscontext } from "../../contexts/userdetails"
let ThirdItem =()=>{
    let userdetails = useContext(userdetailscontext)
    return(
        <div className={userdetails.isDarkMode?"ThirdItem ThirdItem-dark":"ThirdItem"} >
            <div className='change-password-title' >
                <h3>change password</h3>
            </div>
            <section className='items'>
                <div>
                    <label>old password</label>
                    <input placeholder='old password' /> 
                </div>
                <div>
                    <label>new password</label>
                    <input placeholder='new password' /> 
                </div>
                <button>save</button>
            </section>
        </div>
    )
}
export {ThirdItem}