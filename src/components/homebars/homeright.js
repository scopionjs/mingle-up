import React from 'react'
import "./homebars.css"
import { useContext} from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import { Link } from 'react-router-dom'
let HomeRight =()=>{
    let userdetails = useContext(userdetailscontext)
    return(
        <div className={userdetails.isDarkMode?"HomeRight HomeRight-dark":"HomeRight"} >
        <div className='items-wrapper'>
        <div>
<img src='demo1.png' />
<Link to='/myprofile'>mary natasha</Link>
        </div>
        <hr/>
        <section>
<p>female</p>
<p>men</p>
<p>cooking</p>
<p>serious relationship</p>
<p>lusaka , zambia</p>
<p>21</p>
        </section>
        </div>
        </div>
    )
}
export {HomeRight}