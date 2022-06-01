import React from 'react'
import { useContext} from "react"
import { userdetailscontext } from "../contexts/userdetails"
import { BottomNavBar } from '../components/navbars/bottomnavbar';
import { TopNavBar } from '../components/navbars/topnavbar';
import {MessagesLeftBar} from '../components/messagesbars/massagesleftbar'
import {MessagesCenterBar} from '../components/messagesbars/messagescenterbar'
import {MessagesRightBar} from '../components/messagesbars/messagesrightbar'
let Message =()=>{
    //context for user details
  let userdetails = useContext(userdetailscontext)
    return(
        <div className={userdetails.isDarkMode?"Message-page Message-page-dark":"Message-page"} >
            <TopNavBar />
            <div className='message-bars-wrapper' >
                <MessagesLeftBar />
                <MessagesCenterBar />
                <MessagesRightBar />
            </div>
            <BottomNavBar />
        </div>
    )
}
export {Message}