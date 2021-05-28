
import React from 'react'
import {useParams,Redirect} from 'react-router-dom'
import {useEffect,useState} from 'react'
import{fetchUser,checkchangepass} from '../actions/getActions'
import {useSelector, useDispatch} from 'react-redux'


function Changepass() {
  const dispatch=useDispatch()
  var ok;

    useEffect(()=>{
       dispatch(fetchUser())
      
  
    },[dispatch])

    const user = useSelector(state=>state.gets.users)
    let {id} = useParams();
    const [redirect,setredirect]=useState('')
    
    
    const finduser = user.filter(function(value){
        return value.token===id
      })
      const findnuser = user.filter(function(value){
        return value.token!==id
      })

      if (typeof finduser != "undefined" && finduser != null && finduser.length != null && finduser.length > 0) {
      ok=1
      
     }else if(typeof findnuser != "undefined" && findnuser != null && findnuser.length != null && findnuser.length > 0){
       return(
         <Redirect to='/p404'/>
       )
     }
   
     function confirm(e){
      var crypto = require("crypto");
       
       e.preventDefault();
       const pass={
         id:id,
         newpass:finduser[0].newpass,
         token:crypto.randomBytes(200).toString('hex')
       }
       dispatch(checkchangepass(pass))
       setredirect('ok')
     }
     if(redirect==='ok'){
      localStorage.removeItem("useri");
      localStorage.removeItem("user");
      return(
        <Redirect to='/sign'/>
      )
     }
    
     if(ok===1){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

      return(
        <div>
  <div className="alluser">
    <div className="p404">
    
      <p>Please confirm to change password</p>
      <button className="button" onClick={(e)=>{confirm(e)}}>confirm</button>
    </div>
  </div>
</div>
      )
    }
 return(
  <div className='cho'>
  <div className='waiting'>
  <h1>Wait <span></span></h1> 
  <div className="wait">
      <div></div>
  </div>
</div>
  </div>
 )
}


export default Changepass