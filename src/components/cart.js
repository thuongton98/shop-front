import React from 'react'

import {useParams,Redirect,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchsanpham,fetchUser,fetchcart,deletecart,guinguoiban,doisoluong,updatecartitem} from '../actions/getActions'
import {useState,useEffect} from 'react'
import Footer from '../components/footer'
import { useGoogleLogout } from 'react-google-login'

function Cart(){
    const dispatch=useDispatch()
   
    useEffect(()=>{
        dispatch(fetchUser())
        dispatch(fetchcart())
        dispatch(fetchsanpham())
     },[dispatch])
    
     const user = useSelector(state=>state.gets.users)
     const cart = useSelector(state=>state.gets.carts)
     const sanpham = useSelector(state=>state.gets.sanphams)
     const [deleteok,setdeleteok]=useState('')
     const [chuyenbuyall,setchuyenbuyall]=useState('')
     const [sanphami,setsanphami]=useState('')
     const [buyi,setbuyi]=useState('')
     const [newsoluong,setnewsoluong]=useState('')
     const [newmausac,setnewmausac]=useState('')
     const [newkichco,setnewkichco]=useState('')
     const [mess,setmess]=useState('')
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

  var go = 'Go to Account'
  var link = '/user/'+id
    const finduser = user.filter(function(value){
      return value.token===localStorage.user
     
    })
    const [tong,settong]=useState(0)
    useEffect(()=>{
if(finduser.length>0){
  const findcart=cart.filter(function(value){
    return (value.userid===finduser[0]._id) 
  }) 
   if(findcart.length>0){
     var d=0;
    for(var i=0;i<findcart.length;i++){
      if(findcart[i].check==='addcart'){
        d=parseInt(d)+(parseInt(findcart[i].giasanpham)*parseInt(findcart[i].soluong))
      }
    }
   settong(d)
   }
}
    },[finduser[0]])
    
    function chonkichco(e){
        const findsanpham = sanpham.filter(function(value){
          return value._id === e.idsanpham
        })
      if(findsanpham.length>0)
        {
          const z=findsanpham[0].kichco.split(',')
        return(
          <select onChange={(y)=>changekichco(y.target.value, e)} defaultValue = {e.kichco}>
            {z.map((value,index)=>(
              <option key={index}>{value}</option>
            ))}
          </select>
        )
        }
      }
      function deletecartz(e){
        dispatch(deletecart(e))
         setdeleteok('ok')
         window.scrollTo({
          top:0,
          left:0,
          behavior:'smooth'
        })
       }
       function back(){
         window.location.reload()
       }
       
       if(deleteok==='ok'){
        var go = 'Go to Account'
        var link = '/user/'+id
        return(
          <div>
          <nav className="nav-bar nav-user">
            <div className="nav-small">
      <span className="nav-item" href="#">Hello,{localStorage.useri}</span>
              <div className="nav-item disable">
                <svg width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
                <span className="an">|</span>
               
                <a className='nav-item1' href={link}>{go}</a>
                <span className="an">|</span>
            <span  className='nav-item' onClick={out}>Log Out</span>
              </div>
            </div></nav> 
          
            <div className="updateuser alluser alluser-i">
              <div className="user-iii user-i">
                
               
             
                <div className='flex '>
                <h4>Check: </h4>
                </div>
                
               <div className='giua'>
               <h3 >Da Xoa</h3>
                <Link onClick={()=>window.location.reload()} className='link' to={'/cart/'+localStorage.useri}><button>Back To Cart</button></Link>
               </div>
               
               
              </div>
            </div>
            
          </div>
        
      )
       }
       function buyall(e){
         if(e.length>0){
          const findaddcart = e.filter(function(value){
            return(value.check==='addcart')
          })
          if(findaddcart.length>0){
            setchuyenbuyall(finduser[0]._id)
          }
         }
 
       }
      if(chuyenbuyall!==''){
        return(
          <Redirect to={'/buyi/'+chuyenbuyall}/>
        )
      }
       function showsanpham(e){
         setsanphami(e.idsanpham)
       }
       if(sanphami!==''){
         return(
           <Redirect to={'/sanphami/'+sanphami}/>
         )
       }
       function buy(e){
         var newsl,newms,newkc
        if(newsoluong===''){
          newsl=e.soluong
        }else{
          newsl=newsoluong
        }
        if(newmausac===''){
          newms=e.mausac
        }else{
          newms=newmausac
        }
        if(newkichco===''){
          newkc=e.kichco
        }else{
          newkc=newkichco
        }
      
      const buyz = {
       newsoluong:newsl,
       newmausac:newms,
       newkichco:newkc,
       id:e._id,
       userid:e.userid,
       
      }
      dispatch(updatecartitem(buyz))
      setbuyi(e._id)
       }
       if(buyi!==''){
         return(
          <Redirect to={'/buyi/'+buyi}/>
         )
       }
       function changesoluong(e, v){
        if(e!==''){
          if(e===''){
            setnewsoluong(v.soluong)
           }else{
             setnewsoluong(e)
             const soluong ={
              id:v._id,
              newsoluong:e,
              newkichco:v.kichco,
              newmausac:v.mausac,
              userid:v.userid
            }
           dispatch(updatecartitem(soluong))
             var cu = (parseInt(v.soluong)*parseInt(v.giasanpham))
             
             var moi = (parseInt(e)*parseInt(v.giasanpham))

             const findcart=cart.filter(function(value){
              return (value.userid===finduser[0]._id) 
            }) 
             var d=0;
             for(var i=0;i<findcart.length;i++){
               if(findcart[i].check==='addcart'){
                 d=parseInt(d)+(parseInt(findcart[i].giasanpham)*parseInt(findcart[i].soluong))
               }
             }
             var newmoi = parseInt(d)-parseInt(cu)+parseInt(moi)
             settong(newmoi)
            
           }
        }else{
          setmess('vui long nhap so luong')
            setTimeout(() => {
                setmess('')
            }, 3000);
            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            })
        }
      
       }
       function changemausac(e, v){
        if(e===''){
          setnewmausac(v.mausac)
         }else{
           setnewmausac(e)
           const mausac ={
            id:v._id,
            newsoluong:v.soluong,
            newkichco:v.kichco,
            newmausac:e,
            userid:v.userid
          }
         dispatch(updatecartitem(mausac))
         }
       
       }
       function changekichco(e, v){
        if(e===''){
          setnewkichco(v.kichco)
         }else{
           setnewkichco(e)
           const kichco ={
            id:v._id,
            newsoluong:v.soluong,
            newkichco:e,
            newmausac:v.mausac,
            userid:v.userid
          }
         dispatch(updatecartitem(kichco))
         }
         
       }
      function chonmausac(e){
        const findsanpham = sanpham.filter(function(value){
          return value._id === e.idsanpham
        })
      if(findsanpham.length>0)
        {
          const z=findsanpham[0].mausac.split(',')
        return(
          <select onChange={(y)=>changemausac(y.target.value, e)} defaultValue = {e.mausac}>
            {z.map((value,index)=>(
              <option key={index}>{value}</option>
            ))}
          </select>
        )
        }
      }
