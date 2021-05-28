import {Route,Redirect} from 'react-router-dom';
import React from 'react';
import {fetchuser,fetchshop,fetchsanpham,addshop} from '../actions/getActions'
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Footer from './footer'

const Checkshoprouter = ({component:Component, ...rest})=>{
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(fetchuser())
      dispatch(fetchshop())
      dispatch(fetchsanpham())
  },[dispatch])
  const user = useSelector(state=>state.gets.users)
    const shop = useSelector(state=>state.gets.shops)
    const sanpham = useSelector(state=>state.gets.sanphams)
    const finduser = user.filter(function(value){
      return value.token === localStorage.user
  })
  const findnouser = user.filter(function(value){
    return value.token!==localStorage.user
  })
  
  
if(finduser.length>0){
 
  


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

export default Checkshoprouter