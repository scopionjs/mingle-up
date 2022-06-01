import React from 'react'
import { Link } from 'react-router-dom'
import "./homebars.css"
import { useContext} from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import { Favorite, Logout, Message, Notifications, NotListedLocation, Person, Search, ThumbDown, ThumbUp, ToggleOff, ToggleOn } from "@mui/icons-material"

let HomeLeft =()=>{
    let userdetails = useContext(userdetailscontext)
     // function to toggle darkmode
     let toggleDarkMode=()=>{
        if(userdetails.isDarkMode){
          userdetails.setDarkMode(false)
        }else{
          userdetails.setDarkMode(true)
        }
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
        <div><Logout /><p>Logout</p></div>
        </div>
        </div>
    )
}
export {HomeLeft}