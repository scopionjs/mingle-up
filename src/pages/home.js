import { ArrowForwardIos,Textsms,Favorite,ThumbUp } from '@mui/icons-material'
import { useContext ,useEffect, useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import { userdetailscontext } from "../contexts/userdetails"
import React from 'react'
import { TopNavBar } from "../components/navbars/topnavbar"
import { BottomNavBar } from "../components/navbars/bottomnavbar"
import { HomeCenter } from "../components/homebars/homecentre"
import { HomeLeft } from "../components/homebars/homeleft"
import { HomeRight } from "../components/homebars/homeright"
import { CircularProgress, LinearProgress } from "@mui/material"
import { protect_routes } from "../lib/protect-routes"
import { Cancel, Cloud, CloudUpload, InsertPhoto  } from "@mui/icons-material"
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
let Home =()=>{
  let nav=useNavigate()
  let [isLogedin,setIsLogedIn]=useState(null)
  let [startFetching,set_startFetching]=useState(false)
  //context for user details
  let userdetails = useContext(userdetailscontext)
  // to protect the route
  useEffect(()=>{
    protect_routes(nav,userdetails.user_credentials,userdetails.set_user_credentials,setIsLogedIn)
},[])
//to start fetching fetching data when verified that user is loged in
useEffect(()=>{
  if(isLogedin !==null){
    set_startFetching(true)
  }
},[isLogedin])
let openAddBoard =(e)=>{
  if(e.target.className=='add-board-modal'){
    userdetails.setShowAddToBoardModal(false)
  }
}
    return(
      <div  >
         {isLogedin==null?(<div className="loader-wrapper" color="rgb(205,79,79)" ><CircularProgress /></div>): <div className={userdetails.isDarkMode?"home-wrapper home-wrapper-dark":"home-wrapper"}> 
         <div onClick={openAddBoard} className={userdetails.showAddToBoardModal?'add-board-modal':'add-board-modal hide_modal'} >
          <div className={userdetails.isDarkMode?"add-to-board-item add-to-board-item-dark":"add-to-board-item"} >
            {/* LAYER 1 */ }
            
            <div className="layer1 hide" >
            <button className="cancel" ><Cancel /></button>
              <section className="box1" >
                <p>this will help you to reach many people</p>
              </section>
              <section className="box2" >
                <input placeholder="caption(option)" />
              </section>
              <section className="box3" >
                <label for="photo" >
                  <Cloud />
                  <p>drag and drop or</p>
                  <button> <label for='pic' > <InsertPhoto />  choose file</label><input id="pic" type='file' />  </button>
                </label>
                <input id="photo" type='file' />
              </section>
              <section className="box4" >
                <button disabled='true' > <CloudUpload />submit</button>
              </section>
            </div>
            {/* LAYER 2 */ }
            <div style={{display:"none"}} className="layer2" >
            <img src="demo1.png" /> 
               <div className="items-wrapper" >
                 <Cancel />
               <p>uploading to love board</p>
               <div className="linear-loader-wrapper" >
                 <div></div>
               </div>
               </div>
            </div>

            {/*Layer 3*/}
            <div style={{display:"none"}} className="layer3" >
            <button className="cancel" ><Cancel /></button>
              <ReportProblemIcon />
              <p>failed try again</p>
            </div>
            {/*Layer 4 */}
            <div className="layer4 " >
              <img className="love-board-picture" src="/demo1.png" />
              <div className="items-wrapper" >
                <div className="item1" >
                  <section> <img src="/demo.jpg" /> <span></span> </section>
                  <Link to='/register' >joseph siame</Link>
                </div>
                <div className="item2" ></div>
                <div className="item3" >
                  <button>1</button>
                  <button>2</button>
                </div>
              </div>
            </div>
            {/*Layer 5 */}
          </div>
         </div>
          <TopNavBar />
         <div className="home-bars-wrapper" >

         <HomeLeft />
         <HomeCenter shouldFetch={startFetching} />
         <HomeRight />
         </div>
         <BottomNavBar /> 
         
         </div> }
      </div> 
    )
}
export {Home}