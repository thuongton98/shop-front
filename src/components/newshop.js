import React from 'react';
import {Redirect,useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchuser,fetchshop,fetchsanpham,addshop} from '../actions/getActions'
import {useState,useEffect} from 'react'
import Footer from '../components/footer'
import { useGoogleLogout } from 'react-google-login'

function Shopnew(){
    
    let {id} = useParams();
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
        localStorage.removeItem('userid')
      window.location.reload();
      }

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchuser())
        dispatch(fetchshop())
        dispatch(fetchsanpham())
    },[dispatch])
    
    const user = useSelector(state=>state.gets.users)
    const shop = useSelector(state=>state.gets.shops)
    const sanpham = useSelector(state=>state.gets.sanphams)
    const [tenshop,settenshop]=useState('');
    const [loaishop,setloaishop]=useState('Ban Giay')
    const [diachishop,setdiachishop]=useState('')
    const [mess,setmess]=useState('')
    const [mess1,setmess1]=useState('')
    const [mess2,setmess2]=useState('')
    const [redirect,setredirect]=useState('')
const [chuyenpage,setchuyenpage]=useState('')
    const finduser = user.filter(function(value){
        return value._id === id
    })
    const findnouser = user.filter(function(value){
        return value._id !== id
    })
    const findshop = shop.filter(function(value){
        return value.userid === id
    })
   var go;
     var link;
     function submit(e){
         if(tenshop===''){
             setmess('vui long nhap ten shop')
             window.scrollTo({
                 top:0,
                 left:0,
                 behavior:'smooth'
             })
             setTimeout(() => {
                 setmess('')
             }, 3000);
         }else{
             setmess('')
         }
         if(diachishop===''){
            setmess1('vui long nhap ten shop')
            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            })
            setTimeout(() => {
                setmess1('')
            }, 3000);
        }else{
            setmess1('')
        }
        if(diachishop===''&&tenshop===''){
            setmess2(',')
            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            })
            setTimeout(() => {
                setmess2('')
            }, 3000);
        }else{
            setmess2('')
            const shop = {
                userid : id,
                tenshop,
                loaishop,
                diachi:diachishop
            }
            dispatch(addshop(shop))
         setchuyenpage('ok')
        }
       
       
      
     }
    
     if(chuyenpage==='ok'){
      return(
        <Redirect to={'/shopi/'+id}/>
      )
    }
    if(finduser.length>0){
        if(findshop.length>0){
          return(
            <Redirect to={'/shopi'+finduser[0]._id}/>
          )
        }
       if(findshop.length===0){
        go='Go To Account';
        link='/user/'+finduser[0].username;
        
            return(
                
                <div>
                   <nav className="nav-bar nav-user">
      <div className="nav-small">
   <span className="nav-item">Hello,{finduser[0].username}</span>
        <div className="nav-item">
          <svg className="svguser" width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
         
          <span className="an">|</span>
          <a   className='nav-item1'href={link}>{go}</a>
          <span className="an">|</span>
          <span className='out' onClick={out}>Log Out</span>
        </div>
      </div></nav>  
      <div className="user">
      <div className="alluser-i alluser">
      <div className="user-i user-iii">
      <div className='flex'>
      <h4>Create New Shop: </h4>
      </div>
      <div className='mess'>{mess}{mess2}{mess1}</div>
    
      <div className="user-item">
            <div>
              <span>
                <h5>Ten Shop: </h5>
                <input onChange={(e)=>{settenshop(e.target.value)}} className='input-user1' type="text" placeholder='nhap ten shop' />
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5>Loai Shop: </h5>
                <select onChange={(e)=>{setloaishop(e.target.value)}}>
                    <option value='Ban Giay'>Ban Giay</option>
                    <option value='Ban Ao'>Ban Ao</option>
                    <option value='Ban QUan'>Ban Quan</option>
                    <option value='wait'>comming soon</option>
                </select>
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5>Dia Chi Shop: </h5>
                <input onChange={(e)=>{setdiachishop(e.target.value)}} className='input-user1' type="text" placeholder='nhap loai shop' />
   
              </span>
             
            </div>
          </div>
          <input onClick={(e)=>{submit(e)}} className='user-submit' type='submit' />
          </div>
          </div>
          </div>
          <Footer/>
  </div> 
            )
       }
      
        
        
        
    }

    if(user.length>0){
     
       if(findnouser.length===user.length){
           return(
               <Redirect to='/p404'/>
           )
       }
    }
  

    return(
        <div>
  <div className='cho'>
    <div className='waiting'>
    <h1>Wait <span></span></h1> 
    <div className="wait">
        <div></div>
    </div>
  </div>
    </div>
    <Footer/>
  </div>
    )
}

export default Shopnew