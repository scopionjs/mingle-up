import React from "react";
import { useContext ,useRef } from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import "./navbars.css"
import { Home, Message, Notifications, Search } from "@mui/icons-material"
import { Notification } from "./notification";
import { useNavigate } from "react-router-dom";

let BottomNavBar =()=>{ 
  let navigate =useNavigate()
    let userdetails = useContext(userdetailscontext)
     // function to toggle notifications
  let notificationBar=useRef()
  let toggleNotification =()=>{
    if(Array.from(notificationBar.current.classList).includes('hide')){
      notificationBar.current.classList.remove('hide')
    }else{
      notificationBar.current.classList.add('hide')
    }
  }
   // redirect to messages
   let redirect_to_messages=()=>{
    navigate('/messages')
      }
      // redirect to home
      let redirect_to_home=()=>{
        navigate('/')
      }
    return(
        <div className={userdetails.isDarkMode?"bottom-nav-bar bottom-nav-bar-dark":"bottom-nav-bar"} >
            <div><button onClick={redirect_to_home}><Home /></button></div>
            <div><button onClick={toggleNotification} > <Notifications /> <span>2</span> <section ref={notificationBar} className={userdetails.isDarkMode?"notification-bar-wrapper notification-bar-wrapper-dark hide":"notification-bar-wrapper hide"} ><Notification /></section> </button></div>
            <div><button onClick={redirect_to_messages}> <Message /><span>3</span></button></div>
        </div>
    )
}
export {BottomNavBar}