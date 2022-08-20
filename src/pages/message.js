import React from 'react'
import { useContext ,useEffect, useState} from "react"
import {  useLocation, useNavigate } from "react-router-dom"
import { userdetailscontext } from "../contexts/userdetails"
import { BottomNavBar } from '../components/navbars/bottomnavbar';
import { TopNavBar } from '../components/navbars/topnavbar';
import {MessagesLeftBar} from '../components/messagesbars/massagesleftbar'
import {MessagesCenterBar} from '../components/messagesbars/messagescenterbar'
import {MessagesRightBar} from '../components/messagesbars/messagesrightbar'
import { CircularProgress } from "@mui/material"
import { protect_routes } from "../lib/protect-routes"
import { CenterHide } from '../contexts/messagebars/centerhide';

let Message =()=>{
  let {search} = useLocation()
  let nav=useNavigate()
  let CenterHideCtx = useContext(CenterHide)
  let [isLogedin,setIsLogedIn]=useState(null)
  let [startFetching,set_startFetching]=useState(false)
  let [queryChanged,setQueryChanged]=useState(null)
  let [re_startFetching,set_re_startFetching]=useState(false)
    //context for user details
  let userdetails = useContext(userdetailscontext)
  // to protect the route
  useEffect(()=>{
    protect_routes(nav,userdetails.user_credentials,userdetails.set_user_credentials,setIsLogedIn)
},[])

//trigger the fetch
useEffect(()=>{
    if(isLogedin !==null){
      set_startFetching(true)
    }
  },[isLogedin])
//
useEffect(()=>{
if(search){

  if(re_startFetching==true){
    set_re_startFetching(false)
    console.log('detected change 1')
  }else if(re_startFetching==false){
    set_re_startFetching(true)
    console.log('detected change 2')
  }else{
    set_re_startFetching(false)
    console.log('detected change 3')
  }

}

},[search])
    return(
        <div>

{isLogedin==null?(<div className="loader-wrapper" ><CircularProgress /></div>):  <div className={userdetails.isDarkMode?"Message-page Message-page-dark":"Message-page"} >
            <TopNavBar />
            <div className='message-bars-wrapper' >
                <MessagesLeftBar shouldFetch={startFetching} queryChanged={setQueryChanged}  />
                <MessagesCenterBar />
                <MessagesRightBar shouldFetch={re_startFetching} />
            </div>
            <BottomNavBar />
        </div>
}
        </div>
        
    )
}
export {Message}