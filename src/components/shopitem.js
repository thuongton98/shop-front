import React from 'react'
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchuser,fetchsanpham,fetchshop,updatesanpham} from '../actions/getActions'
import {Redirect,useParams} from 'react-router-dom'
import { useGoogleLogout } from 'react-google-login'

function Shopitem(){
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


    const findsanpham = sanpham.filter(function(value){
        return value._id ===id
    })
    const findnosanpham = sanpham.filter(function(value){
        return value._id !=id
    })
    function mausac(e){

        const t=e.split(',')
      
        
           
         return ( 
           <span>
             <span>{t.map((x,index)=> (<span key={index}>{x}, </span>))}</span>
             
           </span>
           )
           
         
       
      
       
      }
      const [goback,setgoback]=useState('')
     
     
     
    if(findsanpham.length>0){
        const finduser=user.filter(function(value){
            return value._id===findsanpham[0].userid
        })
        const findnouser=user.filter(function(value){
            return value._id!=findsanpham[0].userid
        })
       
        if(finduser.length>0){
          var  go='Go To Account';
        var link='/user/'+finduser[0].username;
        var go1='Go My Shop'
        var link1='/shopi/'+finduser[0]._id
            return(
                <div>
                    <nav className="nav-bar nav-user">
   <div className="nav-small">
<span className="nav-item">Hello,{finduser[0].username}</span>
     <div className="nav-item andi">
       <svg className="svguser" width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
       <span className="an">|</span>
       <a className='nav-item1 andii' href={link1}>{go1} </a>
       <span className="an">|</span>
       <a className='nav-item1' href={link}>{go}</a>
       <span className="an">|</span>
       <span className='out' onClick={out}>Log Out</span>
     </div>
     <span className='out kan' onClick={out}>Log Out</span>
   </div></nav>  
     <div className="user">
     <div className="alluser-i alluser">
     <div className="user-i user-iii">
     <div className='flex'>
     <h4>{findsanpham[0].tenshop}</h4>
     </div>
     <div className="user-item">
            <div>
              <span>
                <h5 className='h5'><span className='span1'>loai san pham:</span><span className='span2'>{findsanpham[0].loaisanpham}</span></h5>
               
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5 className='h5'><span className='span1'>ten san pham:</span><span className='span2'>{findsanpham[0].tensanpham}</span></h5>
               
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5 className='h5'><span className='span1'>gia san pham:</span><span className='span2'>{findsanpham[0].giasanpham}</span></h5>
               
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5 className='h5'><span className='span1'>Danh gia nguoi dung:</span><span className='span2'>{findsanpham[0].danhgia}</span></h5>
               
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5 className='h5'><span className='span1'>ma giam gia:</span><span className='span2'>{findsanpham[0].magiamgia}</span></h5>
               
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5 className='h5'><span className='span1'>mau sac:</span><span className='span2'>{mausac(findsanpham[0].mausac)}</span></h5>
               
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5 className='h5'><span className='span1'>kich co:</span><span className='span2'>{findsanpham[0].kichco}</span></h5>
               
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5 className='h5'><span className='span1'>so luong:</span><span className='span2'>{findsanpham[0].soluong}</span></h5>
               
   
              </span>
             
            </div>
          </div>
          <a href={'/shopi/'+finduser[0]._id} ><button className='user-submit' >Go Back</button></a>

         </div>
         </div>
         </div>
                </div>

            )
            
        }
        if(findnouser.length===user.length){
            return(
                <Redirect to='/p404'/>
            )
        }
       
       
    }
    if(findnosanpham.length===sanpham.length){
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

export default Shopitem