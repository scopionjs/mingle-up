import React from 'react';
import './profileitems.css'
import { useContext} from "react"
import { userdetailscontext } from "../../contexts/userdetails"

let SecondItem =()=>{

    let userdetails = useContext(userdetailscontext)
    return(
        <div className={userdetails.isDarkMode?"SecondItem SecondItem-dark":"SecondItem"} >
            <div className='edit-details-title'><h2>edit Details</h2></div>
            <div className='item1'>
                <section>
                    <div>
                        <label>interested in?</label>
                        <select>
                            <option value='male' >male</option>
                            <option  value='female'>female</option>
                            <option  value='both'>both</option>
                        </select>
                    </div>
                    <div>
                        <label>hobbies?</label>
                        <input placeholder='hobbies' />
                    </div>
                    <div>
                        <label>what are youlooking for?</label>
                        <select>
                            <option value='relationship'>a relationship</option>
                            <option value='friends'>just friends</option>
                            <option value='fling'>fling</option>
                            <option value='hook-up'>hook-up</option>
                        </select>
                    </div>
                </section>
            </div>
            <div className='item2'>
                <label>username</label>
                <input placeholder='username' />
                <button>save</button>
            </div>
        </div>
    )
}
export {SecondItem}