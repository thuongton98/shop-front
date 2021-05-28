import React from 'react'
import {useParams,Redirect} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchshop,fetchcart,fetchUser,updateimg,updateuseri,changeemail,changepass} from '../actions/getActions'
import {useState,useEffect} from 'react'
import Footer from '../components/footer'
import { useGoogleLogout } from 'react-google-login'


function User(){
  const onLogoutSuccess = () =>{
   
  }
  const { signOut } = useGoogleLogout({
    clientId:"268854466988-6esl0k15g5k0o6gesdv09r6vsvjiker2.apps.googleusercontent.com",
    onLogoutSuccess,
   
  })

    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchUser())
      dispatch(fetchcart())
      dispatch(fetchshop())
   },[dispatch])
    const [redirect,setredirect]=useState('')
    const [editz,seteditz]=useState('button')
    const [cancelz,setcancelz]=useState('button1')
    const [editzemail,seteditzemail]=useState('button')
    const [cancelzpass,setcancelzpass]=useState('button1')
    const [editzpass,seteditzpass]=useState('button')
    const [cancelzemail,setcancelzemail]=useState('button1')
    const [submituser,setsubmituser]=useState('usernone')
    const [submitusere,setsubmitusere]=useState('usernone')
    const [submituserp,setsubmituserp]=useState('usernone')
    const [birdclass,setbirdclass]=useState('input-user')
    const [birdclass1,setbirdclass1]=useState('input-user none')
    const [birdtype,setbirdtype]=useState('text')
   const [classu,setclassu]=useState('input-user')
   const [classue,setclassue]=useState('input-user')
   const [classup,setclassup]=useState('input-user')
   const [check,setcheck]=useState(true)
   const [checke,setchecke]=useState(true)
   const [checkp,setcheckp]=useState(true)
  const [file,setfile]=useState('')
  function out(){
    signOut();
    localStorage.removeItem('useri');
      localStorage.removeItem('user');
   window.location.reload();
  }
   
   
    const axios = require('axios');
   
     
      const user = useSelector(state=>state.gets.users)
      const cart = useSelector(state=>state.gets.carts)
      const shop = useSelector(state=>state.gets.shops)
      
    let {id} = useParams();
    const [redirecte,setredirecte]=useState('')
     
    const [mess,setmess]=useState('')
    const [pass,setpass]=useState('')
    const [email,setemail]=useState('')
     const [username,setusername]=useState('')
     const [diachi,setdiachi]=useState('')
     const [type,settype]=useState('')
     const [bird,setbird]=useState('')
     const [fname,setfname]=useState('')
     const [lname,setlname]=useState('')
     const [images,setimages]=useState('')
     const [messe,setmesse]=useState('')
     const [messp,setmessp]=useState('')
     const [ok,setok]=useState('')
    var go='Go To Cart';
    var link='/cart/'+localStorage.useri;
  
    const finduser = user.filter(function(value){
        
        return value.token===localStorage.user
     
     
    })
  
   
    useEffect(()=>{
       if(finduser.length>0){
          setimages(finduser[0].img)
          setusername(finduser[0].username)
          setfname(finduser[0].fname)
          setlname(finduser[0].lname)
          setbird(finduser[0].bird)
          settype(finduser[0].bird)
          setdiachi(finduser[0].diachi)
          setemail(finduser[0].email)
          setpass(finduser[0].pass)
       }
    },[finduser[0]])
    if(localStorage.user===undefined){
        localStorage.removeItem('user')
        localStorage.removeItem('useri')
        return(<Redirect to='/sign'/>)
      }
          
         
         if(redirect==='ok'){
           return(<Redirect to='/'/>)
         }
         if(redirecte==='ok'){
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          localStorage.newuser='da tao user'
           return(<Redirect to='/checkemail'/>)
         } 
         
    function uploadz(e){
        e.preventDefault();
        if(file===''){
          alert('please choose file')
        }
        else{
          const formData = new FormData();
                      formData.append("add", file);
                      const config = {
                          headers: {
                              'content-type': 'multipart/form-data'
                          }
                      }
                      axios.post('https://thuongton.net/api/user/images/add', formData, config).then(res => {
                          var z;
                          let filePath = res.data.fileNameInServer
                          for(var i=0;i<filePath.length;i++)
          if(filePath[i]==='/'&&filePath[i+1]==='/'){
            
                                  //tren window xoa \\
                                  z = filePath.split('\\')[1]
                              
          }else{
            //tren linux xoa /
            z=filePath.split('/')[1]
          }
                          const fileimage='https://thuongton.net/api/user/images/'+z
                        setimages(fileimage)
          const up = {
            img:fileimage,
            id:localStorage.user
          }
         
                         dispatch(updateimg(up)) 
          
                  })
          
          
        }
            }
         function submitx(e){
            e.preventDefault();
if(username===''){

}
const x=user.filter(function(value){
  return username===value.username
})


if(x.length>0){
  

  if(username===finduser[0].username){
    setmess('')
    setsubmituser('usernone')
    setbirdclass('input-user ')
    setbirdclass1('none')
   setbirdtype('text')
   setclassu('input-user')
  setcheck(false)
  seteditz('button')
  setcancelz('button1')
  const userz={
    id:localStorage.user,
    username:username,
    fname:fname,
    lname:lname,
    bird:bird,
    type:type,
    diachi:diachi
  }
  dispatch(updateuseri(userz))
  localStorage.useri=username
  
    setok(type)
  
  }else{
   
    setmess('username trung nhap lai')
    setTimeout(() => {
      setmess('')
     }, 3000);
     setsubmituser('user-submit')
     setbirdclass1('bird')
    setbirdtype('date')
    setclassu('input-user1')
   setcheck(false)
   seteditz('button1')
   setcancelz('button')
   window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  }
  
   
   
  
}else{
  const userz={
    id:localStorage.user,
    username:username,
    fname:fname,
    lname:lname,
    bird:bird,
    type:type,
    diachi:diachi
  }
  dispatch(updateuseri(userz))
  localStorage.useri=username
 setredirect('ok')
}

            
            
                }
                function submitemail(e){
                    e.preventDefault();
                    const x=user.filter(function(value){
                      return email===value.email
                    })
                    if(x.length>0){
                      if(email===finduser[0].email){
                        setclassue('input-user')
                        seteditzemail('button')
                        setcancelzemail('button1')
                        setsubmitusere('usernone')
                        setchecke(true)
                  
                      }else{
                        setmesse('email trung nhap lai')
                        setTimeout(() => {
                          setmesse('')
                        }, 3000);
                        window.scrollTo({
                          top:500,
                          left:0,
                          behavior:'smooth'
                        })
                        setclassue('input-user1')
                        seteditzemail('button1')
                        setcancelzemail('button')
                        setsubmitusere('user-submit')
                        setchecke(false)
                      }
                    }else{
                      setmesse('')
                      const emailz = {
                        id:localStorage.user,
                        email:email
                      }
                      
                      dispatch(changeemail(emailz))
                      setredirecte('ok')
                    }
                  }
                  function fnamex(e){
                    if(e!==''){
                      setfname(e)
                    }else{
                      setfname(finduser[0].fname)
                    }
                  }
                  function usernamex(e){
                    if(e!==''){
                      setusername(e)
                    }else{
                      setusername(finduser[0].username)
                    }
                  }
                  function lnamex(e){
                    if(e!==''){
                      setlname(e)
                    }else{
                      setlname(finduser[0].lname)
                    }
                  }
                  function birdx(e){
                    if(e!==''){
                      setbird(e)
                    }else{
                      setbird(finduser[0].bird)
                    }
                  }
                  function typex(e){
                   settype(e)
                   
                  }
                  function diachix(e){
                    if(e!==''){
                      setdiachi(e)
                    }else{
                      setdiachi(finduser[0].type)
                    }
                  }
                  function edit(e){
                    e.preventDefault();
                   setsubmituser('user-submit')
                   setbirdclass('none')
                    setbirdclass1('bird')
                   setbirdtype('date')
                   setclassu('input-user1')
                  setcheck(false)
                  seteditz('button1')
                  setcancelz('button')
                  }
                  function editemail(e){
                    setclassue('input-user1')
                    seteditzemail('button1')
                    setcancelzemail('button')
                    setsubmitusere('user-submit')
                    setchecke(false)
                  }
                  function editpass(e){
                    setclassup('input-user1')
                    seteditzpass('button1')
                    setcancelzpass('button')
                    setsubmituserp('user-submit')
                    setcheckp(false)
                  }
                  function cancelemail(e){
                    setclassue('input-user')
                    seteditzemail('button')
                    setcancelzemail('button1')
                    setsubmitusere('usernone')
                    setchecke(true)
                  }
                  function cancelpass(e){
                    setclassup('input-user')
                    seteditzpass('button')
                    setcancelzpass('button1')
                    setsubmituserp('usernone')
                    setcheckp(true)
                  }
                  function cancel(e){
                    e.preventDefault();
                   setsubmituser('usernone')
                    setbirdclass1('input-user none')
                    setbirdclass('input-user')
                   setbirdtype('text')
                   setclassu('input-user')
                  setcheck(false)
                  seteditz('button')
                  setcancelz('button1')
                  }
                  function emailx(e){
                    if(e!==''){
                      setemail(e)
                    }else{
                      setemail(finduser[0].email)
                    }
                  }
                  function passx(e){
              if(e!==''){
                setpass(e)
              }else{
                setpass(finduser[0].pass)
              }
                  }
                  function submitpass(e){
                    e.preventDefault();
                    if(pass===finduser[0].pass){
                     setmessp('nhap lai pass')
                     setTimeout(() => {
                      setmessp('')
                    }, 3000);
                    }else if(pass.length<8){
                      setmessp('pass <8 ky tu')
                      setTimeout(() => {
              setmessp('')
                      }, 3000);
                    }else{
                      const passz ={
                        id:localStorage.user,
                        newpass:pass,
                        email:email,
                      }
                    
                      dispatch(changepass(passz))
                      setredirecte('ok')
                    }
                  }
                  function lichsu(e){
     
                    if(e.length>0){
                  
                      return(
                       <table className='table-shop table-user'>
                       <tbody><tr>
                       
                         <th></th>
                           <th>san pham:</th>
                           <th>gia:</th>
                           <th>so luong:</th>
                           <th>mau sac:</th>
                           <th>kich co:</th>
                         
                           <th>check:</th>
                  
                         </tr>
                   {e.map((value,index)=>{
                  
                    if(value.check!=='addcart'){
                      
                       
                     
                      
                      
                       var img,tensanpham,giasanpham,soluong,mausac,kichco;
                       if(value.img[0]===undefined){
                         for(var i=0;i<value.img.length;i++){
                           if(value.img[i+1]!==undefined){
                             img=value.img[i+1]
                           }else{
                             img='none'
                             i++
                           }
                         }
                       }else{
                         img=value.img[0]
                       }
                       if(value.tensanpham===undefined){
                          tensanpham='chua cap nhat'
                       }else{
                         tensanpham=value.tensanpham
                       }
                       if(value.giasanpham===undefined){
                         giasanpham='chua cap nhat'
                      }else{
                        giasanpham=value.giasanpham
                      }
                      if(value.soluong===undefined){
                       soluong='chua cap nhat'
                    }else{
                      soluong=value.soluong
                    }
                    if(value.mausac===undefined){
                     mausac='chua cap nhat'
                   }else{
                    mausac=value.mausac
                   }
                   if(value.kichco===undefined){
                     kichco='chua cap nhat'
                   }else{
                    kichco=value.kichco
                   }
                   
                       return(
                         <tr key={index}>
                            
                            <td className='poiner' className='td-img'><img className='cart-img' src={img}/></td>
                      <td className='poiner' >{tensanpham}</td>
                      <td className='poiner'>{giasanpham}</td>
                      <td className='poiner'>{soluong}</td>
                      <td className='poiner'>{mausac}</td>
                      <td className='poiner'>{kichco}</td>
                     
                      <td className='poiner'>{value.check}</td>
                     
                         </tr>
                       )
                     }
                   })}
                         </tbody></table> 
                      )
                     }
                  }
