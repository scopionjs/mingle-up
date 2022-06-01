import { FilePresent ,ArrowBack} from '@mui/icons-material'
import React from 'react'
import './messagesbars.css'
import { useContext } from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import { hideRightContext } from '../../contexts/messagebars/righthide'
import { hideCenterContext } from '../../contexts/messagebars/centerhide'
let MessagesRightBar=()=>{
    let centerHideCtx = useContext(hideCenterContext)
    let userdetails = useContext(userdetailscontext)
    let rightHideCtx = useContext(hideRightContext)
    let Back_to_messages =()=>{
        centerHideCtx.setShouldHide(false)
    rightHideCtx.setShouldHide(true)
    }
    return(
        <div className={rightHideCtx.shouldHide?'MessagesRightBar hide-msg':'MessagesRightBar'} >
            <div className={userdetails.isDarkMode?"wrapper wrapper-dark":"wrapper"} >
            <p><div onClick={Back_to_messages} className='back-to-messages arrow-wrapper' ><button><ArrowBack /></button></div>media files <FilePresent /> </p>
            <p>photos (5)</p>
            <div className='photo-list' >
                <img src='demo.jpg' />
                <img src='demo2.jpg' />
                <img src='demo.jpg' />
                <img src='demo2.jpg' />
                <img src='demo.jpg' />
                <img src='demo.jpg' />
                <img src='demo2.jpg' />
                <img src='demo.jpg' />
                <img src='demo2.jpg' />
                <img src='demo.jpg' />
                <img src='demo.jpg' />
                <img src='demo2.jpg' />
                <img src='demo.jpg' />
                <img src='demo2.jpg' />
                <img src='demo.jpg' />
                <img src='demo.jpg' />
                <img src='demo2.jpg' />
                <img src='demo.jpg' />
                <img src='demo2.jpg' />
                <img src='demo.jpg' />
                <img src='demo.jpg' />
                <img src='demo2.jpg' />
                <img src='demo.jpg' />
                <img src='demo2.jpg' />
                <img src='demo.jpg' />
            </div>
            </div>
        </div>
    )
}
export {MessagesRightBar}