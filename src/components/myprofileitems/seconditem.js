import React, { useEffect, useRef, useState } from 'react';
import './profileitems.css'
import { useContext} from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import axios  from 'axios'

let SecondItem =()=>{
    let input1 =useRef()
    let input2 =useRef()
    let userdetails = useContext(userdetailscontext);
    let [interestedIn,set_interested_in]=useState(userdetails.user_credentials.interestedIn)
    let[userName,set_userName]=useState(userdetails.user_credentials.userName)
    let[lookingFor,set_lookingFor]=useState(userdetails.user_credentials.lookingFor)
    let [bio,set_bio]=useState(userdetails.user_credentials.bio)
    let update_details =async(e)=>{
        e.target.textContent ='updating..'
        try {
            let updated =await axios.put(`https://dating-app-api-nodejs.vercel.app/api/user/update/${userdetails.user_credentials._id}`,{
                interestedIn,userName,lookingFor,bio
            })
            if(updated){
                e.target.textContent ='done'
                input1.current.value=userName
                input2.current.value=userdetails.user_credentials.bio
                setTimeout(()=>{e.target.textContent ='edit'},3000)
                userdetails.set_user_credentials(updated.data)
            }
        } catch (error) {
            e.target.textContent ='try again'
        }
    }
    useEffect(()=>{
        input1.current.value=userdetails.user_credentials.userName
        input2.current.value=userdetails.user_credentials.bio
    },[])
    return(
        <div className={userdetails.isDarkMode?"SecondItem SecondItem-dark":"SecondItem"} >
            <div className='edit-details-title'><h2>edit Details</h2></div>
            <div className='item1'>

                <section>
                    <div>
                        <label>interested in?</label>
                        <select onChange={(e)=>{set_interested_in(e.target.value)}} >
                            <option  selected={interestedIn=='male'?true:false }   value='male' >male</option>
                            <option selected={interestedIn=='female'?true:false } value='female'>female</option>
                            <option  selected={interestedIn=='both'?true:false } value='both'>both</option>
                        </select>
                    </div>
                    <div>
                        <label>your username?</label>
                        <input ref={input1} onChange={(e)=>{set_userName(e.target.value)}} minLength={5}  placeholder='username' maxLength={20} />
                    </div>
                    <div>
                        <label>you are looking for?</label>
                        <select> 
                        <option onChange={(e)=>{set_lookingFor(e.target.value)}} value='a serious relationship' >a serious relationship</option>
        <option selected={lookingFor=='just friends'?true:false }  value='just friends'>just friends</option>
        <option selected={lookingFor=='friends with benefits'?true:false } value='friends with benefits'>friends with benefits</option>
        <option selected={lookingFor=='marriage'?true:false } value='marriage'>marriage</option>
        <option selected={lookingFor=='hook-ups'?true:false } value='hook-ups'>hook ups</option>
        <option selected={lookingFor=='a fling'?true:false } value='a fling'>a fling</option>
        <option selected={lookingFor=='meet new people'?true:false }  value='meet new people'>meet new people</option>
                        </select>
                    </div>
                </section>

            </div>
            
            <div className='item2'>
                <label>bio?</label>
                <input ref={input2} onChange={(e)=>{set_bio(e.target.value)}} maxLength={45} placeholder='bio' />
                <button onClick={update_details}>save</button>
            </div>
        </div>
    )
}
export {SecondItem}