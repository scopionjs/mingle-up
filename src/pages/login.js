import React from 'react'
import { Link } from 'react-router-dom'
let SignIn =()=>{
    return(
        <div className='sign-in-wrapper' >
                <div className='sign-in-box' >
                    <h1>login</h1>
                    <div className='email-wrapper' >
                        <label >email</label>
                        <input type='email' name='email' placeholder='email' />
                    </div>
                    <div className='password-wrapper' >
                        <label>password</label>
                        <input placeholder='password' type='password' />
                    </div>
                    <button type='submit' >log in</button>
                    <div className='other-links' >
                        <Link to='/' >forgot password?</Link>
                        <Link to='/register' >don't have an account?</Link>
                    </div>
                </div>
        </div>
    )
}
export {SignIn}