import React, { useRef } from 'react'
import './index.css'
import { Link } from "react-router-dom"
import { Close } from '@mui/icons-material'

let Index_nav =()=>{
     //function to toggle menu
     let menu=useRef()
     let toggleMenu =()=>{
 if(Array.from(menu.current.classList).includes('hide-menu')){
   menu.current.classList.remove('hide-menu')
 }else{
   menu.current.classList.add('hide-menu')
 }
     }
    return(
        <>
        <nav className='index_nav' >
            <div className='index-nav-item1' >
                <Link to='/'>mingle-up</Link>
            </div>
            <div className='index-nav-item2' >
                <Link to='/' >about us <div></div></Link>
                <Link to='/' >contact us<div></div></Link>
                <Link to='/' >how it works<div></div></Link>
            </div>
            <div className='index-nav-item3' >
                <Link to='/login' >login</Link>
                <Link to='/register' >register</Link>
                <div onClick={toggleMenu} className='menu-wrapper' >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
           
        </nav> 
        <div className='index-nav-item4' ref={menu} >
            <section>
                <button onClick={toggleMenu} ><Close /></button>
                <div className='item1' >
                <Link to='/' >about us <div></div></Link>
                </div>
                <div className='item2' >
                <Link to='/' >contact us<div></div></Link>
                </div>
                <div className='item3' >
                <Link to='/' >how it works<div></div></Link>
                </div>
                <div className='item4' >
                <Link to='/login' >login</Link>
                <Link to='/register' >register</Link>
                </div>
            </section>
        </div>
        </>
    )
}
export {Index_nav};