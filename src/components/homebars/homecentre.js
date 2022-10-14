import { ArrowForwardIos,Textsms,Favorite,ThumbUp } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import "./homebars.css"
import { useContext } from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import { Link , useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import axios from 'axios'
let matches_array=[]
let HomeCenter =({shouldFetch})=>{
    let matches_wrapper=useRef()
    let nav =useNavigate()
    let userdetails = useContext(userdetailscontext)
    let viewed_ids=[]
    let [startLoading,set_startLoading]=useState(true)
    let [matches,set_matches]=useState([])
    
    //FUNCTION TO FETCH DATA WITH PAGINATION SYSTEM
    let fetchUsers =async()=>{
        // ensuring that the number of viewed ids to be sent are equal to the number of object of displayed items
        if(viewed_ids.length !== matches.length ){
        // balancing the number of ids to be sent with the number of displayed items
            viewed_ids=matches_array.map((item)=>{
                return item._id
            })
            //console.log('on it',matches_array)
        }
        try {
            //console.log('sendin',viewed_ids)
            //fetching users
            let users =await axios.post('https://dating-app-api-nodejs.vercel.app/api/user/fetchfeedbackdata/',{
                gender:userdetails.user_credentials.gender,interested_in:userdetails.user_credentials.interestedIn,max_age:userdetails.user_credentials.maxAge,min_age:userdetails.user_credentials.minAge,viewed_ids
            })
            // when data returned is according to the user's preffered ages
            if(users.data.results){
                //pushing each returned object in a stateless array
                let done = users.data.results.map((item)=>{
                    matches_array.push(item)
                    return true
                })
                //when done pushing
                if(done){
               // matches_array=[...matches].push(...users.data.results)
                  //updating the states and ids-variable at the initial fetch 
                if(matches.length==0){
                    set_matches(matches_array)
                    viewed_ids=users.data.viewed_ids
                set_startLoading(false)
               
                }else{
                    //updating the states and ids-variable in the rest of the states
                    set_matches(match=>match.concat(...users.data.results))
                    set_matches(matches_array)
                    set_startLoading(false)  
                    viewed_ids=users.data.viewed_ids
                }
                }
                // when results are not regarding the users preffered age
            }else if(users.data.incremental_results){
                //when theres are results based on the other users interests
                if(users.data.result_length >0){
                    matches_array=[...matches].concat(...users.data.incremental_results)
                    set_matches(matches_array)
                    viewed_ids=users.data.viewed_ids
                set_startLoading(false)
                //console.log('other users')
                }else{
                    console.log('thats all for today')
                }
            }else{
                console.log(users.data)
            }
        } catch (error) {
            console.log(error.message)
        }

    }
    // intersection observers 
    let observe_last_element_for_matches = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting === true){
                fetchUsers()
            }
        })
    })

    // fetching users when user login is verified
    useEffect(()=>{
        if(shouldFetch==true && matches_array.length==0 ){
            fetchUsers()
        }else if(shouldFetch==true ){
            set_matches(matches_array)
            set_startLoading(false)
        }
    },[shouldFetch])
    useEffect(()=>{
        if(startLoading==false){
            let len=window.document.getElementsByClassName('available-matches-wrapper')[0].childElementCount
            observe_last_element_for_matches.observe(window.document.getElementsByClassName('available-matches-wrapper')[0].children[len-1])
        //Array.from(window.document.getElementsByClassName('available-matches-wrapper')[0].children).forEach(element => {
         //  console.log(element)
       //});
        }
    },[startLoading])
                      //TOGGLE LOVE
    let loveUser =async(user_id)=>{
        await axios.post('https://dating-app-api-nodejs.vercel.app/api/user/love/',{loved:`${user_id}`,lover:`${userdetails.user_credentials._id}`})
        document.querySelector('.available-matches-wrapper').scrollTo(0,500)
    }
    let toggleLove =(e,user_id,user_lovers)=>{
        loveUser(user_id)
        if(e.target.localName == 'button' || e.target.nodeName =="BUTTON" ){
            if(Array.from(e.target.classList).includes('loved')){
                e.target.classList.remove('loved')
            }else{
                e.target.classList.add('loved') 
            }
        }else if(e.target.localName == 'svg' || e.target.nodeName =="svg" ){
            if(Array.from(e.target.parentElement.classList).includes('loved')){
                e.target.parentElement.classList.remove('loved')
            }else{
                e.target.parentElement.classList.add('loved') 
            }
        }else if(e.target.localName == 'path' || e.target.nodeName =="path"){
            if(Array.from(e.target.parentElement.parentElement.classList).includes('loved')){
                e.target.parentElement.parentElement.classList.remove('loved')
            }else{ 
                e.target.parentElement.parentElement.classList.add('loved') 
            }
        }
    };
                        //TOGGLE LIKE
    let likeUser =async(user_id)=>{
        await axios.post('https://dating-app-api-nodejs.vercel.app/api/user/like/',{liked:`${user_id}`,liker:`${userdetails.user_credentials._id}`})
    }
    let toggleLike =(e,user)=>{
         likeUser(user)
         if(e.target.localName == 'button' || e.target.nodeName =="BUTTON" ){
            if(Array.from(e.target.classList).includes('liked')){
                e.target.classList.remove('liked')
               // console.log('disloved',e.target.localName,e)
            }else{
                e.target.classList.add('liked') 
                //console.log('loved',e.target.localName,e)
            }
        }else if(e.target.localName == 'svg' || e.target.nodeName =="svg" ){
            if(Array.from(e.target.parentElement.classList).includes('liked')){
                e.target.parentElement.classList.remove('liked')
               // console.log('disloved',e.target.parentElement.localName)
            }else{
                e.target.parentElement.classList.add('liked') 
        //console.log('loved',e.target.parentElement.localName)
            }
        }else if(e.target.localName == 'path' || e.target.nodeName =="path"){
            if(Array.from(e.target.parentElement.parentElement.classList).includes('liked')){
                e.target.parentElement.parentElement.classList.remove('liked')
                //console.log('disloved',e.target.parentElement.parentElement.localName)
            }else{ 
                e.target.parentElement.parentElement.classList.add('liked') 
        //console.log('loved',e.target.parentElement.parentElement.localName)
            }
        }
    };
    let openConversation=async(user_id,receiver_name,user_dp)=>{
        try {
            let res=await axios.post('http://localhost:5000/api/conversation/create-conversation',{
           members:[`${user_id}`,`${userdetails.user_credentials._id}`],
           members2:[`${userdetails.user_credentials._id}`,`${user_id}`]
        })
        //when the conversation has already been created
        if(res.data.exists){
            nav(`/messages/?fetchmessages=TRUE&&&&conversation_id=${res.data.exists[0]._id}&&&&&&receiver_id=${user_id}&&&&&&receiver_name=${receiver_name}&&&&&&receiver_pic=${user_dp}`)
            
        }else if(res.data._id){
            //when the conversation has already been created
            nav(`/messages/?fetchmessages=TRUE&&&&conversation_id=${res.data._id}&&&&&&receiver_id=${user_id}&&&&&&receiver_name=${receiver_name}&&&&&&receiver_pic=${user_dp}`)
        
        }
      
        } catch (error) {
            console.log(error.message)
        }
    }
    let openAddBoard =(e)=>{
        userdetails.setShowAddToBoardModal(true)
    }
    return(
        <div className='HomeCenter' >
            
        <div className={userdetails.isDarkMode?"love-board love-board-dark":"love-board"}>
            <p>love board</p>
            <div>
                <section>
                    <div onClick={openAddBoard} className='add-to-board'><p>+</p></div>
                </section>
                {startLoading==true?(<section className='love-board-first-loader' ><CircularProgress /> </section>):<section>
                    <button><ArrowForwardIos /></button>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                </section>
                }
                
            </div>
        </div>
{startLoading==true?(<div className='users-list-first-loader' ><CircularProgress /></div>):<div ref={matches_wrapper} className='available-matches-wrapper' >
{matches.map((user,index)=>(
    <div key={index} className={userdetails.isDarkMode?"available-matches available-matches-dark":"available-matches"} >
    <img loading='lazy' alt='' src={user.profileUrl} /> 
    <div className='info' >
        <section className='info1' >
        <Link to='/'>{user.userName}</Link>
        <p>{user.age} years old</p> <p>lives in {user.city},{user.country} </p>
        </section>
        <section className='info2' >
        {user.hobbies.map((hobby,index)=>(
            <p key={index} >hobby</p>
        ))}
        </section>
    </div>
    <div className='btns' >
    <button onClick={()=>{openConversation(user._id,user.userName,user.profileUrl)}} > <Textsms /></button>
    <button onClick={(e)=>{toggleLove(e,user._id,user.lovers);}} className={user.lovers.includes(`${userdetails.user_credentials._id}`) || user.lovers.includes(userdetails.user_credentials._id) ?'loved':''}><Favorite /></button>
    <button onClick={(e)=>{toggleLike(e,user._id,user.likers);}} className={user.likers.includes(`${userdetails.user_credentials._id}`) || user.likers.includes(userdetails.user_credentials._id) ?'liked':''}><ThumbUp /></button>
    </div>
</div>
))}
<div className={userdetails.isDarkMode?"users-list-first-loader users-list-first-loader-dark":"users-list-first-loader"} ><CircularProgress /></div>
        </div>}
        

        </div>
    )
}
export {HomeCenter} 