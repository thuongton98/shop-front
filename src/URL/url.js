import {Route,Switch} from 'react-router-dom'
import React from 'react'
import home from '../components/home'
import p404 from '../components/404'
import NavRouter from '../components/NavRouter'
import sign from '../components/sign'
import updateuser from '../components/updateuser'
import admin from '../components/admin'
import AdminRoute from '../components/adminRouter'
import changepass from '../components/changepass'
import checkemail from '../components/checkemail'
import failer from '../components/failer'
import succes from '../components/succes'
import CheckRouter from '../components/checkRouter'

import user from '../components/user'
import active from '../components/active'
import CheckUser from '../components/checkuserRouter'
import CheckSign from '../components/signcheck'
import Soon from '../components/soon'
import Checkchangeemail from '../components/checkchangemail'
import Changeemailrouter from '../components/changeemailrouter'
import forget from '../components/forget'
import changeforgetpass from '../components/changepassforget'


import createshop from '../components/taoshop'
import shop from '../components/newshop'
import CheckShop from '../components/checkshop'
import cart from '../components/cart'

import myshop from '../components/shop'
import ChecknewShop from '../components/checknewshop'
import shopitem from '../components/shopitem'
import sanphami from '../components/sanphami'
import buyi from '../components/buyi'
import sanpham from '../components/sanpham'



function URL(){
 
return(
   
   <Switch>
 
    
  
           

  <Changeemailrouter path='/changeemail/:id' component={Checkchangeemail}/>
<NavRouter path='/forget' component={forget}/>
      <NavRouter path='/' exact component={home}/>
       <NavRouter path='/soon' component={Soon}/>
<CheckSign path='/sign' component={sign}/>
  <AdminRoute path ='/admin' component={admin}/>
  <AdminRoute path ='/updateuser/:id' component={updateuser}/> 
<NavRouter path='/changepass/:id' component={changepass}/>
      <CheckRouter path='/checkemail' component={checkemail}/>
 <CheckRouter path='/failer' component={failer}/>
   <CheckRouter path='/succes' component={succes}/>
<NavRouter path='/changeforgetpass/:id' component={changeforgetpass}/>  
<CheckUser path='/user/:id' component={user}/>
<CheckUser path='/cart/:id' component={cart}/>
<NavRouter path='/active/:id' component={active}/>
<CheckUser path='/buyi/:id' component={buyi}/>
<Route path='/sanphami/:id' component={sanphami}/>
<Route path='/sanpham/:id' component={sanpham}/>

        <NavRouter path='/createshop' component={createshop}/>
        <ChecknewShop path='/newshop/:id' component={shop}/>
        <CheckShop path='/shopi/:id' component={myshop}/>
        <CheckShop path='/shopitem/:id' component={shopitem}/>

   <NavRouter component={p404}/>

   </Switch>
  
)

}


export default URL