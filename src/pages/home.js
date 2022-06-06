
import { useContext ,useEffect, useState} from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { userdetailscontext } from "../contexts/userdetails"
import React from 'react'
import { Notifications } from "@mui/icons-material"
import { TopNavBar } from "../components/navbars/topnavbar"
import { BottomNavBar } from "../components/navbars/bottomnavbar"
import { HomeCenter } from "../components/homebars/homecentre"
import { HomeLeft } from "../components/homebars/homeleft"
import { HomeRight } from "../components/homebars/homeright"
import { CircularProgress } from "@mui/material"
import { protect_routes } from "../lib/protect-routes"
let Home =()=>{
  let nav=useNavigate()
  let [isLogedin,setIsLogedIn]=useState(null)
  let [startLoading,set_startLoading]=useState(true)
  //context for user details
  let userdetails = useContext(userdetailscontext)
  // to protect the route
  useEffect(()=>{
    protect_routes(nav,userdetails.user_credentials,userdetails.set_user_credentials,setIsLogedIn)
},[])
//to start fetching fetching data when verified that user is loged in
useEffect(()=>{
  if(isLogedin !==null){
    console.log('start fetching')
  }
},[isLogedin])
    return(
      <div  >
         {isLogedin==null?(<div className="loader-wrapper" color="rgb(205,79,79)" ><CircularProgress /></div>): <div className={userdetails.isDarkMode?"home-wrapper home-wrapper-dark":"home-wrapper"}>
          <TopNavBar />
         <div className="home-bars-wrapper" >
         <HomeLeft />
         <HomeCenter shouldLoad={startLoading} />
         <HomeRight />
         </div>
         <BottomNavBar />
         </div> }
      </div> 
    )
}
export {Home}