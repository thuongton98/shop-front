import { Route,Redirect} from 'react-router-dom';
import React from "react";

import Footer from '../components/footer'

import {useSelector,useDispatch} from 'react-redux'
import {fetchUser} from '../actions/getActions'
import {useState,useEffect} from 'react'

function CheckRouter({component: Component, ...rest }){
  
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(fetchUser())

  },[dispatch])
  const user = useSelector(state=>state.gets.users)
    
   
    const finduser = user.filter(function(value){
      return value.token === localStorage.user
  })
  const findnouser = user.filter(function(value){
    return value.token!==localStorage.user
  })
  
  
if(finduser.length>0){
 
  if(finduser[0].nguoidung==='admin'){
    return(
      <Redirect to={'/admin'}/>
    )
  }


   if(findnouser.length===user.length){
    return(
      <Redirect to='/p404'/>
    )
  }
}
if(localStorage.user===undefined&&localStorage.userid===undefined){
  return(
    <Redirect to='/sign'/>
  )
}
  return(
    <Route
    {...rest}
    
       render={props => {
         
       
     
       
         
   
         return <><Component {...props}/><Footer/></>
       }}
     />
   )
        }
export default CheckRouter