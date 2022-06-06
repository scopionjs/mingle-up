import axios  from 'axios'
import js_cookies from 'js-cookie'
import { userdetailscontext } from "../contexts/userdetails"
export let login_user =async(Password,email,nav,userdetails)=>{
    try {
        let user_exist=await axios.post('https://dating-app-api-nodejs.vercel.app/api/user/login',{
        passWord:Password,
        email:email
    })
    if(user_exist){
        userdetails.set_user_credentials(user_exist.data.found_user)
        js_cookies.set('email',user_exist.data.found_user.email,{expires:10})
        js_cookies.set('passWord',user_exist.data.found_user.passWord,{expires:10})
        nav('/home')
    }
    } catch (error) {
        // when the cookies credential are changed
        if(error.message.includes('failed with status code 404')){
            js_cookies.remove('email')
            js_cookies.remove('passWord')
            window.location.reload()
        }else{
        // when there are some network errors
            login_user()
        }
    }
}