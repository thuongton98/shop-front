import { Route,Redirect} from 'react-router-dom';
import React from "react";
import Nav from '../components/nav'
import Footer from '../components/footer'


const CheckRouter = ({component: Component, ...rest })=>{
 
  setTimeout(function(){localStorage.removeItem('newuser');}, 15000);
  
  if(localStorage.newuser!==undefined)
       {return(
        <Route
        {...rest}
        
           render={props => {
             
           
         
           
             
       
             return <><Nav/><Component {...props}/><Footer/></>
           }}
         />
       )}else{
        
         return(
           <Redirect to={'/p404'}/>
         )
       }




}


export default CheckRouter