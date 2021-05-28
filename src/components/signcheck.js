import React from 'react'
import {useState,useEffect} from 'react'
import {fetchUser} from '../actions/getActions'

import {useSelector, useDispatch} from 'react-redux'
import { Route,Redirect } from 'react-router-dom'

import Footer from '../components/footer'

function CheckSign({component: Component, ...rest }){
    const dispatch=useDispatch()
  
    
    useEffect(()=>{
       dispatch(fetchUser())
    },[dispatch])
    const user = useSelector(state=>state.gets.users)


     return (
        <Route
            {...rest}
            
               render={props => {
                
                
                if (localStorage.user!==undefined) {
                    const finduser = user.filter(function(value){
                        return value.token===localStorage.user
                        
                      })
                   
                      if(finduser.length>0){
                        
                            
                          
                       return(
                           
                           <Redirect to={'/user/'+finduser[0].username}/>
                       )
                        
                       }
                      
                    }else{
                        return(
                            <><Component {...props}/><Footer/></>
                            
                         )
                       }
                
                   
              
                   
                     
        
               
                 
           
                 
               }}
             />
      );
}

export default CheckSign