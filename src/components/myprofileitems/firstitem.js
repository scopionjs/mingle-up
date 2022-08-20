import React from 'react';
import './profileitems.css'
import { AddAPhoto, Block, Chat, Favorite, ThumbUp } from '@mui/icons-material'
import { useContext} from "react"
import { userdetailscontext } from "../../contexts/userdetails"
import axios from 'axios'
let FirstItem =()=>{
    let userdetails = useContext(userdetailscontext)
    let [image_to_apload,set_image_to_apload]=React.useState()
    //PROTECTING THE ROUTE
let inputApload = React.useRef()
let profile_pic =React.useRef()
    let uploadPhoto =async(e)=>{
let image_file =inputApload.current.files[0]
set_image_to_apload(image_file)
let blob = new Blob([image_file])
let url = URL.createObjectURL(blob)
profile_pic.current.src=url

try {
    let data = new FormData();
data.append("file", image_to_apload);
data.append("upload_preset", "mingle-up");
let response = await axios.post("https://api.cloudinary.com/v1_1/dbkpvjl7s/image/upload",data);

if(response){
    let updated =await axios.put(`https://dating-app-api-nodejs.vercel.app/api/user/update/${userdetails.user_credentials._id}`,{profileUrl:response.data.secure_url})
    userdetails.set_user_credentials(updated.data)
    console.log('done')
}else{
    
}
} catch (error) {
    console.log(error.message)
}

    }
  
    return(
        
        <div className={userdetails.isDarkMode?"FirstItem FirstItem-dark":"FirstItem"} >
            <div className='item1' >

                <div className='profile-wrapper' >

                    <div className='profile-pic-wrapper'>
                        <img ref={profile_pic} src={userdetails.user_credentials.profileUrl} alt='' />
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