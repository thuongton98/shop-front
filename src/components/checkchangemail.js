import React from 'react'
import {useParams,Redirect} from 'react-router-dom'
import {useEffect,useState} from 'react'
import{fetchUser,checkchangeemail} from '../actions/getActions'
import {useSelector, useDispatch} from 'react-redux'

function Checkchangeemail(){
  const [chuyen,setchuyen]=useState('')
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchUser())
       
   
     },[dispatch])
     const user = useSelector(state=>state.gets.users)
     let {id} = useParams();

var k1=[];
var k2=[];
var j=id.length
var l=0;
for(var i=0;i<id.length;i++){
   
    if(id[i]==='-'){
        j=i;
        l=i
    }
    l++;
    if(j>i){
        var ji=id[i]
        if(ji==='_'){
            ji='.'
        }
        k1.push(ji)
        
    }
    if(l>j){
        k2.push(id[l])
    }
}
var email=k1.join('')
var tokenz=k2.join('')
var crypto = require("crypto");
var tokeni = crypto.randomBytes(200).toString('hex');
var redirect=1
if(user.length>0){
    const finduser=user.filter(function(e){
        return tokenz===e.token
    })
    if(finduser.length>0){
        redirect=2
    }else{
        redirect=3
    }
}


function confirm(e){
e.preventDefault();
  
  
    const emailz={
        id:tokenz,
        email:email,
        token:tokeni
    }
   
   dispatch(checkchangeemail(emailz))
    
  if(localStorage.user!==undefined){
      localStorage.setItem('user',tokeni)
  setchuyen('ok')
     
  }else{
      localStorage.removeItem('user')
      localStorage.removeItem('useri')
      setchuyen('ok')
  }
   

    
}
if(chuyen==='ok'){
    return(
        <Redirect to={'/sign'}/>
    )
}

if(redirect===2){
    return(
        <div>
        <div className="alluser">
          <div className="p404">
            <h1>Confirm Change Email:</h1>
            <p>Please Click To Change Email</p>
            <button className="button" onClick={(e)=>{confirm(e)}}>Confirm</button>
          </div>
        </div>
      </div>
    )
}else if(redirect===3){
    return(
        <Redirect to='/p404'/>
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

export default Checkchangeemail