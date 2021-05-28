import React from 'react'
import {useEffect,useState} from 'react'
import {Redirect,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUser,fetchcart,fetchsanpham} from '../actions/getActions'
import { useGoogleLogout } from 'react-google-login'

function Nav(){
 
  const [redirects,setredirects]=useState('')
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

 
 useEffect(()=>{
  dispatch(fetchUser())
  dispatch(fetchcart())
  dispatch(fetchsanpham())
},[dispatch])
const user = useSelector(state=>state.gets.users)
const cartz = useSelector(state=>state.gets.carts)
const sanpham = useSelector(state=>state.gets.sanphams)

const finduser = user.filter(function(value){
  return value.token===localStorage.user

})
var linkz='/',toz='kenh nguoi ban'
if(finduser.length>0){
  if(finduser[0].type!=='Nguoiban'){
      linkz='/'
      toz='home'
  }else{
    linkz='/createshop'
    toz='Kenh nguoi ban'
  }
}

var xz=0;
    
    
    if(finduser.length>0){
      const findid=cartz.filter(function(value){
        return value.userid === finduser[0]._id
      })
     
      if(findid.length>0){
        for(var i=0;i<findid.length;i++){
         if(findid[i].check==='addcart'){
          xz=xz+parseInt(findid[i].soluong)
         }
         
        }
      }
    }
  


const [cart,setcart]=useState(0)
const [searchloai,setsearchloai]=useState('')


useEffect(()=>{
  setcart(xz)
},[xz])
const [hide,sethide]=useState('hidedi')
const [hidez,sethidez]=useState('hidedi')
      useEffect(()=>{
     
     
       
     
  if(localStorage.user!==undefined){
   sethide('hide-i')
  }else{
    sethidez('hide-i')
  
  }
  
     },[user])

   const [luusearchz,setluusearchz]=useState('')
   const [none,setnone]=useState('')
   const [searchz,setsearchz]=useState('')

   function search(e){

    var z=e.trim()
    
    const tim = sanpham.filter(function(value){
      return (value.tensanpham.toLowerCase() === z.toLowerCase()) 
    })
    const tim1 = sanpham.filter(function(value){
      return((value.loaisanpham.toLowerCase() === z.toLowerCase()) )
    })
    if(tim.length>0){
      setluusearchz(tim)
      setnone('list-search')
    }else{
      setluusearchz('')
      setnone('none')
    }
    if(tim1.length>0){
      setsearchloai(z)
    setnone('list-search')
    }
    if(tim.length>0&&tim1.length>0){
      
     setsearchloai(z)
     setnone('list-search')
    }
    }
    window.onclick=function(value){
      const z = document.querySelectorAll('.click')
     
      for(var i=0;i<z.length;i++){
      if(value.target!==z[i]){  
        
        setnone('none')
      }else{
        setnone('list-search')
      }
      }
    }
    function shows(v){
      
      if(v.key==='Enter'){
        var z=v.target.value.trim()
        const tim = sanpham.filter(function(value){
          return (value.tensanpham.toLowerCase() === z.toLowerCase()) 
        })
        const tim1 = sanpham.filter(function(value){
          return((value.loaisanpham.toLowerCase() === z.toLowerCase()) )
        })
        if(tim.length>0){
          setluusearchz(tim)
          setnone('list-search')
        }else{
          setluusearchz('')
          setnone('none')
        }
        if(tim1.length>0){
          setsearchloai(z)
          setnone('list-search')
        
        }else{
          setsearchloai('')
          setnone('none')
        }
        if(tim.length>0&&tim1.length>0){
          
         setsearchloai(z)
         setnone('list-search')
        }
      }
    }
    
    function showsearch(e){
      if(searchloai!==''&&luusearchz!==''){
        return(
          <div className={none}>
            <Link className='Link' to={'/sanpham/'+searchloai}>tim kiem loai san pham: {searchloai}</Link>
            { luusearchz.map((value,index)=>{
            return(
              <div  key={index}>
                <Link className='Link' to={'/sanphami/'+value._id}>tim kiem ten san pham: {value.tensanpham}.Shop: {value.tenshop}</Link>
              </div>
            )
          })}
          </div>
        )
      }
      if(searchloai!==''){
        return(
          <div className={none}>
            <Link  className='Link' to={'/sanpham/'+searchloai}>tim kiem loai san pham: {searchloai}</Link>
          </div>
        )
      }
      if(luusearchz!==''){
       
          return(
            <div className={none}>
         { luusearchz.map((value,index)=>{
            return(
              <div  key={index}>
                <Link className='Link' to={'/sanphami/'+value._id}>tim kiem ten san pham: {value.tensanpham}.Shop: {value.tenshop}</Link>
              </div>
            )
          })}
          </div>
          )
        
     
    }
    
      
    }

  
    return(
     
        <nav className="nav-bar">
      
        <div className="nav-small">
    <Link className="nav-item" to={linkz}>{toz}</Link>
          <div className="nav-item">
          <a className={hide} href={'/user/'+localStorage.useri}>Account </a>
            <span className="an account-i">|</span>
            <svg width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
            <span className="an">|</span>
           
            <a className={hidez} href="/sign">Dang nhap </a>
            
            <span onClick={out} className={hide}>Log Out</span>
          </div>   
        </div>
   
        <div className="nav-big">
          <a href="/#">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48"><path d="M14.47 17.49c-.51-.95-.77-2.06-.77-3.33 0-1.22.26-2.33.79-3.34.53-1.01 1.27-1.87 2.23-2.58s2.09-1.26 3.41-1.65C21.45 6.2 22.89 6 24.47 6c1.62 0 3.09.22 4.41.67 1.32.45 2.45 1.07 3.39 1.88.94.8 1.66 1.75 2.17 2.86.51 1.1.76 2.31.76 3.62h-6.02c0-.61-.1-1.18-.29-1.7-.19-.53-.49-.98-.89-1.35-.4-.37-.9-.67-1.5-.87-.6-.21-1.31-.31-2.13-.31-.79 0-1.47.09-2.06.26-.58.17-1.06.41-1.44.72-.38.31-.67.67-.86 1.08-.19.41-.29.86-.29 1.32 0 .96.49 1.77 1.47 2.42.75.49 1.53.96 2.81 1.4h-9.22c-.1-.17-.21-.33-.31-.51zM42 24v-4H6v4h19.25c.36.14.8.28 1.1.41.74.33 1.32.68 1.74 1.02.42.35.7.73.85 1.13.15.41.22.87.22 1.37 0 .47-.09.91-.27 1.31-.18.41-.46.76-.83 1.05-.37.29-.85.52-1.42.69-.58.17-1.25.25-2.03.25-.87 0-1.66-.09-2.37-.26-.71-.17-1.31-.45-1.81-.83-.5-.38-.89-.88-1.17-1.49-.28-.61-.51-1.53-.51-2.41H12.8c0 1.1.16 2.26.47 3.16.31.9.75 1.71 1.3 2.42s1.21 1.32 1.96 1.84 1.56.96 2.44 1.3c.88.35 1.79.61 2.76.77.96.17 1.93.25 2.89.25 1.6 0 3.06-.18 4.36-.55s2.42-.9 3.34-1.58c.92-.69 1.63-1.53 2.14-2.54s.75-2.15.75-3.43c0-1.2-.21-2.28-.62-3.23-.1-.23-.21-.45-.34-.67H42z" /></svg>
              <p>Shop</p>
            </div></a>
          <div className="search">
            <input onChange={(e)=>setsearchz(e.target.value)}  onKeyDown={(e)=>shows(e)} className='click' type="text" placeholder="Search ..." />
            <button className='click' onClick={()=>{search(searchz)}} type="submit"><svg className='click' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></button>
            {showsearch(luusearchz)}
            <ul className="list">
              <li className="list-i"><a href="/soon">áo</a></li>
              <li className="list-i">|</li>
              <li className="list-i"><a href="/soon">Quần</a></li>
              <li className="list-i">|</li>
              <li className="list-i"><a href="/soon">Giày</a></li>
              <li className="list-i">|</li>
              <li className="list-i "><a href="/soon">áo</a></li>
            </ul> 
          </div>
          <a href={'/cart/'+localStorage.useri}>
            <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={40} viewBox="0 0 48 48"><path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" /></svg>
    <p className='icon-cart-number'>{cart}</p>
            </div></a>
          
        </div>
      </nav>
    )

}


export default Nav;