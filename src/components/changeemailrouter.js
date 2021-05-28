import { Route,Redirect} from 'react-router-dom';
import React from "react";

import Footer from '../components/footer'
import Nav from '../components/nav'

import {useSelector,useDispatch} from 'react-redux'
import {fetchUser} from '../actions/getActions'
import {useState,useEffect} from 'react'

function ChangeEmailRouter({component: Component, ...rest }){
    const dispatch=useDispatch()
 
   
    useEffect(()=>{
       dispatch(fetchUser())
    },[dispatch])
    const user = useSelector(state=>state.gets.users)


return (
    <Route
        {...rest}
        
           render={props => {
            
     
              
                  return(
                      
                    <><Nav/><Component {...props}/><Footer/></>
                   )
                 
             
       
             
           }}
         />
  );
        }
export default ChangeEmailRouter