import React from 'react'
import {useEffect,useState} from 'react'
import{fetchshop,fetchUser,newUser} from '../actions/getActions'
import {useSelector, useDispatch} from 'react-redux'
import { Redirect,NavLink } from 'react-router-dom'


import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

import { useGoogleLogout } from 'react-google-login'



function Sign(){
  
 
  const [signz,setsignz]=useState('Dang Ky')
  const [sin,setsin]=useState('')
  const [sup,setsup]=useState('')
  const [iusername,setiusername]=useState('')
  const [fname,setfname]=useState('')
  const [lname,setlname]=useState('')
  const [ipass,setipass]=useState('')
  const [mess,setmess]=useState('')
  const [mess1,setmess1]=useState('')
  const [mess2,setmess2]=useState('')
  const [messf,setmessf]=useState('')
  const [messl,setmessl]=useState('')
  const [mess3,setmess3]=useState('')
  const [mess4,setmess4]=useState('')
  const [messpass,setmesspass]=useState('')
  const [messpass1,setmesspass1]=useState('')
  const [messpass2,setmesspass2]=useState('')
  const [messpass3,setmesspass3]=useState('')
  const [messpass4,setmesspass4]=useState('')
  const [messalert,setmessalert]=useState('')
  const [uusername,setuusername]=useState('')
  const [uemail,setuemail]=useState('')
  const [udiachi,setudiachi]=useState('')
  const [utype,setutype]=useState('Nguoiban')
  const [upass,setupass]=useState('')
  
  const [redirect,setredirect]=useState('')
  const [uredirect,seturedirect]=useState('')
  const [eredirect,seteredirect]=useState('')
const [ubird,setubird]=useState('')
  const dispatch=useDispatch();
  const [messbird,setmessbird]=useState('')
  

useEffect(()=>{
  
  dispatch(fetchUser())
  dispatch(fetchshop())

  var pass=document.getElementById('password')
  var pass1=document.getElementById('password1')
  var sin=document.querySelector('.signin')
  var sup=document.querySelector('.signup')
var show=document.querySelector('.show-i')
var showi=document.querySelector('.show-ii')
  setsin(sin)
  setsup(sup)
show.addEventListener('click',showpass)
    function showpass(){
      
      if(pass.type==='password'){
         pass.type='text'
      }else{
         pass.type='password'
      }
      
    }
    showi.addEventListener('click',showpass1)
    function showpass1(){
       
      if(pass1.type==='password'){
         pass1.type='text'
      }else{
         pass1.type='password'
      }
      
    }

    sup.style.display='none'
    

},[dispatch])


const user = useSelector(state => state.gets.users);
const shop = useSelector(state=>state.gets.shops);

const [chuyenuser,setchuyenuser]=useState('')

const responseFacebook = (response) => {
  const z = response.name;
  const z1=z.split(' ');
  const bird='_/_/_';
  var crypto = require("crypto");
  const pass = crypto.randomBytes(12).toString('hex');
  
  const login ={
    token:response.accessToken,
    email:response.email,
    fname:z1[0],
    lname:z1[1],
    username:response.name,
    img:response.picture.data.url,
    bird:bird,
    diachi:'no',
    pass,
    nguoidung:'user',
    type:'nguoimua',
    newpass:'no',
    social:'yes'

  }
 const tim = user.filter(function(value){
   return value.email === response.email
 })
if(tim.length<1){
dispatch(newUser(login))
localStorage.setItem('user', response.accessToken);
  localStorage.setItem('useri',response.name)
 
  setchuyenuser('user')
}else if(tim[0].social==='yes'){
  localStorage.setItem('user', tim[0].token);
  localStorage.setItem('useri',tim[0].username)
 
 
   setchuyenuser('user')
 
}else{
  dispatch(newUser(login))
localStorage.setItem('user', response.accessToken);
  localStorage.setItem('useri',response.name)
  
  setchuyenuser('user')
}
}
if(chuyenuser==='user'){
  return(
    <Redirect to={'/'}/>
  )
}


const responseGoogle = (response) => {
 
  const bird='_/_/_';
  var crypto = require("crypto");
  const pass = crypto.randomBytes(12).toString('hex');
  fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+response.tokenId)
  .then(res=>res.json())
  .then(users=>{
    
    const login = {
      token:response.tokenId,
      email:users.email,
      img:users.picture,
      lname:users.family_name,
      fname:users.given_name,
      username:users.name,
      bird:bird,
      diachi:'no',
      pass,
      nguoidung:'user',
      type:'nguoimua',
      newpass:'no',
      social:'yes'
    }
    return checkgoogle(login)
  })



}
//
function checkgoogle(e){
  if(user.length>0){
    const tim=user.filter(function(value){
      return value.email === e.email
    })
    if(tim.length<1){
     dispatch(newUser(e))
     localStorage.setItem('user', e.token);
         localStorage.setItem('useri',e.username)
         setchuyenuser('user')
       }else if(tim[0].social==='yes'){
         localStorage.setItem('user', tim[0].token);
         localStorage.setItem('useri',tim[0].username)
       
        
          setchuyenuser('user')
         
       }else{
        dispatch(newUser(e))
        localStorage.setItem('user', e.token);
            localStorage.setItem('useri',e.username)
            setchuyenuser('user')
       }
  }
}
  
 
function sign(){


 if(signz==='Dang Ky'){
  sup.style.display='flex'
  sin.style.display='none'
  setsignz('Dang Nhap')
 }else{
sup.style.display='none'
   sin.style.display='flex'
   setsignz('Dang Ky')
 }

}

