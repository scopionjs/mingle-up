import React from 'react';
import './profileitems.css'
import { AddAPhoto } from '@mui/icons-material'
import { useContext} from "react"
import { userdetailscontext } from "../../contexts/userdetails"
let FirstItem =()=>{
    let userdetails = useContext(userdetailscontext)
    let [image_to_apload,set_image_to_apload]=React.useState()
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
                        <img ref={profile_pic} src='demo.jpg' />
                        <label for="uploadProfile" ><AddAPhoto /></label>
                        <input accept='image/*' ref={inputApload} onChange={uploadPhoto} id='uploadProfile' type='file' />
                    </div>
                    <p>mary natasha</p>

                </div>

            </div>
            <div className='item2' >
                <div className='detail1' >
                    <p>female</p>
                    <p>man</p>
                    <p>cooking</p>
                </div>
                <div className='detail2' >
                   <p>zambia</p>
                    <p>relationship</p>
                    <p>21</p>
                </div>
            </div>
        </div>
    )
}
export {FirstItem}