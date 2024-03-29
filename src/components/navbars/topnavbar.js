import { useContext, useRef } from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import "./navbars.css"
import React from 'react'
import { Home, Logout, Message, Notifications, NotListedLocation, Person, Search, ThumbUp, ToggleOff, ToggleOn } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import { Notification } from "./notification"
import cookies from 'js-cookie'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
let TopNavBar =()=>{
    let navigate =useNavigate()
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
    //function to toggle menu
    let menu=useRef()
    let toggleMenu =()=>{
if(Array.from(menu.current.classList).includes('hide-menu')){
  menu.current.classList.remove('hide-menu')
  //menu.current.setAttribute('style','right:75%;')
}else{
  menu.current.classList.add('hide-menu')
 // menu.current.setAttribute('style','right:-75%;')
}
    }
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
    navigate('/home')
  }
  //log out user
  let logout_user =()=>{
    cookies.remove('passWord')
    cookies.remove('email')
    navigate('/login')
  }
      return(
        <div className="top-nav-bars" >
          <nav className={userdetails.isDarkMode?"desktop-top-nav desktop-top-nav-dark":"desktop-top-nav"} >
            <div className="item1" >
              <h1>dating site</h1>
            </div>
            <div className="item2" >
            <div className={userdetails.isDarkMode?"search-wrapper search-wrapper-dark":"search-wrapper"} >
              <input  placeholder="search for a person" ></input><button><Search/></button>
            </div>
            </div>
            <div className="item3" >
              <button onClick={redirect_to_home} ><Home /></button>
              <button onClick={redirect_to_messages} ><Message /><span>2</span></button>
              <button className="notification-icon"  onClick={toggleNotification}><Notifications /><span>3</span>
              <section ref={notificationBar} className={userdetails.isDarkMode?"notification-bar-wrapper notification-bar-wrapper-dark hide":"notification-bar-wrapper hide"} >
              <Notification></Notification>
              </section>
              </button>
            </div>
          </nav>
          <nav className={userdetails.isDarkMode?"mobile-top-nav mobile-top-nav-dark":"mobile-top-nav"} >

            <div className="item1" >
            <Link  to="/" ><FavoriteBorderIcon /> Loved me</Link>
            </div>

            <div className="item2" >
            <div className={userdetails.isDarkMode?"search-wrapper search-wrapper-dark":"search-wrapper"} >
              <input  placeholder="search for a person" ></input><button><Search/></button>
            </div>
            </div>

            <div className="item3" >
            <Link  to="/" ><ThumbUpOffAltIcon /> Liked me</Link>
            </div>

            <div className="item4" onClick={toggleMenu} >
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div ref={menu}  className={userdetails.isDarkMode?"menu-bar-wrapper menu-bar-wrapper-dark hide-menu":"menu-bar-wrapper hide-menu"} >
              <section>
                <span className="item1"><Link to='/'><ThumbUp /><p> Liked me</p></Link></span>
                <span className="item1"> <Link to='/'><NotListedLocation /><p> near me</p> </Link> </span>
                <span className="item1"><Link to='/myprofile'> <Person /><p> profile</p></Link></span>
                <span className="item2" onClick={toggleDarkMode}>{userdetails.isDarkMode?(<ToggleOn />):( <ToggleOff />) } <p>dark mode</p></span>
                <span onClick={logout_user} className="item2"><Logout /> <p> Logout</p></span>
              </section>
             
            </div>
            </div>


          </nav>
        </div> 
      )
  }
  export {TopNavBar}