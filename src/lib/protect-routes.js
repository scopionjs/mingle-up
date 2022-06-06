import js_cookies from 'js-cookie'
import axios  from 'axios'
export let protect_routes=async(nav,user_credentials,set_user_credentials,setIsLogedIn)=>{
    if(js_cookies.get('email') && js_cookies.get('passWord')){
        //when loged in but credentials are not store in the context
       if(user_credentials==null){
        try {
            let user_exist=await axios.post('https://dating-app-api-nodejs.vercel.app/api/user/login',{
            passWord:js_cookies.get('passWord'),
            email:js_cookies.get('email')
        })
        if(user_exist){
            set_user_credentials(user_exist.data.found_user)
            js_cookies.set('email',user_exist.data.found_user.email,{expires:10})
            js_cookies.set('passWord',user_exist.data.found_user.passWord,{expires:10})
            setIsLogedIn(true)
        }
        } catch (error) {
            // when the cookies credential are changed
            if(error.message.includes('failed with status code 404')){
                js_cookies.remove('email')
                js_cookies.remove('passWord')
                nav('/login')
            }else{
            // when there are some network errors
            console.log('network errors')
                protect_routes()
            }
        }
       }else{
        // when loged in and credentials are stored in the context
        setIsLogedIn(true)
       }
    }else{
        //when not loged in
        nav('/login')
    }
}