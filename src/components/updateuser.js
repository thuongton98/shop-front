import React from 'react'
import {useParams,Redirect,NavLink,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUser,updateuser} from '../actions/getActions'
import {useState,useEffect} from 'react'
import Footer from '../components/footer'
import { useGoogleLogout } from 'react-google-login'

function Updateuser(){
  const onLogoutSuccess = () =>{
   
  }
  const { signOut } = useGoogleLogout({
    clientId:"268854466988-6esl0k15g5k0o6gesdv09r6vsvjiker2.apps.googleusercontent.com",
    onLogoutSuccess,
   
  })
  function out(){
    signOut();
    localStorage.removeItem('useri');
      localStorage.removeItem('user');
   window.location.reload();
  }
  const dispatch=useDispatch()
  let { id } = useParams();

  useEffect(()=>{
     dispatch(fetchUser())
    

  },[dispatch])
  const user = useSelector(state=>state.gets.users)
  
  const finduser = user.filter(function(value){
    return value.token===localStorage.user
  
  })
  
 
  const [idold,setidold]=useState('')
  const [newtoken,setnewtoken]=useState('');
  const [email,setemail]=useState('')
  const [fname,setfname]=useState('')
  const [lname,setlname]=useState('')
  const [username,setusername]=useState('')
  const [bird,setbird]=useState('')
  const [diachi,setdiachi]=useState('')
  const [pass,setpass]=useState('')
  const [active,setactive]=useState('')
  const [redirect,setredirect]=useState('')
  
  const [an,setan]=useState('')
  const [kan,setkan]=useState('none')
  const [mess,setmess]=useState('')
  const [mess1,setmess1]=useState('')
  const [mess2,setmess2]=useState('')
  const [mess3,setmess3]=useState('')
  const [mess4,setmess4]=useState('')
  const [mess5,setmess5]=useState('')
  const [mess6,setmess6]=useState('')

    const findid = user.filter(function(value){
      return value._id===id
    })
  
  useEffect(()=>{
    if(finduser.length>0){
    
     if(findid.length>0){
      setidold(findid[0].token)
      setnewtoken(findid[0].token)
      setemail(findid[0].email)
      setfname(findid[0].fname)
      setlname(findid[0].lname)
      setusername(findid[0].username)
      setbird(findid[0].bird)
      setdiachi(findid[0].diachi)
      setpass(findid[0].pass)
      setactive(findid[0].active)
     }
    }
  },[finduser][findid])
  const [newtoken1,setnewtoken1]=useState('');
  const [email1,setemail1]=useState('')
  const [fname1,setfname1]=useState('')
  const [lname1,setlname1]=useState('')
  const [username1,setusername1]=useState('')
  const [bird1,setbird1]=useState('')
  const [diachi1,setdiachi1]=useState('')
  const [pass1,setpass1]=useState('')
  const [active1,setactive1]=useState('')
  if(finduser.length>0){
    const findid = user.filter(function(value){
      return value._id===id
    })
    if(findid.length<1){
      return(
        <Redirect to='/p404'/>
      )
    }
    var crypto = require("crypto");
    function renewtoken(){
     const z=crypto.randomBytes(200).toString('hex')
      setnewtoken1(z)
      setan('none')
      setkan('')
    }
    function uemail(e){
     setemail1(e.target.value)
        }
    function ufname(e){
     setfname1(e.target.value)
     
        }
        function ulname(e){
        setlname1(e.target.value)
            }
            function uusername(e){
             setusername1(e.target.value)
                }
                function ubird(e){
                setbird1(e.target.value)
                    }
                    function udiachi(e){
                     setdiachi1(e.target.value)
                        }
                        function upass(e){
                         setpass1(e.target.value)
                            }
                            function uactive(e){
                             setactive1(e.target.value)
                                }
                                function cleantoken(){
                                  setan('none')
                                  setkan('')
                                  setnewtoken1(newtoken)
                                }
    function utoken(e){
     setnewtoken1(e.target.value)
      

    }
    function updateuseri(){
var email2,fname2,lname2,username2,pass2,newtoken2,bird2,active2,diachi2
if(email1===''){
 email2=email
}else{
  email2=email1
}
if(fname1===''){
  fname2=fname
 }else{
   fname2=fname1
 }
 if(lname1===''){
   lname2=lname
 }else{
   lname2=lname1
 }
 if(username1===''){
  username2=username
 }else{
   username2=username1
 }
 if(pass1===''){
  pass2=pass
 }else{
   pass2=pass1
 }
 if(newtoken1===''){
  newtoken2=newtoken
 }else{
   newtoken2=newtoken1
 }
 if(bird1===''){
  bird2=bird
 }else{
   bird2=bird1
 }
 if(active1===''){
  active2=active
 }else{
   active2=active1
 }
 if(diachi1===''){
   diachi2=diachi
 }else{
   diachi2=diachi1
 }
  
const update ={
        id:idold,
        email:email2,
        username:username2,
        fname:fname2,
        lname:lname2,
        
        bird:bird2,
        diachi:diachi2,
        pass:pass2,
        token:newtoken2,
        
        active:active2
      }
     dispatch(updateuser(update))
      setredirect('backtoadmin')
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
    }
    function back(){
      window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      })
  setredirect('ok')
    }
    if(redirect==='ok'){
    
      return(
        
        <Redirect to='/admin'/>
      )
    }
