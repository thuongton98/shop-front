

import React from 'react'
import {useParams,Redirect} from 'react-router-dom'
import {useEffect,useState} from 'react'
import{resetpass, fetchUser} from '../actions/getActions'
import {useSelector, useDispatch} from 'react-redux'


function Passforget(){
    const dispatch=useDispatch()
    var ok;
   
      useEffect(()=>{
         dispatch(fetchUser())
        
    
      },[dispatch])
  
      const user = useSelector(state=>state.gets.users)
      let {id} = useParams();
      const [redirect,setredirect]=useState('')
      const [check,setcheck]=useState(false)
      const [type,settype]=useState('password')
      const [passz,setpassz]=useState('')
var ok;
var t1=[]
var t2=[]
for(var i=0;i<id.length;i++){
    var t;
   
    var j;
    var k=0;
    if(id[i]==='-'){
        j=i+1;

    }
    t1.push(id[j])
    if(j!==(i+1)){
       
        var x;
    x=id[i]
    if(id[i]==='_'){
        x='.'
    }
   t2.push(x) 
    }


j++

}

    const email=t2.join('')
const tokenz=t1.join('')
const findtoken = user.filter(function(value){
    return value.token===tokenz
   
  })
  const findnotoken=user.filter(function(value){
    return value.token!==tokenz
  })
  const findemail = user.filter(function(value){
      return value.email===email
  })
 const findnoemail=user.filter(function(value){
   return value.email!==email
 })
if((findtoken.length>0)&&(findemail.length>0)){
  ok=1;
}else if(findnotoken.length>0||findnoemail.length>0){
  return(
    <Redirect to='/p404'/>
  )
}
function showpass(e){
 

  if(check===false){
    setcheck(true)
    settype('text')
  }else{
    setcheck(false)
    settype('password')
  }
}
function change(e){
 
  var crypto = require("crypto");
  const pass={
    id:tokenz,
    pass:passz,
    token:crypto.randomBytes(200).toString('hex')
  }
  dispatch(resetpass(pass))
  setredirect('ok')
}
if(redirect==='ok'){
  localStorage.removeItem("useri");
  localStorage.removeItem("user");
  return(
    <Redirect to='/sign'/>
  )
 }
     if(ok===1){
      return(
        <div>
        <div className="alluser">
          <div className="check">
          
           <div className='check-item'>
           <p>hello, {findemail[0].username} Please Type Your New Password:</p>
            <input onChange={(e)=>{setpassz(e.target.value)}} type={type}/>
        
           </div>
            <button onClick={(e)=>{change(e)}} className='button'>Change Password</button>
            <div className='showpass'>
         < input checked={check} onChange={(e)=>{showpass(e)}} type="checkbox" id="showpass"/>
        <label  className='text' htmlFor="showpass"> Show password</label>
         </div>
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

export default Passforget