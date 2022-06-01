import { Search } from '@mui/icons-material'
import React from 'react'
import './messagesbars.css'
import { useContext } from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import { hideLeftContext } from '../../contexts/messagebars/lefthide'
import { hideCenterContext } from '../../contexts/messagebars/centerhide'
let MessagesLeftBar=()=>{
    let userdetails = useContext(userdetailscontext)
    let leftHideCtx=useContext(hideLeftContext)
    let centerHideCtx = useContext(hideCenterContext)
    let readMessage=()=>{
     leftHideCtx.setShouldHide(true)
     centerHideCtx.setShouldHide(false)
    }
    return(
        <div className={leftHideCtx.shouldHide?'MessagesLeftBar hide-msg':'MessagesLeftBar '} >
            <div className={userdetails.isDarkMode?"msg-search-wrapper msg-search-wrapper-dark":"msg-search-wrapper"} >
                <h3>chats</h3>
                <section className={userdetails.isDarkMode?"msg-search-box msg-search-box-dark":"msg-search-box"} >
                    <button><Search /></button>
                    <input placeholder='search' />
                </section>
            </div>
            <div className={userdetails.isDarkMode?"msg-list msg-list-dark":"msg-list"} >

                <div onClick={readMessage} className={userdetails.isDarkMode?"msg-wrapper msg-wrapper-dark":"msg-wrapper"} >
                    <section  className='item1' >
                        
                    <div className='msg-profile-wrapper' >
                        <div className='msg-profile' >
                            <img alt='img' src='demo.jpg' />
                            <span className='isActive' ></span>
                        </div>
                    </div>
                    
                    <div className='message-details' >
                        <p className={userdetails.isDarkMode?"receiver receiver-dark":"receiver"} >tom</p>
                        <p className={userdetails.isDarkMode?"body body-dark":"body"} >hello</p>
                        <p className={userdetails.isDarkMode?"time time-dark":"time"} >24 min</p>
                        <span className='status' >3</span>
                    </div>

                    </section>
                    <hr className={userdetails.isDarkMode?"item2 item2-dark":"item2"} />
                </div>

                <div onClick={readMessage} className={userdetails.isDarkMode?"msg-wrapper msg-wrapper-dark":"msg-wrapper"} >
                    <section className='item1' >
                        
                    <div className='msg-profile-wrapper' >
                        <div className='msg-profile' >
                            <img alt='img' src='demo.jpg' />
                            <span className='isActive' ></span>
                        </div>
                    </div>
                    
                    <div className='message-details' >
                        <p className={userdetails.isDarkMode?"receiver receiver-dark":"receiver"} >tom</p>
                        <p className={userdetails.isDarkMode?"body body-dark":"body"} >hello</p>
                        <p className={userdetails.isDarkMode?"time time-dark":"time"} >24 min</p>
                        <span className='status' >3</span>
                    </div>

                    </section>
                    <hr className={userdetails.isDarkMode?"item2 item2-dark":"item2"} />
                </div>
                <div onClick={readMessage} className={userdetails.isDarkMode?"msg-wrapper msg-wrapper-dark":"msg-wrapper"} >
                    <section className='item1' >
                        
                    <div className='msg-profile-wrapper' >
                        <div className='msg-profile' >
                            <img alt='img' src='demo.jpg' />
                            <span className='isActive' ></span>
                        </div>
                    </div>
                    
                    <div className='message-details' >
                        <p className={userdetails.isDarkMode?"receiver receiver-dark":"receiver"} >tom</p>
                        <p className={userdetails.isDarkMode?"body body-dark":"body"} >hello</p>
                        <p className={userdetails.isDarkMode?"time time-dark":"time"} >24 min</p>
                        <span className='status' >3</span>
                    </div>

                    </section>
                    <hr className={userdetails.isDarkMode?"item2 item2-dark":"item2"} />
                </div>
                <div onClick={readMessage} className={userdetails.isDarkMode?"msg-wrapper msg-wrapper-dark":"msg-wrapper"} >
                    <section className='item1' >
                        
                    <div className='msg-profile-wrapper' >
                        <div className='msg-profile' >
                            <img alt='img' src='demo.jpg' />
                            <span className='isActive' ></span>
                        </div>
                    </div>
                    
                    <div className='message-details' >
                        <p className={userdetails.isDarkMode?"receiver receiver-dark":"receiver"} >tom</p>
                        <p className={userdetails.isDarkMode?"body body-dark":"body"} >hello</p>
                        <p className={userdetails.isDarkMode?"time time-dark":"time"} >24 min</p>
                        <span className='status' >3</span>
                    </div>

                    </section>
                    <hr className={userdetails.isDarkMode?"item2 item2-dark":"item2"} />
                </div>
                <div onClick={readMessage} className={userdetails.isDarkMode?"msg-wrapper msg-wrapper-dark":"msg-wrapper"} >
                    <section className='item1' >
                        
                    <div className='msg-profile-wrapper' >
                        <div className='msg-profile' >
                            <img alt='img' src='demo.jpg' />
                            <span className='isActive' ></span>
                        </div>
                    </div>
                    
                    <div className='message-details' >
                        <p className={userdetails.isDarkMode?"receiver receiver-dark":"receiver"} >tom</p>
                        <p className={userdetails.isDarkMode?"body body-dark":"body"} >hello</p>
                        <p className={userdetails.isDarkMode?"time time-dark":"time"} >24 min</p>
                        <span className='status' >3</span>
                    </div>

                    </section>
                    <hr className={userdetails.isDarkMode?"item2 item2-dark":"item2"} />
                </div>
                <div onClick={readMessage} className={userdetails.isDarkMode?"msg-wrapper msg-wrapper-dark":"msg-wrapper"} >
                    <section className='item1' >
                        
                    <div className='msg-profile-wrapper' >
                        <div className='msg-profile' >
                            <img alt='img' src='demo.jpg' />
                            <span className='isActive' ></span>
                        </div>
                    </div>
                    
                    <div className='message-details' >
                        <p className={userdetails.isDarkMode?"receiver receiver-dark":"receiver"} >tom</p>
                        <p className={userdetails.isDarkMode?"body body-dark":"body"} >hello</p>
                        <p className={userdetails.isDarkMode?"time time-dark":"time"} >24 min</p>
                        <span className='status' >3</span>
                    </div>

                    </section>
                    <hr className={userdetails.isDarkMode?"item2 item2-dark":"item2"} />
                </div>
                <div onClick={readMessage} className={userdetails.isDarkMode?"msg-wrapper msg-wrapper-dark":"msg-wrapper"} >
                    <section className='item1' >
                        
                    <div className='msg-profile-wrapper' >
                        <div className='msg-profile' >
                            <img alt='img' src='demo.jpg' />
                            <span className='isActive' ></span>
                        </div>
                    </div>
                    
                    <div className='message-details' >
                        <p className={userdetails.isDarkMode?"receiver receiver-dark":"receiver"} >tom</p>
                        <p className={userdetails.isDarkMode?"body body-dark":"body"} >hello</p>
                        <p className={userdetails.isDarkMode?"time time-dark":"time"} >24 min</p>
                        <span className='status' >3</span>
                    </div>

                    </section>
                    <hr className={userdetails.isDarkMode?"item2 item2-dark":"item2"} />
                </div>
            </div>
        </div>
    )
}
export {MessagesLeftBar}