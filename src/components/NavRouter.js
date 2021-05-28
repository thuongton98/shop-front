//tao router

import React from "react";



import { Route} from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'

const NavRouter = ({component: Component, ...rest }) => {
  


    return (
        
      <Route
     {...rest}
     
        render={props => {
          
    
                        
                            
             
                 
                
                  return <><Nav {...props}/><Component {...props}/> <Footer {...props}/> </>
                
          
    
         
        }}
      />
      
    );
  };

export default NavRouter