
import { useContext ,useEffect} from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { userdetailscontext } from "../contexts/userdetails"
import React from 'react'
import { Notifications } from "@mui/icons-material"
import { TopNavBar } from "../components/navbars/topnavbar"
import { BottomNavBar } from "../components/navbars/bottomnavbar"
import { HomeCenter } from "../components/homebars/homecentre"
import { HomeLeft } from "../components/homebars/homeleft"
import { HomeRight } from "../components/homebars/homeright"

let Home =()=>{
  //context for user details
  let userdetails = useContext(userdetailscontext)
  useEffect(()=>{
    console.log()
},[])
    return(
      <div className={userdetails.isDarkMode?"home-wrapper home-wrapper-dark":"home-wrapper"} >
         <TopNavBar />
         <div className="home-bars-wrapper" >
         <HomeLeft />
         <HomeCenter />
         <HomeRight />
         </div>
         <BottomNavBar />
      </div> 
    )
}
export {Home}