if(finduser.length>0){
    if(id!==finduser[0].username){
        return(
            <Redirect to='/p404'/>
        )
    }
    const findcart=cart.filter(function(value){
        return value.userid===finduser[0]._id
      })
      function dit(e){
      
         
           if(e.length>0){
          
            
            return(
              
                <div className='add-cart'>
                  <table className='table-cart'>
            <tbody><tr>
              <th></th>
                <th>san pham</th>
                <th>gia </th>
                <th>so luong</th>
                <th>mau sac</th>
                <th>kich co</th>
                <th></th>
                <th></th>
              </tr>
             
              {e.map((value,index)=>{
               
               
                var soluong;
                var img;
                var tensanpham;
                var giasanpham;
                var mausac;
                var kichco;
          
             if(value.img===[]){
               img='none'
             }else{
               img=value.img[0]
             }
          
             if(value.tensanpham===undefined){
               tensanpham='none'
             }else{
               tensanpham=value.tensanpham
             }
             if(value.giasanpham===undefined){
               giasanpham=0
             }else{
               giasanpham=value.giasanpham
             }
             if(value.soluong===undefined){
               soluong=0
             }else{
               soluong=value.soluong
             }
             
             if(value.kichco===undefined){
               kichco='none'
             }else{
               kichco=value.kichco
             }
             
             if(value.check==='addcart')
    
                {
                  return( <tr  key={index}>
                  <td onClick={(e)=>showsanpham(value)} className='poiner' className='td-img'><img className='cart-img' src={img}/></td>
     <td onClick={(e)=>showsanpham(value)} className='poiner' >{tensanpham}</td>
     <td className='poiner'>{giasanpham}</td>
     <td className='soluongi'>
     <input onChange={(e)=>(changesoluong(e.target.value, value))} className='soluong' type='text' defaultValue={soluong}/>
      
     </td>
     <td className='soluongi'>
    { chonmausac(value)}
      
     </td>
     <td className='soluongi'>
     {chonkichco(value)}
      
     </td>
     <td className='cart-delete'><p onClick={()=>deletecartz(value._id)}>delete</p></td>
     <td className='cart-buy'><p onClick={()=>buy(value)}>buy</p></td>
                 </tr>)}
                   
                 
                 
                })}
              
             
            </tbody></table>
            <div className='tong'>
              <p><b>Tong:</b> {tong}Vnd</p>
    
              <button onClick={()=>buyall(findcart)} className='buy'>Buy All</button>
            </div>
                </div>
    
                
             
            )
           }else{
             return(
               
              <div className='add-cart'>
              <table className='table-cart'>
        <tbody><tr>
          <th></th>
            <th>san pham</th>
            <th>gia </th>
            <th>so luong</th>
            <th>mau sac</th>
            <th>kich co</th>
            <th></th>
            <th></th>
          </tr>
        </tbody></table>
        <div className='tong'>
          <p><b>Tong:</b> {tong}Vnd</p>
          <button onClick={()=>buyall(findcart)} className='buy'>Buy All</button>
        </div>
            </div>
             )
           }
        
      }

      return(
        <div>
          <nav className="nav-bar nav-user">
          <div className="nav-small">
       <span className="nav-item">Hello,{id}</span>
            <div className="nav-item">
              <svg className="svguser nav-item1" width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
              <span className="an">|</span>
              
              <a className='nav-item1' href={link}>{go}</a>
              <span className="an">|</span>
              <span className='out' onClick={out}>Log Out</span>
            </div>
          </div></nav> 
          <div className="alluser-i alluser">
            <div className="user-i user-ii">
           
            <div className='flex'>
            <h4>My Account</h4>
            
            
              </div>
           <div className='mess'>{mess}</div>
           <div className="add-cart-item">
              
        
             
                {dit(findcart)}
              
             
           
                 
                
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

export default Cart