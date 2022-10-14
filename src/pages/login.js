import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios  from 'axios'
import js_cookies from 'js-cookie'
import { userdetailscontext } from "../contexts/userdetails"
import { login_user } from '../lib/loginuser'
let SignIn =()=>{
    let nav = useNavigate() 
    let userdetails = useContext(userdetailscontext)
    // function to login a user when cookies are found  
    useEffect(()=>{
if(js_cookies.get('email') && js_cookies.get('passWord')){
login_user(js_cookies.get('passWord'),js_cookies.get('email'),nav,userdetails)
}
    },[])

    let[email,setEmail]=useState('')
    let[Password,setPassword]=useState('')
    let[email_error,setEmail_error]=useState('')
    let[Password_error,setPassword_error]=useState('')
    let [login_error,set_login_error]=useState('')
    let login_submit=async (e)=>{
        if(email.length ==0){
            setEmail_error('email field must not be empty ')
        }else if(Password.length ==0){
            setPassword_error('password field must not be empty')
        }else{
            e.target.textContent='loging in..'
            try {
                let user_exist=await axios.post('https://dating-app-api-nodejs.vercel.app/api/user/login',{
                passWord:Password,
                email:email
            })
            if(user_exist){
                e.target.textContent='redirecting..'
                userdetails.set_user_credentials(user_exist.data.found_user)
                js_cookies.set('email',user_exist.data.found_user.email,{expires:10})
                js_cookies.set('passWord',user_exist.data.found_user.passWord)
                nav('/home')
            }
            } catch (error) {
                if(error.message.includes('failed with status code 404')){
                    set_login_error('wrong password or e-mail')
                    e.target.textContent='login'
                }else{
                    set_login_error('network error try again')
                    e.target.textContent='try again'

                }
            }
            
        }
    }
    return(
        <div className='sign-in-wrapper' >
                <div className='sign-in-box' >
                    <h1>login</h1>
                    <div className='email-wrapper' >
                        <label >email</label>
                        <input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' placeholder='email' />
                        <p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{email_error}</p>
                    </div>
                    <div className='password-wrapper' >
                        <label>password</label>
                        <input placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} type='password' />
                        <p style={{color:'red',fontSize:"12px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700',marginBottom:'5px'}} >{Password_error}</p>
                    </div>
                    <button onClick={login_submit} type='submit' >log in</button>
                    <p style={{color:'red',fontSize:"12px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'800'}} >{login_error}</p>
                    <div className='other-links' >
                        <Link to='/' >forgot password?</Link>
                        <Link to='/register' >don't have an account?</Link>
                    </div>
                </div>
        </div>
    )
}
export {SignIn}