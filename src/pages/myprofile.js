import React, { useEffect } from 'react';
import { BottomNavBar } from '../components/navbars/bottomnavbar';
import { TopNavBar } from '../components/navbars/topnavbar';
import { userdetailscontext } from "../contexts/userdetails"
import { useContext} from "react"
import { HomeLeft } from '../components/homebars/homeleft';
import { FirstItem } from '../components/myprofileitems/firstitem';
import { SecondItem } from '../components/myprofileitems/seconditem';
import { ThirdItem } from '../components/myprofileitems/thirditem';
import { protect_routes } from '../lib/protect-routes';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

let MyProfile=()=>{
    let nav = useNavigate()
    let [isLogedIn,setIsLogedIn]=React.useState(null)
    //context for user details
  let userdetails = useContext(userdetailscontext)
  useEffect(()=>{
    protect_routes(nav,userdetails.user_credentials,userdetails.set_user_credentials,setIsLogedIn)
    },[])
    return(
        <div>
            {isLogedIn==null?(<div className="loader-wrapper" color="rgb(205,79,79)" ><CircularProgress /></div>): <div className={userdetails.isDarkMode?"myProfile-wrapper myProfile-wrapper-dark":"myProfile-wrapper"} >
            <TopNavBar /> 
            <div className='myprofile-bars-wrapper' >
            <HomeLeft />
            <div className='myprofile-second-bar' >
            <div>
            <FirstItem />
            <SecondItem />
            <ThirdItem />
            </div>
            </div>
            </div>
            <BottomNavBar />
        </div>}
        </div>
    )
}
export {MyProfile}