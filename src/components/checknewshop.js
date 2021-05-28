import {Route,Redirect} from 'react-router-dom';
import React from 'react';
import {fetchuser,fetchshop,fetchsanpham,addshop} from '../actions/getActions'
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'


const Checknewshoprouter = ({component:Component, ...rest})=>{
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
  const findshop = shop.filter(function(value){
    return value.userid===finduser[0]._id
  })
  

  if(findshop.length>0){

     return(
       <Redirect to={'/shopi/'+finduser[0]._id}/>
     )
  }
  

}
  
if(localStorage.user===undefined&&localStorage.userid===undefined){
  return(
    <Redirect to='/p404'/>
  )
}
  return(
    <Route
    {...rest}
    
       render={props => {
         
       
     
       
         
   
         return <><Component {...props}/></>
       }}
     />
   )
     



}

export default Checknewshoprouter