import { ArrowForwardIos,Textsms,Favorite,ThumbUp } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import "./homebars.css"
import { useContext } from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import axios from 'axios'
let matches_array=[]
let HomeCenter =({shouldFetch,loveBoardData,usersData})=>{
    let matches_wrapper=useRef()
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
                //console.log('available',users.data.viewed_ids,matches_array)
                }else{
                    //updating the states and ids-variable in the rest of the states
                    set_matches(match=>match.concat(...users.data.results))
                    set_matches(matches_array)
                    set_startLoading(false)  
                    viewed_ids=users.data.viewed_ids
                //console.log('available',users.data.viewed_ids,matches_array)
                }
                }
                // when results are not regarding the users preffered age
            }else if(users.data.incremental_results){
                //when theres are results based on the other users interests
                if(users.data.result_length >0){
                    matches_array=[...matches].concat(...users.data.incremental_results)
                    set_matches(matches_array)
                    viewed_ids=users.data.viewed_ids
                    console.log('available',users.data.viewed_ids,viewed_ids)
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
        if(shouldFetch==true){
            fetchUsers()
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
    return(
        <div className='HomeCenter' >
        <div className={userdetails.isDarkMode?"love-board love-board-dark":"love-board"}>
            <p>love board</p>
            <div>
                <section>
                    <div className='add-to-board'><p>+</p></div>
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
    <img src={user.profileUrl} />
    <div className='info' >
        <Link to='/'>{user.userName}</Link>
        <p2>{user.age} years old</p2>
    </div>
    <div className='btns' >
    <button> <Textsms /></button>
    <button className='love'><Favorite /></button>
    <button><ThumbUp /></button>
    </div>
</div>
))}
<div className='users-list-first-loader' ><CircularProgress /></div>
        </div>}
        

        </div>
    )
}
export {HomeCenter}