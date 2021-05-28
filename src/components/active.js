import React from 'react'
import {useParams,Redirect} from 'react-router-dom'
import {useEffect,useState} from 'react'
import{fetchUser,actives} from '../actions/getActions'
import {useSelector, useDispatch} from 'react-redux'



function Active(){
  const dispatch=useDispatch()
  var ok;
 
    useEffect(()=>{
       dispatch(fetchUser())
      
  
    },[dispatch])
const [redirect,setredirect]=useState('')
    const user = useSelector(state=>state.gets.users)
    let {id} = useParams();
    
    const findnouser = user.filter(function(value){
      return value.token!==id
    })
    
    const finduser = user.filter(function(value){
        return value.token===id
      })
     function activez(e){
  
      var crypto = require("crypto");
      var newtoken = crypto.randomBytes(200).toString('hex');

       const act = {
           id:id,
           active:'yes',
           token:newtoken,
       }
           dispatch(actives(act))
           setredirect('ok')
     }
      if (typeof finduser != "undefined" && finduser != null && finduser.length != null && finduser.length > 0) {
        
         if(finduser[0].active==='yes'){
             return(
               <Redirect to='/p404'/>
             )
         }else{
           ok=1;
         }
      }else if(typeof findnouser != "undefined" && findnouser != null && findnouser.length != null && findnouser.length > 0 &&finduser.length<1){
        return(
          <Redirect to='/p404'/>
        )
      }
      if(redirect==='ok'){
        return(
          <Redirect to='/'/>
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
        <h1>Active Account:</h1>
        <p>Please Click To Active</p>
        <button className="button" onClick={(e)=>{activez(e)}}>Active</button>
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

export default Active