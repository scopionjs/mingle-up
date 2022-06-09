import { AddPhotoAlternate } from '@mui/icons-material'
import axios  from 'axios'
import React, {useContext, useLayoutEffect , useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userdetailscontext } from "../contexts/userdetails"
import { login_user } from '../lib/loginuser'
import js_cookies from 'js-cookie'
let SignUp =()=>{
    let nav = useNavigate()
    let userdetails = useContext(userdetailscontext)
    // function to login a user when cookies are found  
    useLayoutEffect(()=>{
if(js_cookies.get('email') && js_cookies.get('passWord')){
login_user(js_cookies.get('passWord'),js_cookies.get('email'),nav,userdetails)
}
    },[])
    //TARGET WRAPPERS
    let step1=useRef()
    let step2=useRef()
    let step3=useRef()
    // SETTING STATES FOR STEP 1
    let[userName,setUserName]=useState(null)
    let[email,setEmail]=useState(null)
    let[newPassword,setNewPassword]=useState(null)
    let[re_entered_password,set_re_entered_password]=useState(null)
    let[gender,set_gender]=useState('male')
           //SUBMIT STEP1
           let[userName_error,setUserName_error]=useState()
           let[email_error,setEmail_error]=useState()
           let[newPassword_error,setNewPassword_error]=useState()
           let[re_entered_password_error,set_re_entered_password_error]=useState()
           let[gender_error,set_gender_error]=useState()
           let btn=useRef()
    let submit_step1 =async()=>{
          // form validation
        if(userName==null){
            setUserName_error('')
            setEmail_error('')
            setNewPassword_error('')
            set_re_entered_password_error('')
            set_gender_error('')


            setUserName_error('username field is empty')
        }else if(userName.length <5){
            setUserName_error('')
            setEmail_error('')
            setNewPassword_error('')
            set_re_entered_password_error('')
            set_gender_error('')

            setUserName_error('username length must be more than five')
        }else if(email==null){
            setUserName_error('')
            setEmail_error('')
            setNewPassword_error('')
            set_re_entered_password_error('')
            set_gender_error('')

            setEmail_error('email field is empty')

        }else if(email.length <=5 ){
            setUserName_error('')
            setEmail_error('')
            setNewPassword_error('')
            set_re_entered_password_error('')
            set_gender_error('')

            setEmail_error('email length must be more than five')
        }else if(newPassword==null){
            setUserName_error('')
            setEmail_error('')
            setNewPassword_error('')
            set_re_entered_password_error('')
            set_gender_error('')

            setNewPassword_error('new-password field is empty')
        }else if(re_entered_password==null){
            setUserName_error('')
            setEmail_error('')
            setNewPassword_error('')
            set_re_entered_password_error('')
            set_gender_error('')

            set_re_entered_password_error('re entered password field is empty')
        }else if(newPassword.length <=5){
            setUserName_error('')
            setEmail_error('')
            setNewPassword_error('')
            set_re_entered_password_error('')
            set_gender_error('')

            setNewPassword_error('Password length must be more than five')
        }else if(newPassword != re_entered_password){
            setUserName_error('')
            setEmail_error('')
            setNewPassword_error('')
            set_re_entered_password_error('')
            set_gender_error('')

            set_re_entered_password_error('re-entered password does not match with the initial one')
        }else if(gender==null){
            setUserName_error('')
            setEmail_error('')
            setNewPassword_error('')
            set_re_entered_password_error('')
            set_gender_error('')

            set_gender_error('gender must be selected')
        }else{
            setUserName_error('')
            setEmail_error('')
            setNewPassword_error('')
            set_re_entered_password_error('')
            set_gender_error('')
           //CHECK IF E-MAIL EXISTS
            try {
                btn.current.textContent ='checking..'
                let email_exists=await axios.get(`https://dating-app-api-nodejs.vercel.app/api/user/isregistred/${email}`)
                if(email_exists.data.is_registered){
                    btn.current.textContent ='email already exists'
                 setEmail_error('an account with this email already exist')
                 setTimeout(()=>{ btn.current.textContent ='next'},3000)   
                }else{
                    step1.current.classList.add('hide')
                    step2.current.classList.remove('hide')

                }
            } catch (error) {
                btn.current.textContent ='failed try again'
                console.log(error.message)
            }
        }

    }
         // SETTING STATES FOR STEP 2
    let [ looking_for,set_looking_for ]=useState('meet new people')
    let [interested_in,set_interested_in]=useState('male')
    let [hobbies,set_hobbies]=useState([])
    let [age,set_age]=useState(null)
    let [age_error,set_age_error]=useState()
        
    let [looking_for_error,set_looking_for_error ]=useState()
    let [interested_in_error,set_interested_in_error]=useState()
    let [hobbies_error,set_hobbies_error]=useState()

               //adding entered hobbies
               let entered_hobbies=[]
    let addHobby =(e)=>{
        if(e.target.value.length >3){
            if(e.code == "Space" || e.key=="Enter" || e.code=="NumpadEnter" || e.code=="Comma" || e.key ==','){
                entered_hobbies.push(e.target.value)
                set_hobbies(entered_hobbies.concat(...hobbies))
            e.target.value=''
                
            }
        }
        setUserName_error('')
            
            if(entered_hobbies.length>4){
                set_hobbies_error('')
            }
    }
                             //SUBMIT STEP2
let btn2=useRef()
      let submit_step2 =()=>{
if(looking_for == null){
    set_looking_for_error('')
    set_age_error('')
    set_interested_in_error('')
    set_hobbies_error('')
    set_looking_for_error('please choose what you are looking for on this platform')
}else if(interested_in == null){
    set_looking_for_error('')
    set_age_error('')
    set_interested_in_error('')
    set_hobbies_error('')
    set_interested_in_error('you need to tell us whom you are interested in')
}else if(hobbies.length <3){
    set_looking_for_error('')
    set_age_error('')
    set_interested_in_error('')
    set_hobbies_error('')
    set_hobbies_error('atleast tell us 3 or more hobbies')
}else if(age<18){
    set_looking_for_error('')
    set_age_error('')
    set_interested_in_error('')
    set_hobbies_error('')
    set_age_error('you need to be above 18 years old to register')
    btn2.current.textContent='under-age !'
}else{
    set_looking_for_error('')
    set_age_error('')
    set_interested_in_error('')
    set_hobbies_error('')
    btn2.current.textContent='proccessing..'
     step2.current.classList.add('hide')
     step3.current.classList.remove('hide')
}
      
    }
                        // SETTING STATES FOR STEP 3
    let [status,set_status]=useState("single")
    let [min_age,set_min_age]=useState(18)
    let [max_age,set_max_age]=useState(60)
    let [bio,set_bio ]=useState(looking_for=='meet new people'?'i want to meet new people on mingle-up':`hey am looking for ${looking_for} on mingle-up`)
    let [first_date_expectations , set_first_date_expectations]=useState(null)
    let [profile_image ,set_profile_image]=useState(null)
                     //error states
    let[first_date_expectations_error , set_first_date_expectations_error]=useState('')
    let [profile_image_error ,set_profile_image_error]=useState('')
                          //STEP3 SUBMIT
    let submit_step3=async(e)=>{
        if(first_date_expectations==null){
            set_first_date_expectations_error('tell us what you expect on the first date')
        }else if(profile_image==null){
            set_profile_image_error('people need to see your identity please')
        }else{
            e.target.setAttribute('disabled','true')
            try {
                e.target.textContent='analysing..'
                  let location =await axios.get('https://api.ipbase.com/v1/json/')
                  if(location){
                    e.target.textContent='initializing..'
                    let data = new FormData();
                    data.append("file", profile_image);
                    data.append("upload_preset", "mingle-up");
                    let response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dbkpvjl7s/image/upload",
                    data
                    );
                    e.target.textContent='creating..'
                    let create_user= await axios.post('https://dating-app-api-nodejs.vercel.app/api/user/create',{
                        userName:userName,
                        email:email,
                        passWord:re_entered_password,
                        gender:gender,
                        interestedIn:interested_in,
                        lookingFor:looking_for,
                        age:age,
                        hobbies:hobbies,
                        bio:bio,
                        minAge:+min_age,
                        maxAge:+max_age,
                        profileUrl:response.data.secure_url,
                        status:status,
                        country:location.data.country_name,
                        city:location.data.city,
                        firstDateExpectation:first_date_expectations,
                      })

                      if(create_user){
                        e.target.textContent='created !'
                        setTimeout(()=>{
                           
                           nav('/login')
                        },3000)
                      }
                  }
            } catch (error) {
                e.target.removeAttribute('disabled')
                if(error.message =='Request failed with status code 403' || error.status==403 ){
                    e.target.textContent='email already exists'
                }else{
                    e.target.textContent='failed try again'
                    console.log(error.message)        
                }
            }
        }
    }
    
    let image=useRef()
    let add_pp=(e)=>{
        set_profile_image_error('')
       if(e.target.files[0].type.includes('image/')){
            let blob =new Blob([e.target.files[0]])
        let _url=URL.createObjectURL(blob)
        set_profile_image(e.target.files[0])
        image.current.classList.remove('hide')
        image.current.src=_url
       }else{
        set_profile_image_error('the file should be of type image , kindly choose an image')
       }
        
    }
    return( 
        <div className='register-wrapper' >
            {/*step 1*/}
<div className='step1 ' ref={step1} >
    <h3>register</h3>
    <div className='register-name' >
        <label>name</label>
        <input placeholder='name' onChange={(e)=>{setUserName(e.target.value); }}  maxLength={20}  />
    </div>
    <p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{userName_error}</p>

    <div className='register-email' >
        <label>email</label>
        <input onChange={(e)=>{setEmail(e.target.value) }} placeholder='email' type='email' />
    </div>
    <p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{email_error}</p>

    <div className='register-password' >
        <label>new password</label>
        <input onChange={(e)=>{ setNewPassword(e.target.value) }} placeholder='password' type='password' />
    </div>
    <p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{newPassword_error}</p>

    <div className='register-password-repeat' >
        <label>re-enter password</label>
        <input onChange={(e)=>{ set_re_entered_password(e.target.value) }} placeholder='re-enter password' type='password'  />
    </div>
    <p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{re_entered_password_error}</p>

    <div className='register-gender' >
        <label>gender</label>
        <select onChange={(e)=>{set_gender(e.target.value) }} >
            <option value='male' >male</option>
            <option  value='female'>female</option>
        </select>
    </div>
    <p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{gender_error}</p>

    <button ref={btn} onClick={submit_step1}  >next</button>
</div>
                {/*step 2*/}
<div ref={step2} className='step2  hide' >
    <h3>step 2</h3>
<div className='register-looking-for' >
    <label>what are you looking for</label>
    <select  onChange={(e)=>{ set_looking_for(e.target.value) }} >
        <option value='a serious relationship' >a serious relationship</option>
        <option value='just friends'>just friends</option>
        <option value='friends with benefits'>friends with benefits</option>
        <option value='marriage'>marriage</option>
        <option value='hook-ups'>hook ups</option>
        <option value='a fling'>a fling</option>
        <option selected value='meet new people'>meet new people</option>
    </select>
</div>
<p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{looking_for_error}</p>
<div className='register-interested-in' >
    <label>
        who are you interested in
    </label>
    <select onChange={(e)=>{set_interested_in(e.target.value )}} >
        <option value='male' >men</option>
        <option value='female' >women</option>
    </select>
</div>
<p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{interested_in_error}</p>
<div className='register-hobbies' >
    <label>hobbies</label>
    <input onKeyUp={addHobby} />
</div>
<p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{hobbies_error}</p>
<div style={{display:'flex' , gap:'2px',height:'auto' , flexWrap:'wrap',width:'80%',maxWidth:'80%'}} >
        {
            hobbies.map((hobby)=>(
            <p style={{backgroundColor:'#EEEEEE',borderRadius:"8px",padding:'2px',fontFamily
        :'sans-serif',fontSize:'12px',fontWeight:'700'}}>{hobby}</p>
        ))
        }
    </div>
<div className='dob' >
    <label>date of birth</label>
    <section>
    <select name='month'  className='day-dob' >
        <option value='1' >1</option>
        <option value='2' >2</option>
        <option value='3' >3</option>
        <option value='4' >4</option>
        <option value='5' >5</option>
        <option value='6' >6</option>
        <option value='7' >7</option>
        <option value='8' >8</option>
        <option value='9' >9</option>
        <option value='10' >10</option>
        <option value='11' >11</option>
        <option value='12' >12</option>
        <option value='13' >13</option>
        <option value='14' >14</option>
        <option value='15' >15</option>
        <option value='16' >16</option>
        <option value='17' >17</option>
        <option value='18' >18</option>
        <option value='19' >19</option>
        <option value='20' >20</option>
        <option value='21' >21</option>
        <option value='22' >22</option>
        <option value='23' >23</option>
        <option value='24' >24</option>
        <option value='25' >25</option>
        <option value='26' >26</option>
        <option value='27' >27</option>
        <option value='28' >28</option>
        <option value='29' >29</option>
        <option value='30' >30</option>
        <option value='31' >31</option>
    </select>
    <select name='month' className='month-dob' >
        <option value='1' >1</option>
        <option value='2' >2</option>
        <option value='3' >3</option>
        <option value='4' >4</option>
        <option value='5' >5</option>
        <option value='6' >6</option>
        <option value='7' >7</option>
        <option value='8' >8</option>
        <option value='9' >9</option>
        <option value='10' >10</option>
        <option value='11' >11</option>
        <option value='12' >12</option>
    </select>
<input type='number'  onChange={(e)=>{
    if(e.target.value.length ==4){
        let current_year=new Date().getFullYear()
    let dif=current_year-(+e.target.value)
    set_age(dif)
    if(dif>=18){
        set_age_error('')
    }else{
        set_age_error('you must be older than 18')
    }
    }else{
        set_age_error('must be four numbers')
    }
}} maxLength={4} />

    </section>
    <p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{age_error}</p>
</div>
<button onClick={submit_step2} ref={btn2}  >next</button>
</div>
<div>
    </div>
                          {/*step 3*/}
    <div ref={step3} className='step3 hide' >
        <h3>almost done !</h3>
        <div className='register-status' >
            <label>status</label>
            <select onChange={(e)=>{ set_status(e.target.value) }} >
                <option value='single' >single</option>
                <option value='married' >married</option>
                <option value='in a relationship' >in a relationship</option>
            </select>
        </div>
        <div className='register-prefered-age' >
            <label>prefered age ?</label>
<section>
<div><p>from</p></div>
            <select onChange={(e)=>{ set_min_age(+e.target.value) }}  >
                <option selected value='18' >18</option>
                <option value='19' >19</option>
                <option value='20' >20</option>
                <option value='21' >21</option>
                <option value='22' >22</option>
                <option value='23' >23</option>
                <option value='24' >24</option>
                <option value='25' >25</option>
                <option value='26' >26</option>
                <option value='27' >27</option>
                <option value='28' >28</option>
                <option value='29' >29</option>
                <option value='30' >30</option>
                <option value='31' >31</option>
                <option value='32' >32</option>
                <option value='33' >33</option>
                <option value='34' >34</option>
                <option value='35' >35</option>
                <option value='36' >36</option>
                <option value='37' >37</option>
                <option value='38' >38</option>
                <option value='39' >39</option>
                <option value='40' >40</option>
                <option value='41' >41</option>
                <option value='42' >42</option>
                <option value='43' >43</option>
                <option value='44' >44</option>
                <option value='45' >45</option>
                <option value='46' >46</option>
                <option value='47' >47</option>
                <option value='48' >48</option>
                <option value='49' >49</option>
                <option value='50' >50</option>
                <option value='51' >51</option>
                <option value='52' >52</option>
                <option value='53' >53</option>
                <option value='54' >54</option>
                <option value='55' >55</option>
                <option value='56' >56</option>
                <option value='57' >57</option>
                <option value='58' >58</option>
                <option value='59' >59</option>
                <option value='60' >60</option>
                <option value='61' >61</option>
                <option value='62' >62</option>
                <option value='63' >63</option>
                <option value='64' >64</option>
                <option value='65' >65</option>
                <option value='66' >66</option>
                <option value='67' >67</option>
                <option value='68' >68</option>
                <option value='69' >69</option>
                <option value='70' >70</option>
                <option value='71' >71</option>
            </select>
            <div><p>to</p></div>
            <select onChange={(e)=>{ set_max_age(+e.target.value) }}  >
                <option value='18' >18</option>
                <option value='19' >19</option>
                <option value='20' >20</option>
                <option value='21' >21</option>
                <option value='22' >22</option>
                <option value='23' >23</option>
                <option value='24' >24</option>
                <option value='25' >25</option>
                <option value='26' >26</option>
                <option value='27' >27</option>
                <option value='28' >28</option>
                <option value='29' >29</option>
                <option value='30' >30</option>
                <option value='31' >31</option>
                <option value='32' >32</option>
                <option value='33' >33</option>
                <option value='34' >34</option>
                <option value='35' >35</option>
                <option value='36' >36</option>
                <option value='37' >37</option>
                <option value='38' >38</option>
                <option value='39' >39</option>
                <option value='40' >40</option>
                <option value='41' >41</option>
                <option value='42' >42</option>
                <option value='43' >43</option>
                <option value='44' >44</option>
                <option value='45' >45</option>
                <option value='46' >46</option>
                <option value='47' >47</option>
                <option value='48' >48</option>
                <option value='49' >49</option>
                <option selected value='50' >50</option>
                <option value='51' >51</option>
                <option value='52' >52</option>
                <option value='53' >53</option>
                <option value='54' >54</option>
                <option value='55' >55</option>
                <option value='56' >56</option>
                <option value='57' >57</option>
                <option value='58' >58</option>
                <option value='59' >59</option>
                <option value='60' >60</option>
                <option value='61' >61</option>
                <option value='62' >62</option>
                <option value='63' >63</option>
                <option value='64' >64</option>
                <option value='65' >65</option>
                <option value='66' >66</option>
                <option value='67' >67</option>
                <option value='68' >68</option>
                <option value='69' >69</option>
                <option value='70' >70</option>
                <option value='71' >71</option>
            </select>
</section>
        </div>
        <div className='register-bio' >
            <label>bio</label>
            <textarea maxLength={45} onChange={(e)=>{ set_bio(e.target.value) }} placeholder='optional' >

            </textarea>
        </div>
        <div className='register-expectations' >
            <label>first date expectations?</label>
            <input onChange={(e)=>{set_first_date_expectations(e.target.value); set_first_date_expectations_error('')}} maxLength={45} placeholder='expectations' />
            <p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{first_date_expectations_error}</p>
        </div>
        <div className='register-profile'>
            <p>upload profile</p>
            <div>
            <label for='register-pic' >
                <AddPhotoAlternate />
            </label>
            </div>
            <img src='' className='chosen-dp hide' ref={image} />
            <input onChange={add_pp} id='register-pic' type='file' accept='image/*'  />
           
        </div>
        <p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{profile_image_error}</p>
        <button onClick={submit_step3} >done</button>
    </div>
        </div>
    )
}
export {SignUp}