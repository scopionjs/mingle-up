import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { ArrowForward } from '@mui/icons-material'
let Item1 =()=>{
    return(
        <div className='index-item1' >
            <section >
                <h2>find a perfect match and true love online</h2>
            </section>
            <section >
                <p>our mission is to help the singles out there to find true love , hook-ups ,friend and meet new people online</p>
                <Link to='/register' >join now <ArrowForward /> </Link>
            </section>
        </div>
    )
}
export {Item1};