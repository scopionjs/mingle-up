import React, { useEffect } from 'react';
import { BottomNavBar } from '../components/navbars/bottomnavbar';
import { TopNavBar } from '../components/navbars/topnavbar';
import { HomeLeft } from '../components/homebars/homeleft';
import { UserProfileLayer1 } from '../components/user-profile/user-profile-layer1';
import { userdetailscontext } from "../contexts/userdetails"
import { useContext} from "react"
let UserProfile =()=>{
    let userdetails = useContext(userdetailscontext)
return(
    <div>
 <div className={userdetails.isDarkMode?"myProfile-wrapper myProfile-wrapper-dark":"myProfile-wrapper"} >
    <TopNavBar /> 
    <div className='myprofile-bars-wrapper' >
    <HomeLeft />
    <div className='myprofile-second-bar' >
    <div>
    <UserProfileLayer1 />
    </div>
    </div>
    </div>
    <BottomNavBar />
</div>
</div>
)
}

export {UserProfile};