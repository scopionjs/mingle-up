import { ArrowForwardIos,Textsms,Favorite,ThumbUp } from '@mui/icons-material'
import React from 'react'
import "./homebars.css"
import { useContext } from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import { Link } from 'react-router-dom'

let HomeCenter =()=>{
    let userdetails = useContext(userdetailscontext)
    return(
        <div className='HomeCenter' >
        <div className={userdetails.isDarkMode?"love-board love-board-dark":"love-board"}>
            <p>love board</p>
            <div>
                <section>
                    <div className='add-to-board'><p>+</p></div>
                </section>
                <section>
                    <button><ArrowForwardIos /></button>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                    <div className='board-item' ><img src='demo.jpg'/></div>
                </section>
            </div>
        </div>

        <div className='available-matches-wrapper' >

<div className={userdetails.isDarkMode?"available-matches available-matches-dark":"available-matches"} >
    <img src='demo2.jpg' />
    <div className='info' >
        <Link to='/'>romance mwewa</Link>
        <p2>21 years old</p2>
    </div>
    <div className='btns' >
    <button> <Textsms /></button>
    <button className='love'><Favorite /></button>
    <button><ThumbUp /></button>
    </div>
</div>

<div className='available-matches' >
    <img src='demo1.png' />
    <div className='info' >
    <Link to='/'>romance mwewa</Link>
        <p2>21 years old</p2>
    </div>
    <div className='btns' >
    <button> <Textsms /></button>
    <button className='love'><Favorite /></button>
    <button><ThumbUp /></button>
    </div>
</div>

<div className='available-matches' >
    <img src='demo.jpg' />
    <div className='info' >
    <Link to='/'>romance mwewa</Link>
        <p2>21 years old</p2>
    </div>
    <div className='btns' >
    <button> <Textsms /></button>
    <button className='love'><Favorite /></button>
    <button><ThumbUp /></button>
    </div>
</div>

        </div>

        </div>
    )
}
export {HomeCenter}