if(redirect==='backtoadmin'){
  return(
    <div>
    <nav className="nav-bar nav-user">
      <div className="nav-small">
<span className="nav-item" href="#">Hello,{finduser[0].username}</span>
        <div className="nav-item disable">
          <svg width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
          <span className="an">|</span>
         
          <a className='nav-item1' href="/soon">Add Alert</a>
          <span className="an">|</span>
      <span  className='nav-item' onClick={out}>Log Out</span>
        </div>
      </div></nav> 
    
      <div className="updateuser alluser alluser-i">
        <div className="user-iii user-i">
          
         
       
          <div className='flex '>
          <h4>Update ID: {id}</h4>
          </div>
          
         <div className='giua'>
         <h3 >Updated</h3>
          <Link  className='link' to='/admin'><button>Back To Admim</button></Link>
         </div>
         
         
        </div>
      </div>
      
    </div>
  
)
}

    return(
      <div>
      <nav className="nav-bar nav-user">
        <div className="nav-small">
  <span className="nav-item" href="#">Hello,{finduser[0].username}</span>
          <div className="nav-item disable">
            <svg width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
            <span className="an">|</span>
           
            <a className='nav-item1' href="/soon">Add Alert</a>
            <span className="an">|</span>
        <span  className='nav-item' onClick={out}>Log Out</span>
          </div>
        </div></nav> 
      
        <div className="updateuser alluser alluser-i">
          <div className="user-iii user-i">
            
           
         
            <div className='flex '>
            <h4>Update ID: {id}</h4>
            </div>
            <div className='mess'>{mess}{mess1}{mess2}{mess3}{mess4}{mess5}{mess6}</div>
            <div className="user-item user-item-l">
            <div>
                <span >
                  <h5>Email: </h5>
     
     <input type='email' onChange={uemail} defaultValue={email}></input>
                </span>
               
              </div>
            <div>
                <span >
                  <h5>First Name: </h5>
     
     <input onChange={ufname} defaultValue={fname}></input>
                </span>
               
              </div>
              <div>
                <span >
                  <h5>Last Name: </h5>
     
     <input onChange={ulname} defaultValue={lname}></input>
                </span>
               
              </div>
              <div>
                <span>
                  <h5>User Name: </h5>
   
     <input onChange={uusername} defaultValue={username}></input>
                </span>
               
              </div>
              <div>
                <span>
                  <h5>Birthday: </h5>
                  <input onChange={ubird} type='date' defaultValue={bird}></input>
                </span>
               
              </div>
              <div>
                <span>
                  <h5>Address: </h5>
                  <input onChange={udiachi} defaultValue={diachi}></input>
                </span>
               
              </div>
              <div>
                <span>
                  <h5>Password: </h5>
     <input onChange={upass} defaultValue={pass}></input>
                </span>
               
              </div>
              <div>
                <span>
                  <h5>Token: </h5>
                  <textarea onClick={()=>{cleantoken()}} onChange={(e)=>{utoken(e)}} className={an} value={newtoken}></textarea>
                  <textarea onChange={(e)=>{utoken(e)}} className={kan} value={newtoken1}></textarea>
                  <input className='change' onClick={()=>renewtoken()} type='submit' value='Random Token'/>
                </span>
               
              </div>
              <div>
                <span>
                  <h5>Active: </h5>
                  <select onChange={(e)=>uactive(e)} defaultValue={pass}>
                    <option value='no'>No</option>
                    <option value='yes'>Yes</option>
                  </select>
                </span>
               
              </div>
              <div>
              <input onClick={()=>updateuseri()} className='updateuser-i' type='submit' value='Update'></input>
                  <input onClick={()=>back()} className='updateuser-i' type='submit' value='Back'></input>
               
               
              </div>
            </div>
           
           
          </div>
        </div>
      </div>
    
  )
  }
return(
    <div> 
  <nav className="nav-bar nav-user">
          <div className="nav-small">
    <span className="nav-item" href="#">Hello,{localStorage.useri}</span>
            <div className="nav-item disable">
              <svg width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
             
              <span className="an">|</span>
              <a className='nav-item1' href="/soon">Add Alert</a>
              <span className="an">|</span>
          <span  className='nav-item' onClick={out}>Log Out</span>
            </div>
          </div></nav> 
          <div className='cho'>
    <div className='waiting'>
    <h1>Wait <span></span></h1> 
    <div className="wait">
        <div></div>
    </div>
  </div>
    </div>

</div>
)

}

export default Updateuser