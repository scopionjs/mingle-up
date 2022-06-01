import React from 'react';
import { BottomNavBar } from '../components/navbars/bottomnavbar';
import { TopNavBar } from '../components/navbars/topnavbar';
import { userdetailscontext } from "../contexts/userdetails"
import { useContext} from "react"
import { HomeLeft } from '../components/homebars/homeleft';
import { FirstItem } from '../components/myprofileitems/firstitem';
import { SecondItem } from '../components/myprofileitems/seconditem';
import { ThirdItem } from '../components/myprofileitems/thirditem';

let MyProfile=()=>{
    //context for user details
  let userdetails = useContext(userdetailscontext)
    return(
        <div className={userdetails.isDarkMode?"myProfile-wrapper myProfile-wrapper-dark":"myProfile-wrapper"} >
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
        </div>
    )
}
export {MyProfile}