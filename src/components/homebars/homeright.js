import React from 'react'
import "./homebars.css"
import { useContext} from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import { Link } from 'react-router-dom'
let HomeRight =()=>{
    let userdetails = useContext(userdetailscontext)
    return(
        <div className={userdetails.isDarkMode?"HomeRight HomeRight-dark":"HomeRight"} >
        <div className='items-wrapper'>
        <div>
<img src={userdetails.user_credentials.profileUrl} alt={userdetails.user_credentials.userName} />
<Link to='/myprofile'>{userdetails.user_credentials.userName}</Link>
        </div>
        <hr/>
        <section>
<p>{userdetails.user_credentials.gender}</p>
<p>{userdetails.user_credentials.interestedIn}</p>
<p>{userdetails.user_credentials.hobbies[0]}</p>
<p>{userdetails.user_credentials.city},{userdetails.user_credentials.country}</p>
<p>{userdetails.user_credentials.lookingFor}</p>
<p>{userdetails.user_credentials.age}</p>
        </section>
        </div>
        </div>
    )
}
export {HomeRight}