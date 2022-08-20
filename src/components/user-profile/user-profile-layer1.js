import '../myprofileitems/profileitems.css'
import React from 'react';
import { AddAPhoto, Block, Chat, Favorite, ThumbUp } from '@mui/icons-material'
import { useContext} from "react"
import { userdetailscontext } from "../../contexts/userdetails"

let UserProfileLayer1=()=>{
    let userdetails = useContext(userdetailscontext)
    return(
        <>
         
         <div className={userdetails.isDarkMode?"FirstItem FirstItem-dark":"FirstItem"} >
            <div className='item1' >
                <div className='profile-wrapper' >
                    <div className='profile-pic-wrapper'>
                        <img src='demo.jpg' alt='' />
                    </div>
                    <p>siame joe</p>

                </div>

            </div>
            <div className='item2' >
                <div className='detail1' >
                    <p>male</p>
                    <p>femle</p>
                    <p>widow</p>
                    
                </div> 
                <div className='detail3' >
                    <section className={userdetails.isDarkMode?"bio-wrapper bio-wrapper-dark":"bio-wrapper"} >
                        <p>am a real man of all time</p>
                        
                    </section>
                    <section className={userdetails.isDarkMode?"hobbies-wrapper hobbies-wrapper-dark":"hobbies-wrapper"}>
                    <p>rapping </p>
                    <p>dancing </p>
                    <p>nothing</p>
                    </section>
                    <section className={userdetails.isDarkMode?"buttons-wrapper buttons-wrapper-dark hide":"buttons-wrapper hide"} >
                        <button><Favorite/>love</button>
                        <button> <ThumbUp /> like</button>
                        <button><Chat /> message</button>
                        <button><Block />block</button>
                    </section>
                </div>
                <div className='detail2' >
                   <p>mansa,zambia</p>
                    <p>friends</p>
                    <p>21</p>
                </div>
            </div>
        </div>
        </>
    )
}
export {UserProfileLayer1};