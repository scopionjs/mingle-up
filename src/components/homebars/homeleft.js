import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./homebars.css"
import { useContext} from "react"
import cookies from 'js-cookie'
import { userdetailscontext } from "../../contexts/userdetails"
import { Favorite, Logout, Message, Notifications, NotListedLocation, Person, Search, ThumbDown, ThumbUp, ToggleOff, ToggleOn } from "@mui/icons-material"
let HomeLeft =()=>{
    let nav =useNavigate()
    let userdetails = useContext(userdetailscontext)
     // function to toggle darkmode
     let toggleDarkMode=()=>{
        if(userdetails.isDarkMode){
          userdetails.setDarkMode(false)
          cookies.set('isDarkMode',false)
        }else{
          userdetails.setDarkMode(true)
          cookies.set('isDarkMode',true)
        }
          }
          //log out user
          let logout_user =()=>{
            cookies.remove('passWord')
            cookies.remove('email')
            nav('/login')
          }
    return(
        <div className='HomeLeft' >
        <div className={userdetails.isDarkMode?"HomeLeft-items-wrapper HomeLeft-items-wrapper-dark":"HomeLeft-items-wrapper"}>
        <Link to='/'><span><Favorite /><Favorite /></span><p>loved me</p></Link>
        <Link to='/'><span><ThumbUp /><ThumbDown /></span><p>liked me</p></Link>
        <Link to='/'> <NotListedLocation /><p>near me</p></Link>
        <Link to='/myprofile'><Person/><p>profile</p></Link>
        <div onClick={toggleDarkMode}>{userdetails.isDarkMode?(<ToggleOn />):( <ToggleOff />) }<p>darkmode</p></div>
        <hr/>
        <div onClick={logout_user} ><Logout /><p>Logout</p></div>
        </div>
        </div>
    )
}
export {HomeLeft}