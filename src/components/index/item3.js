import React, { useEffect, useState } from 'react'
import './index.css'
import { VerifiedUser } from '@mui/icons-material'
import { AllInclusive } from '@mui/icons-material'
import { People } from '@mui/icons-material'
let Item3 =()=>{
    let[number1,set_number1]=useState(10)
    let[number2,set_number2]=useState(10)
    let[number3,set_number3]=useState(10)
    let random_numbers1 =[29,30,17,16,40,10,15]
    let random_numbers2 =[22,35,13,12,42,11,14]
    let random_numbers3 =[24,38,18,19,37,19,50]
    let rand1 =random_numbers1[Math.floor(Math.random()*random_numbers1.length)]
    let rand2 =random_numbers2[Math.floor(Math.random()*random_numbers2.length)]
    let rand3 =random_numbers3[Math.floor(Math.random()*random_numbers3.length)]
      //observer1
    let observer1=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting==true){
                setInterval(() => {
                    if(number1 !==rand1){
                        set_number1(number1++)
                    }
                },100); 
            }
        })
    },{threshold:0.5})
        //observer2
        let observer2=new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting==true){
                    setInterval(() => {
                        if(number2 !==rand2){
                            set_number2(number2++)
                        }
                    },100); 
                }
            })
        },{threshold:0.5})
        //observer3
        let observer3=new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting==true){
                    setInterval(() => {
                        if(number3 !==rand3){
                            set_number3(number3++)
                        }
                    },100); 
                }
            })
        },{threshold:0.5})
    useEffect(()=>{
        observer2.observe(document.querySelector('.index-item3 .box2 section p'))
        observer3.observe(document.querySelector('.index-item3 .box3 section p'))
        observer1.observe(document.querySelector('.index-item3 .box1 section p'))
    },[])
    return(
        <div className='index-item3' >
            <div className='box1' >
                <section>
                    <p>12,5{number1}</p>
                </section>
                <hr />
                <section>
                    <p><VerifiedUser />verified users</p>
                </section>
            </div>
            <div className='box2' >
            <section>
                <p>10,1{number2}</p>
            </section>
            <hr />
            <section>
                <p><People />active users</p>
            </section>
            </div>
            <div className='box3' >
            <section>
                <p>8,3{number3}</p>
            </section>
            <hr />
            <section>
                <p><AllInclusive />matched users</p>
            </section>
            </div>
        </div>
    )
}
export {Item3};