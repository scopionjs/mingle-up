import React from 'react';
import './profileitems.css'
import { AddAPhoto, Block, Chat, Favorite, ThumbUp } from '@mui/icons-material'
import { useContext} from "react"
import { userdetailscontext } from "../../contexts/userdetails"
let FirstItem =()=>{
    let userdetails = useContext(userdetailscontext)
    let [image_to_apload,set_image_to_apload]=React.useState()
    //PROTECTING THE ROUTE
let inputApload = React.useRef()
let profile_pic =React.useRef()
    let uploadPhoto =(e)=>{
let image_file =inputApload.current.files[0]
set_image_to_apload(image_file)
let blob = new Blob([image_file])
let url = URL.createObjectURL(blob)
profile_pic.current.src=url
    }
  
    return(
        
        <div className={userdetails.isDarkMode?"FirstItem FirstItem-dark":"FirstItem"} >
            <div className='item1' >

                <div className='profile-wrapper' >

                    <div className='profile-pic-wrapper'>
                        <img ref={profile_pic} src='demo.jpg' alt='' />
                        <label for="uploadProfile" ><AddAPhoto /></label>
                        <input accept='image/*' ref={inputApload} onChange={uploadPhoto} id='uploadProfile' type='file' />
                    </div>
                    <p>{userdetails.user_credentials.userName}</p>

                </div>

            </div>
            <div className='item2' >
                <div className='detail1' >
                    <p>{userdetails.user_credentials.gender}</p>
                    <p>{userdetails.user_credentials.interestedIn=='male'?'men':'women'}</p>
                    <p>{userdetails.user_credentials.status}</p>
                    
                </div> 
                <div className='detail3' >
                    <section className={userdetails.isDarkMode?"bio-wrapper bio-wrapper-dark":"bio-wrapper"} >
                        <p>{userdetails.user_credentials.bio}</p>
                        
                    </section>
                    <section className={userdetails.isDarkMode?"hobbies-wrapper hobbies-wrapper-dark":"hobbies-wrapper"}>
                        {userdetails.user_credentials.hobbies.map((hobby,index)=>(
                            <p>{hobby}</p>
                            
                        ))}
                    </section>
                    <section style={{display:'none'}} className={userdetails.isDarkMode?"buttons-wrapper buttons-wrapper-dark hide":"buttons-wrapper hide"} >
                        <button><Favorite/>love</button>
                        <button> <ThumbUp /> like</button>
                        <button><Chat /> message</button>
                        <button><Block />block</button>
                    </section>
                </div>
                <div className='detail2' >
                   <p>{userdetails.user_credentials.city},{userdetails.user_credentials.country}</p>
                    <p>{userdetails.user_credentials.lookingFor}</p>
                    <p>{userdetails.user_credentials.age}</p>
                </div>
            </div>
        </div>
    )
}
export {FirstItem}