if(finduser.length>0){
    const findshop = shop.filter(function(value){
        return value.userid ===finduser[0]._id
        })
            const findcart = cart.filter(function(value){
            
               return value.userid === finduser[0]._id
              
            })
    if(finduser[0].username!==id){
        return(
          <Redirect to={'/p404'}/>
        )
      }
   
        if(finduser[0].type==='Nguoiban'){
          if(findshop.length>0){
            go = 'Go to My Shop'
            link = ('/shopi/'+finduser[0]._id)
          }
          go = 'Go to My Shop'
          link = ('/createshop')
        }else{
          go='Go To Cart'
          link='/cart/'+localStorage.useri
        }
        if(ok!==''){
      
            if(ok==='Nguoiban'){
              if(findshop.length>0){
                go = 'Go to My Shop'
                link = ('/shopi/'+finduser[0]._id)
              }
              go = 'Go to My Shop'
              link = ('/createshop')
            }else{
              go='Go To Cart'
              link='/cart/'+localStorage.useri
            }
          }
    if(localStorage.user!==finduser[0].token){
        localStorage.removeItem('user')
        localStorage.removeItem('useri')
        return(<Redirect to='/sign'/>)
      }



            return(
                <div>
                 
                <nav className="nav-bar nav-user">
                  <div className="nav-small">
               <span className="nav-item">Hello,{id}</span>
                    <div className="nav-item">
                      <svg className="svguser" width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
                      <span className="an">|</span>
                      
                      <a className='' href={link}>{go}</a>
                      <span className="an an1">|</span>
                      <span className='out' onClick={out}>Log Out</span>
                    </div>
                  </div></nav> 
                <div className="user">
                  <div className="avatar">
                  <img className='img' src={images} alt="avatar"/>
                     
                     <form>
                   <input type="file" id="myFile" onChange={(e)=>{setfile(e.target.files[0])}} name="filename" />
                   <input type="submit" onClick={uploadz}/>
                 </form>
                  </div>
                  <div className="alluser-i alluser">
                    <div className="user-i">
                    <div className='mess'>{mess}</div>
                    <div className='flex'>
                    <h4>My Account</h4>
                    
                    <button className={editz} onClick={edit}>Edit</button>
                    <button className={cancelz} onClick={cancel}>Cancel</button>
                      </div>
                      
                      <div className="user-item">
                        <div>
                          <span>
                            <h5>User Name: </h5>
                            <input disabled={check} className={classu} type="text" onChange={(e)=>{usernamex(e.target.value)}} defaultValue={username}/>
               
                          </span>
                         
                        </div>
                      </div>
                      <div className="user-item">
                        <div>
                          <span>
                            <h5>Firt Name: </h5>
                            <input disabled={check} className={classu} type="text" onChange={(e)=>{fnamex(e.target.value)}} defaultValue={fname}/>
               
                          </span>
                         
                        </div>
                      </div>
                      <div className="user-item">
                        <div>
                          <span>
                            <h5>Last Name: </h5>
                            <input disabled={check} className={classu} type="text" onChange={(e)=>{lnamex(e.target.value)}} defaultValue={lname}/>
               
                          </span>
                         
                        </div>
                      </div>
                      <div className="user-item">
                        <div>
                          <span>
                            <h5>Bird: </h5>
                            <input disabled={check} className={birdclass} onChange={(e)=>{birdx(e.target.value)}} value={bird}/>
                            <input disabled={check} className={birdclass1} onChange={(e)=>{birdx(e.target.value)}} type={birdtype}/>
                          </span>
                          
                        </div>
                      </div>
                      <div className="user-item">
                        <div>
                          <span>
                            <h5>Type: </h5>
                            ​​<select defaultValue={type} onChange={(e)=>{typex(e.target.value)}}>
              <option value="Nguoimua">Nguoimua</option>
              <option value="Nguoiban">Nguoiban</option>
             
            </select>
              
                          </span>
                          
                        </div>
                      </div>
                      <div className="user-item">
                        <div>
                          <span>
                            <h5>Dia chi: </h5>
                            <input disabled={check} className={classu} onChange={(e)=>{diachix(e.target.value)}} type="text" defaultValue={diachi}/>
              
                          </span>
                          
                        </div>
                      </div>
                       <input className={submituser}/*user-submit*/ type='submit' onClick={submitx}></input>
                     
                    </div>
                  </div>
                  <div className="alluser-i alluser">
                    <div className="user-i">
                    <div className='mess'>{messe}</div>
                    <div className='flex'>
                    <h4>My Email</h4>
                    
                    <button className={editzemail} onClick={editemail}>Edit</button>
                    <button className={cancelzemail} onClick={cancelemail}>Cancel</button>
                      </div>
                      
                      <div className="user-item">
                        <div>
                          <span>
                            <h5>Email: </h5>
                            <input disabled={checke} className={classue} type="text" onChange={(e)=>{emailx(e.target.value)}} defaultValue={email}/>
               
                          </span>
                         
                        </div>
                      </div>
                    
                      
                     
                     
                    
                       <input className={submitusere}/*user-submit*/ type='submit' onClick={(e)=>{submitemail(e)}}></input>
                     
                    </div>
                  </div>
                  <div className="alluser-i alluser">
                    <div className="user-i">
                    <div className='mess'>{messp}</div>
                    <div className='flex'>
                    <h4>My Password</h4>
                    
                    <button className={editzpass} onClick={editpass}>Edit</button>
                    <button className={cancelzpass} onClick={cancelpass}>Cancel</button>
                      </div>
                      
                      <div className="user-item">
                        <div>
                          <span>
                            <h5>Password: </h5>
                            <input disabled={checkp} className={classup} type="text" onChange={(e)=>{passx(e.target.value)}} defaultValue={pass}/>
               
                          </span>
                         
                        </div>
                      </div>
                    
                      
                     
                     
                    
                       <input className={submituserp}/*user-submit*/ type='submit' onClick={(e)=>{submitpass(e)}}></input>
                       <div className='user-3i'>
                <div className='flex'>
                    <h4 className='top-20'>History</h4>
                    
                   
                      </div>
                      {lichsu(findcart)}
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
               <span className="nav-item">Hello,{id}</span>
                    <div className="nav-item">
                      <svg className="svguser" width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
                      <span className="an">|</span>
                      
                      <a className='' href={link}>{go}</a>
                      <span className="an an1">|</span>
                      <span className='out' onClick={out}>Log Out</span>
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

export default User