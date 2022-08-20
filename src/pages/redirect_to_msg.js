import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

let Redirect_to_msg=()=>{
    let nav = useNavigate()
    let location=useLocation()
useEffect(()=>{
nav(`/messages/${location.search}`)
},[])

}
export {Redirect_to_msg}