function isubmit(e){

e.preventDefault();
if (typeof user != "undefined" && user != null && user.length != null && user.length > 0) {
  var findusername = user.filter(function(value){
    return value.username===iusername
  })
  var findemail = user.filter(function(value){
    return value.email===iusername
  })
  
  if(iusername===''){
    setmess3('username or email wrong')
   setTimeout(() => {
    setmess3('')
   }, 3000);
   window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  } else if(iusername!==''&&findusername.length<=0&&findemail.length<=0){
    setmess3('username or email not right')
    setTimeout(() => {
      setmess3('')
     }, 3000);
     window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
   
  }else{
    var findpass= user.filter(function(value){
      return value.pass===ipass
    })
   
    if(findpass.length<=0){
      setmess4('password wrong, please type again!!!')
      setTimeout(() => {
        setmess4('')
      }, 3000);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      setredirect('')
    }else{
      setredirect('ok')
    }
  }
}


}
function checkpass(num){
  if(num===''){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  setmessalert('nhap mat khau')
  setTimeout(() => {
    setmessalert('')
   }, 3000);
  }else{
    if(/^[a-zA-Z0-9- ]*$/.test(num)===true){
      setmesspass('nhap ky tu dac biet')
      setTimeout(() => {
        setmesspass('')
       }, 3000);
    }else{
      setmesspass('')
    }
    if(num.length<=9){
      setmesspass1('ky tu > 9')
      setTimeout(() => {
        setmesspass1('')
       }, 3000);
    }else{
      setmesspass1('')
    }
    const k=num.replace(/[^0-9-]+/ig, "");
  
  if(k===""){
    setmesspass2('k co so')
    setTimeout(() => {
      setmesspass2('')
     }, 3000);
  }else{
    setmesspass2('')
  }
  const z=num.replace(/[^a-zA-Z-]+/ig, "");
  if(z===''){
    setmesspass3('k co chu')
    setTimeout(() => {
      setmesspass3('')
     }, 3000);
  }else{
    setmesspass3('')
  }
  
  var t = z.toUpperCase()

  var d='';
  for(var i=0;i<z.length;i++){
    if(z[i]===t[i]){
      d='co'
    }
  }
  if(d!=='co'){
    
    setmesspass4('nhap ky tu in hoa')
    setTimeout(() => {
      setmesspass4('')
     }, 3000);
  }else{
    setmesspass4('')
  }
  
  if((/^[a-zA-Z0-9- ]*$/.test(num)===true)||num.length<=9||k===""||z===''||d!=='co'){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  }
 
  
  
}

function usubmit(e){
  if(user.length===0){
    const nguoidung = 'admin'
    const uuser={
      username:uusername,
      fname:fname,
      lname:lname,
      bird:ubird,
      diachi:udiachi,
      email:uemail,
      pass:upass,
     type:utype,
     nguoidung:nguoidung,
    }
    
    dispatch(newUser(uuser))
    localStorage.newuser='da tao user'
    
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  return(
    <Redirect to={'/checkemail'}/>
  )
  }
  e.preventDefault();
 
  if (typeof user != "undefined" && user != null && user.length != null && user.length > 0) {
    var finduusername = user.filter(function(value){
      return value.username===uusername
    })
    var finduemail = user.filter(function(value){
      return value.email===uemail
    })
   
   
    if(uusername===''){
      seturedirect('')
      setmess('nhap username')
     setTimeout(() => {
      setmess('')
     }, 3000);
     window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    }else if(uusername!==''&&finduusername<=0){
      setmess('')
      seturedirect('ok')
    }else{
      seturedirect('')
      setmess('nhap lai username!!!')
      setTimeout(() => {
        setmess1('')
       }, 3000);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    if(uemail===''){
      seteredirect('')
      setmess1('nhap email')
      setTimeout(() => {
        setmess1('')
       }, 3000);
       window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }else if(uemail!==''&&finduemail<=0){
      seteredirect('ok')
      setmess1('')
    }else{
      seteredirect('')
      setmess1('nhap lai email!!!')
      setTimeout(() => {
        setmess1('')
       }, 3000);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
  if(ubird===''){
    seturedirect('')
      seteredirect('')
    setmessbird('nhap birthday')
   setTimeout(() => {
    setmessf('')
   }, 3000);
  }else{
    setmessf('')
  }

  if(fname===''){
    seturedirect('')
      seteredirect('')
    setmessf('nhap firt name')
   setTimeout(() => {
    setmessf('')
   }, 3000);
  }else{
    setmessf('')
  }
  if(lname===''){
    seturedirect('')
      seteredirect('')
    setmessl('nhap last name')
   setTimeout(() => {
    setmessl('')
   }, 3000);
  }else{
    setmessl('')
  }
  if(udiachi===''){
    seturedirect('')
      seteredirect('')
    setmess2('nhap dia chi')
   setTimeout(() => {
    setmess2('')
   }, 3000);
  }else{
    setmess2('')
  }
  if(uusername===''||udiachi===''||uemail===''||fname===''||lname===''||ubird===''){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  checkpass(upass)

}

if(uredirect==='ok'&&eredirect==='ok'&&udiachi!==''&&upass!==''&&ubird!==''&&fname!==''&&lname!==''){  
 const nguoidung = 'user'
  const uuser={
    username:uusername,
    fname:fname,
    lname:lname,
    bird:ubird,
    diachi:udiachi,
    email:uemail,
    pass:upass,
   type:utype,
   nguoidung:nguoidung,
  }
  
  dispatch(newUser(uuser))
  localStorage.newuser='da tao user'
 
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  return(
    <Redirect to={'/checkemail'}/>
  )
}



if(redirect==='ok'){
  const token = user.filter(function(value){
    return value.email===iusername||value.username===iusername
    })
    
    localStorage.setItem('user', token[0].token);
    localStorage.setItem('useri',token[0].username)
    
    var findusername = user.filter(function(value){
      return value.token===token[0].token
    })

    if(findusername[0].nguoidung==='admin'){
      return(
        <Redirect to='/admin'/>
      )
    }else if(findusername[0].type==='Nguoiban'){
      const findshop = shop.filter(function(value){
        return value.userid===findusername[0]._id
    })
    if(findshop.length>0){
      return(
        <Redirect to={'/shopi/'+findusername[0]._id}/>
      )
    }else{
      return(
        <Redirect to={'createshop'}/>
      )
    }
    
    }else{
      return <Redirect to={'/user/'+token[0].username}/>
    }
}

    return(
        <div>
            <nav className="nav-bar nav-user">
        <div className="nav-small">
          <a className="nav-item" href="/#">Shop</a>
          <div className="nav-item">
           
            <div className='nav-user-ii'><a href="/soon">Kenh nguoi ban</a>
          <span className="an">|</span>
    <p onClick={sign} className='signiii'>{signz}</p>
  
    </div>
          </div>
        </div></nav>
        <main className='main-sign'>
        <div className="sign">
          <div className="img" />
          <div className="sign-i">
            <form onSubmit={isubmit} className="signin signi">
              <h3>Sign In</h3>
              <div className='mess'>{mess4}</div>
              <div className='mess'>{mess3}</div>
               <div className='mess'>{messalert}</div>
               <div className='mess'>{messpass}</div>
               <div className='mess'>{messpass1}</div>
               <div className='mess'>{messpass2}</div>
               <div className='mess'>{messpass3}</div>
               <div className='mess'>{messpass4}</div>
              
              <label htmlFor="user">
                <h4>User or Email:</h4>
                <input onChange={(e)=>{setiusername(e.target.value)}} type="text" id="user" placeholder="your user or email" />
              </label>
              <label htmlFor="password">
                <h4>Your Password:</h4>
                <input onChange={(e)=>{setipass(e.target.value)}} type="password" id="password"  placeholder="your password" />
              </label>
              <label htmlFor="show" className="show">
                <input className="show-i" type="checkbox"id="show" /> 
                <p> show password</p>
              </label>
              <input className="submit1" type="submit" />
              <label>
                <p className="khong" onClick={sign}>Không Có Tài Khoản??. Đăng Ký</p>
                <NavLink to='/forget' className="khong">Quên Mật Khẩu!!!</NavLink>
              </label>
              <div className='loginsocial'>
              <p>Sign in With: </p>
    
   
            
    <div className='social'>
    <FacebookLogin
              appId="863991997794740"
              autoLoad={false}
              fields="name,email,picture"
              
              textButton=''
              cssClass='facebookicon'
              callback={responseFacebook} />
    <GoogleLogin
    clientId="268854466988-6esl0k15g5k0o6gesdv09r6vsvjiker2.apps.googleusercontent.com"
    onSuccess={responseGoogle}
    isSignedIn={false}
    icon={false}
    buttonText=''
    className	='googleicon'
   
  /></div>
              </div>
            </form>
            <form onSubmit={usubmit} className="signup signi">
              <h3>Sign Up</h3>
              <div className='mess'>{messbird}</div>
              <div className='mess'>{mess}</div>
              <div className='mess'>{mess1}</div>
              <div className='mess'>{mess2}</div>
              <div className='mess'>{messf}</div>
              <div className='mess'>{messl}</div>
               <div className='mess'>{messalert}</div>
               <div className='mess'>{messpass}</div>
               <div className='mess'>{messpass1}</div>
               <div className='mess'>{messpass2}</div>
               <div className='mess'>{messpass3}</div>
               <div className='mess'>{messpass4}</div>
              <label htmlFor="username">
                <h4>User Name :</h4>
                <input onChange={(e)=>{setuusername(e.target.value)}} type="text" id="username" placeholder="your user name" />
              </label>
              <label htmlFor="fname">
                <h4>Firt Name :</h4>
                <input onChange={(e)=>{setfname(e.target.value)}} type="text" id="fname" placeholder="your firt name" />
              </label>
              <label htmlFor="lname">
                <h4>Last Name :</h4>
                <input onChange={(e)=>{setlname(e.target.value)}} type="text" id="lname" placeholder="your last name" />
              </label>
              <label htmlFor="email">
                <h4>Email :</h4>
                <input onChange={(e)=>{setuemail(e.target.value)}} type="text" id="email" placeholder="your email" />
              </label>
              <label htmlFor="bird">
                <h4>Birthday :</h4>
                <input onChange={(e)=>{setubird(e.target.value)}} type="date" id="bird" placeholder="2018-03-30" />
              </label>
              <label htmlFor="diachi">
                <h4>Dia chi:</h4>
                <input onChange={(e)=>{setudiachi(e.target.value)}} type="text" id="diachi" placeholder="your dia chi" />
              </label>
              <label htmlFor="type">
                <h4>Account Type:</h4>
                <select onChange={(e)=>{setutype(e.target.value)}} name="type" id="type">
                  <option value="Nguoiban">Nguoi Ban</option>
                  <option value="Nguoimua">Nguoi Mua</option>
                </select>
              </label>
              <label htmlFor="password1">
                <h4>Your Password:</h4>
                <input onChange={(e)=>{setupass(e.target.value)}} type="password" id="password1" placeholder="your password" />
              </label>
              <label htmlFor="show1" className="show">
                <input className="show-i show-ii" type="checkbox"id="show1" /> 
                <p> show password</p>
              </label>
              <input className="submit" type="submit" />
              <label>
                <p className="khong" onClick={sign} >Đã có Tài Khoản!!. Đăng Nhập</p>
              </label>
              <div className='loginsocial'>
              <p>Sign up With: </p>
    
   
            
    <div className='social'>
    <FacebookLogin
              appId="863991997794740"
              autoLoad={false}
              fields="name,email,picture"
              
              textButton=''
              cssClass='facebookicon'
              callback={responseFacebook} />
    <GoogleLogin
    clientId="268854466988-6esl0k15g5k0o6gesdv09r6vsvjiker2.apps.googleusercontent.com"
    onSuccess={responseGoogle}
    isSignedIn={false}
    icon={false}
    buttonText=''
    className	='googleicon'
   
  /></div>
              </div>
            </form>
            
          </div>
        </div>
      </main>
        </div>
    )
    

}

export default Sign