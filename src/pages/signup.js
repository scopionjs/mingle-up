import { AddPhotoAlternate } from '@mui/icons-material'
import React, { useRef, useState } from 'react'

let SignUp =()=>{
    //TARGET WRAPPERS
    let step1=useRef()
    let step2=useRef()
    let step3=useRef()
    // SETTING STATES FOR STEP 1
    let[userName,setUserName]=useState(null)
    let[email,setEmail]=useState(null)
    let[newPassword,setNewPassword]=useState(null)
    let[re_entered_password,set_re_entered_password]=useState(null)
    let[gender,set_gender]=useState(null)
           //SUBMIT STEP1
    let submit_step1 =()=>{
        step1.current.classList.add('hide')
        step2.current.classList.remove('hide')
    }
         // SETTING STATES FOR STEP 2
    let [ looking_for,set_looking_for ]=useState(null)
    let [interested_in,set_interested_in]=useState(null)
    let [hobbies,set_hobbies]=useState([])
    let [age,set_age]=useState(null)
    let [age_error,set_age_error]=useState()
               //adding entered hobbies
               let entered_hobbies=[]
    let addHobby =(e)=>{
        if(e.target.value.length >3){
            if(e.code == "Space" || e.key=="Enter" || e.code=="NumpadEnter" || e.code=="Comma" || e.key ==','){
                entered_hobbies.push(e.target.value)
                set_hobbies(entered_hobbies.concat(...hobbies))
            e.target.value=''
                console.log(hobbies,entered_hobbies)
            }
        }
    }
                             //SUBMIT STEP2
      let submit_step2 =()=>{
        step2.current.classList.add('hide')
        step3.current.classList.remove('hide')
    }
                        // SETTING STATES FOR STEP 3
    let [status,set_status]=useState(null)
    let [min_age,set_min_age]=useState(null)
    let [max_age,set_max_age]=useState(null)
    let [bio,set_bio ]=useState(null)
    let [first_date_expectations , set_first_date_expectations]=useState(null)
    let [profile_image ,set_profile_image]=useState(null)
    let image=useRef()
    let add_pp=(e)=>{
        let blob =new Blob([e.target.files[0]])
        let _url=URL.createObjectURL(blob)
        set_profile_image(e.target.files[0])
        image.current.classList.remove('hide')
        image.current.src=_url
    }
    return( 
        <div className='register-wrapper' >
            {/*step 1*/}
<div className='step1' ref={step1} >
    <h3>register</h3>
    <div className='register-name' >
        <label>name</label>
        <input placeholder='name' onChange={(e)=>{setUserName(e.target.value); }}  maxLength={20}  />
    </div>

    <div className='register-email' >
        <label>email</label>
        <input onChange={(e)=>{setEmail(e.target.value) }} placeholder='email' type='email' />
    </div>

    <div className='register-password' >
        <label>new password</label>
        <input onChange={(e)=>{ setNewPassword(e.target.value) }} placeholder='password' type='password' />
    </div>

    <div className='register-password-repeat' >
        <label>re-enter password</label>
        <input onChange={(e)=>{ set_re_entered_password(e.target.value) }} placeholder='re-enter password' type='password'  />
    </div>

    <div className='register-gender' >
        <label>gender</label>
        <select onChange={(e)=>{set_gender(e.target.value) }} >
            <option>male</option>
            <option>female</option>
            <option>both</option>
        </select>
    </div>

    <button onClick={submit_step1}  >next</button>
</div>
                {/*step 2*/}
<div ref={step2} className='step2  hide' >
    <h3>step 2</h3>
<div className='register-looking-for' >
    <label>what are you looking for</label>
    <select onChange={(e)=>{ set_looking_for(e.target.value) }} >
        <option value='serious relationship' >a serious relationship</option>
        <option value='just friends'>just friends</option>
        <option value='friends with benefits'>friends with benefits</option>
        <option value='marriage'>marriage</option>
        <option value='hook-ups'>hook ups</option>
        <option value='fling'>a fling</option>
        <option value='new people'>meet new people</option>
    </select>
</div>

<div className='register-interested-in' >
    <label>
        who are you interested in
    </label>
    <select onChange={(e)=>{set_interested_in(e.target.value )}} >
        <option value='men' >men</option>
        <option value='women' >women</option>
        <option value='both' >both</option>
    </select>
</div>
<div className='register-hobbies' >
    <label>hobbies</label>
    <input onKeyUp={addHobby} />
</div>
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
    set_age_error('')
    }else{
        set_age_error('must be four numbers')
    }
}} maxLength={4} />

    </section>
    <p style={{color:'red',fontSize:"10px",fontFamily:'sans-serif',marginTop:'4px',fontWeight:'700'}} >{age_error}</p>
</div>
<button onClick={submit_step2}  >next</button>
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
            <textarea maxLength={30} onChange={(e)=>{ set_bio(e.target.value) }} placeholder='optional' >

            </textarea>
        </div>
        <div className='register-expectations' >
            <label>first date expectations?</label>
            <input onChange={(e)=>{set_first_date_expectations(e.target.value)}} maxLength={25} placeholder='expectations' />
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
        <button>done</button>
    </div>
        </div>
    )
}
export {SignUp}