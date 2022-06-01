import { ArrowBack,  MoreVert, Phone, Photo, Send, SentimentVerySatisfied, Videocam } from '@mui/icons-material'
import React from 'react'
import { useContext } from "react"
import { hideCenterContext } from '../../contexts/messagebars/centerhide'
import { userdetailscontext } from "../../contexts/userdetails"
import './messagesbars.css'
import { hideLeftContext } from '../../contexts/messagebars/lefthide'
import { hideRightContext } from '../../contexts/messagebars/righthide'
let MessagesCenterBar=()=>{
    let userdetails = useContext(userdetailscontext)
    let centerHideCtx = useContext(hideCenterContext)
    let leftHideCtx=useContext(hideLeftContext)
    let rightHideCtx = useContext(hideRightContext)
    let Back_to_message_list =()=>{
        centerHideCtx.setShouldHide(true)
        leftHideCtx.setShouldHide(false)
        
    }
   let showMedia_files=()=>{
    centerHideCtx.setShouldHide(true)
    rightHideCtx.setShouldHide(false)
   }
    return(
<div className={centerHideCtx.shouldHide?'MessagesCenterBar hide-msg':'MessagesCenterBar'} >
    <div className={userdetails.isDarkMode?"box1 box1-dark":"box1"} >
    <div className='conversation-top-bar' >
        <div onClick={Back_to_message_list} className='arrow-wrapper' ><button><ArrowBack /></button></div>
        <div className={userdetails.isDarkMode?"receiver-profile-wrapper receiver-profile-wrapper-dark":"receiver-profile-wrapper"} ><img alt='img' src='demo2.jpg' /> <p>tom cruz</p> </div>
        <div className='make-calls-wrapper' >
            <button><Phone /></button>
            <button><Videocam /></button>
            <div onClick={showMedia_files} className='arrow-wrapper' ><button><MoreVert /></button></div>
        </div>
    </div>
    <div className='messages-display-area' >

        <div className='sent-msg' contentEditable='false' >
            <p className={userdetails.isDarkMode?"day-sent day-sent-dark":"day-sent"} >12 may</p>
            <p className='sent-msg-body' >hello bbbbbbbbbbbbbbbb   yyyyyyyyyyyyyyy iiiiiiiiiiiiiiiiiiiiiiiii eeeeeeeeeeeeeeeeeeeee sssssssssssss sss there? lorem2 mmmm iiii pppp rrrr ee www bbbb mmmmmm aaaaa ddddddd iiiii ooooo ssssss ddddd zzzzz xxxx pppppppppppppppppppppppppp yyyyyyyyyyyyyyyyyy bbbbbbbbbbbbb rrrrrrrrrrrrr yyyyyyyyyyyyyyyyy iiiii        ppppppp ssss xxx</p>
            <img src='demo1.png' alt='sender' />
        </div>

        <div className='received-msg' contentEditable='false' >
            <p className={userdetails.isDarkMode?"day-received day-received-dark":"day-received"} >12 may</p>
            <p className='received-msg-body' >hello bbbbbbbbbbbbbbbb   yyyyyyyyyyyyyyy iiiiiiiiiiiiiiiiiiiiiiiii eeeeeeeeeeeeeeeeeeeee sssssssssssss sss there? lorem2 mmmm iiii pppp rrrr ee www bbbb mmmmmm aaaaa ddddddd iiiii ooooo ssssss ddddd zzzzz xxxx pppppppppppppppppppppppppp yyyyyyyyyyyyyyyyyy bbbbbbbbbbbbb rrrrrrrrrrrrr yyyyyyyyyyyyyyyyy iiiii        ppppppp ssss xxx</p>
            <img src='demo.jpg' alt='receiver' />
        </div>

        
        <div className='sent-msg' contentEditable='false' >
            <p className={userdetails.isDarkMode?"day-sent day-sent-dark":"day-sent"} >12 may</p>
            <p className='sent-msg-body' >hello bbbbbbbbbbbbbbbb   yyyyyyyyyyyyyyy iiiiiiiiiiiiiiiiiiiiiiiii eeeeeeeeeeeeeeeeeeeee sssssssssssss sss there? lorem2 mmmm iiii pppp rrrr ee www bbbb mmmmmm aaaaa ddddddd iiiii ooooo ssssss ddddd zzzzz xxxx pppppppppppppppppppppppppp yyyyyyyyyyyyyyyyyy bbbbbbbbbbbbb rrrrrrrrrrrrr yyyyyyyyyyyyyyyyy iiiii        ppppppp ssss xxx</p>
            <img src='demo1.png' alt='sender' />
        </div>

        <div className='received-msg' contentEditable='false' >
            <p className={userdetails.isDarkMode?"day-received day-received-dark":"day-received"} >12 may</p>
            <p className='received-msg-body' >hello bbbbbbbbbbbbbbbb   yyyyyyyyyyyyyyy iiiiiiiiiiiiiiiiiiiiiiiii eeeeeeeeeeeeeeeeeeeee sssssssssssss sss there? lorem2 mmmm iiii pppp rrrr ee www bbbb mmmmmm aaaaa ddddddd iiiii ooooo ssssss ddddd zzzzz xxxx pppppppppppppppppppppppppp yyyyyyyyyyyyyyyyyy bbbbbbbbbbbbb rrrrrrrrrrrrr yyyyyyyyyyyyyyyyy iiiii        ppppppp ssss xxx</p>
            <img src='demo.jpg' alt='receiver' />
        </div>

    </div>
             <div className='conversation-bottom-bar' >
                <div className={userdetails.isDarkMode?"message-input-wrapper message-input-wrapper-dark":"message-input-wrapper"} >
                <button><SentimentVerySatisfied /></button><input placeholder='message' /> <button><Photo /></button><button><Send /></button>
                </div>
            </div>
    </div>
</div>
    )
}
export {MessagesCenterBar}