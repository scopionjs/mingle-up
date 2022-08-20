import { Search } from '@mui/icons-material'
import React from 'react'
import './messagesbars.css'
import { CircularProgress } from "@mui/material"
import { useContext,useEffect,useState } from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import { hideLeftContext } from '../../contexts/messagebars/lefthide'
import { hideCenterContext } from '../../contexts/messagebars/centerhide'
import axios from 'axios'
import {useNavigate, useSearchParams} from "react-router-dom"
let MessagesLeftBar=({shouldFetch})=>{ 
    let [queries] = useSearchParams()
    let nav=useNavigate()
    let userdetails = useContext(userdetailscontext)
    let leftHideCtx=useContext(hideLeftContext)
    let centerHideCtx = useContext(hideCenterContext)
    let [shouldLoad,setshouldLoad]=useState(true)
    let [fetchedNotifications,setFetchedNotifications]=useState([])
//if the query string contains fetchmessages == TRUE
useEffect(()=>{
if(queries.get("fetchmessages")==="TRUE"){
    leftHideCtx.setShouldHide(true)
    centerHideCtx.setShouldHide(false)
}
},[]) 
    let readMessage=(conversation_id,receiver_id ,receiver_name,receiver_pic)=>{
        //to read msg
     leftHideCtx.setShouldHide(true)
     centerHideCtx.setShouldHide(false)
     centerHideCtx.setQueryChanged(true)
     //window.location.assign('/messages')
     console.log(conversation_id,receiver_id ,receiver_name,receiver_pic)
     nav(`/redirect_to_msg/?fetchmessages=TRUE&&&&conversation_id=${conversation_id}&&&&&&receiver_id=${receiver_id}&&&&&&receiver_name=${receiver_name}&&&&&&receiver_pic=${receiver_pic}`)
    }

    let loading_image_error =(e)=>{
        e.target.src='data:application/octet-stream;base64,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'
    } 

    useEffect(()=>{
        
            (async()=>{
                let conversations= await axios.get(`https://dating-app-api-nodejs.vercel.app/api/conversation/fecth_conversations?id=${userdetails.user_credentials._id}`)
                console.log(conversations.data)
                setFetchedNotifications(conversations.data)
                setshouldLoad(false)
            })()
        
      },[])
      
    return(
        <div className={leftHideCtx.shouldHide?'MessagesLeftBar hide-msg':'MessagesLeftBar '} >
            <div className={userdetails.isDarkMode?"msg-search-wrapper msg-search-wrapper-dark":"msg-search-wrapper"} >
                <h3>chats</h3>
                <section className={userdetails.isDarkMode?"msg-search-box msg-search-box-dark":"msg-search-box"} >
                    <button><Search /></button>
                    <input placeholder='search' />
                </section>
            </div>

            {shouldLoad==true?(<div className="loader-wrapper" color="rgb(205,79,79)" ><CircularProgress /></div>): <div className={userdetails.isDarkMode?"msg-list msg-list-dark":"msg-list"} >
            {fetchedNotifications.fetched_conversations.map((conversation,index)=>(
                <div onClick={()=>{
                    let specific_obj1=fetchedNotifications.mapping_receiver_details.filter((item)=>{
                        return item.id== conversation._id
                    })
                    let url= specific_obj1[0].info.profileUrl

                    let specific_obj2=fetchedNotifications.mapping_receiver_details.filter((item)=>{
                        return item.id== conversation._id
                    })
                    let id= specific_obj2[0].info._id

                    let specific_obj3=fetchedNotifications.mapping_receiver_details.filter((item)=>{
                        return item.id== conversation._id
                    })
                    let a_name= specific_obj3[0].info.userName

                    readMessage(conversation._id,id,a_name,url)
                }} className={userdetails.isDarkMode?"msg-wrapper msg-wrapper-dark":"msg-wrapper"} >
                <section   className='item1' > 
                <div className='msg-profile-wrapper' >
                    <div className='msg-profile' >
                        <img onError={loading_image_error} alt='img' src={
                            (()=>{
                                let specific_obj=fetchedNotifications.mapping_receiver_details.filter((item)=>{
                                    return item.id== conversation._id
                                })
                                let url= specific_obj[0].info.profileUrl
                                return url 
                            })()
        
                            } />
                        <span className='isActive' ></span>
                    </div>
                </div>
                <div className='message-details' >
                    <p className={userdetails.isDarkMode?"receiver receiver-dark":"receiver"} >
                    {
                    (()=>{
                        let specific_obj=fetchedNotifications.mapping_receiver_details.filter((item)=>{
                            return item.id== conversation._id
                        })
                        let name= specific_obj[0].info.userName
                        return name 
                    })()
                    }
                    </p>
                    <p className={userdetails.isDarkMode?"body body-dark":"body"} >{
                        (()=>{
                            let specific_obj=fetchedNotifications.last_message.filter((item)=>{
                                return item.id== conversation._id
                            })

                            if(specific_obj[0].info=='empty'){
                                let specific_obj=fetchedNotifications.mapping_receiver_details.filter((item)=>{
                                    return item.id== conversation._id
                                })
                                let name= specific_obj[0].info.userName
                                return `say hi to ${name}`
                            }else{
                                return specific_obj[0].info.body
                            }

                        })()

                       
                   
                    }
                    </p>
                    <p className={userdetails.isDarkMode?"time time-dark":"time"} >{
                        (()=>{
                            return '24 minutes ago'
                        })()

                    }</p>
                    <span className='status' >{
                    (()=>{
                        let specific_obj=fetchedNotifications.unread_messages.filter((item)=>{
                            return item.id== conversation._id
                        })
                        if(specific_obj[0].info ==0){
                            return ''
                        }else{
                            return specific_obj[0].info
                        }
                    })() 
                    }</span>
                </div>
                </section>
                <hr className={userdetails.isDarkMode?"item2 item2-dark":"item2"} />
            </div>
            ))}
                
            </div>
}
        </div>
    )
    
}
export {MessagesLeftBar}