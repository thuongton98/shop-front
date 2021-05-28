import React from 'react'

import {useParams,Redirect,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchsanpham,fetchUser,fetchcart,buyitem,updatecartitem,changemagiamgiaz} from '../actions/getActions'
import {useState,useEffect} from 'react'
import Footer from '../components/footer'
import { useGoogleLogout } from 'react-google-login'

function Buyi(){
    var go = 'Go to Account'
    var link = '/user/'+localStorage.useri
    const dispatch=useDispatch()
   
    useEffect(()=>{
        dispatch(fetchUser())
        dispatch(fetchcart())
        dispatch(fetchsanpham())
     },[dispatch])
    
     const user = useSelector(state=>state.gets.users)
     const cart = useSelector(state=>state.gets.carts)
     const sanpham = useSelector(state=>state.gets.sanphams)
     let {id} = useParams();

     const [newsoluong,setnewsoluong]=useState('')
     const [newmausac,setnewmausac]=useState('')
     const [newkichco,setnewkichco]=useState('')
     const [newmagiamgia,setnewmagiamgia]=useState('')
     const [backtocart,setbacktocart]=useState('')
     const [sanphami,setsanphami]=useState('')
     const [giasanpham,setgiasanpham]=useState('')
     const [gopfind,setgopfind]=useState('')
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
      const finduser = user.filter(function(value){
        return value.token===localStorage.user
       
      })
      const [tong,settong]=useState(0)
      const [mess,setmess]=useState('')
useEffect(()=>{
   if(finduser.length>0){
    const findcart=cart.filter(function(value){
        return (value.userid===finduser[0]._id) && (value._id===id )
      }) 
      const findcartall = cart.filter(function(value){
        return (value.userid===id)
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
       if(findcartall.length>0){
        var d=0;
        for(var i=0;i<findcartall.length;i++){
          if(findcartall[i].check==='addcart'){
            d=parseInt(d)+(parseInt(findcartall[i].giasanpham)*parseInt(findcartall[i].soluong))
          }
        }
       settong(d)
       }
       
   }
},[finduser[0]])
const findcart=cart.filter(function(value){
  if(finduser.length>0){
    return (value.userid===finduser[0]._id) && (value._id===id )
  }
}) 
const findcartall = cart.filter(function(value){
  if(finduser.length){
    return (value.userid===id)
  }
}) 
useEffect(()=>{
if(findcart.length>0){
  setgopfind(findcart)
}else{
  setgopfind(findcartall)
}
},[findcart[0]],[findcartall[0]])
      function showsanpham(e){
        setsanphami(e.idsanpham)
      }
      if(sanphami!==''){
        return(
          <Redirect to={'/sanphami/'+sanphami}/>
        )
      }
      function changesoluong(e, v){
        if(e!==''){
            var sl;
            if(e===''){
              sl=v.soluong
            }else{
              sl=e
            }
            var cu = (parseInt(v.soluong)*parseInt(v.giasanpham))
             
            var moi = (parseInt(e)*parseInt(v.giasanpham))

            const findcart=cart.filter(function(value){
                return (value.userid===finduser[0]._id) && (value._id===id )
              }) 
              const findcartall = cart.filter(function(value){
                return (value.userid===id)
              }) 
               if(findcart.length>0){
                var d=0;
                for(var i=0;i<findcart.length;i++){
                  if(findcart[i].check==='addcart'){
                    d=parseInt(d)+(parseInt(findcart[i].giasanpham)*parseInt(findcart[i].soluong))
                  }
                }
                var newmoi=parseInt(d)-parseInt(cu)+parseInt(moi)
               settong(newmoi)
               }
               if(findcartall.length>0){
                var d=0;
                for(var i=0;i<findcartall.length;i++){
                  if(findcartall[i].check==='addcart'){
                    d=parseInt(d)+(parseInt(findcartall[i].giasanpham)*parseInt(findcartall[i].soluong))
                  }
                }
                var newmoi=parseInt(d)-parseInt(cu)+parseInt(moi)
                settong(newmoi)
               }
           
            const soluong ={
              id:v._id,
              newsoluong:sl,
              newkichco:v.kichco,
              newmausac:v.mausac,
              userid:v.userid
            }
           dispatch(updatecartitem(soluong))
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
      function changemagiamgia(e, v){
        var mgg;
        if(e===''){
         mgg=v.magiamgia
        }else{
         mgg=e
        }
     const ma ={
       id:v._id,
       userid:v.userid,
       newmagiamgia:mgg
     }
     dispatch(changemagiamgiaz(ma))
      }
      function changemausac(e, v){
        var ms;
        if(e===''){
          ms=v.mausac
        }else{
          ms=e
        }
       const mausac ={
         id:v._id,
         newsoluong:v.soluong,
         newkichco:v.kichco,
         newmausac:ms,
         userid:v.userid
       }
      dispatch(updatecartitem(mausac))
       }
       function changekichco(e, v){
         var kc;
        if(e===''){
          kc=v.kichco
        }else{
          kc=e
        }

       const kichco ={
         id:v._id,
         newsoluong:v.soluong,
         newkichco:kc,
         newmausac:v.mausac,
         userid:v.userid
       }
      dispatch(updatecartitem(kichco))
         
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

      function buy(e){
       for(var i=0;i<e.length;i++){
        var newsl,newms,newkc
        if(newsoluong===''){
          newsl=e[i].soluong
        }else{
          newsl=newsoluong
        }
        if(newmausac===''){
          newms=e[i].mausac
        }else{
          newms=newmausac
        }
        if(newkichco===''){
          newkc=e[i].kichco
        }else{
          newkc=newkichco
        }
      
      const buyz = {
       newsoluong:newsl,
       newmausac:newms,
       newkichco:newkc,
       id:e[i]._id,
       userid:e[i].userid,
       check:'choxuly'
      }
      dispatch(buyitem(buyz))
      
       }
       setbacktocart('ok')
      }
      if(backtocart==='ok'){
       return(
       <div>
          <nav className="nav-bar nav-user">
        <div className="nav-small">
     <span className="nav-item">Hello,{localStorage.useri}</span>
          <div className="nav-item">
            <svg className="svguser nav-item1" width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
          
            <span className="an">|</span>
            <a className='nav-item1' href={link}>{go}</a>
            <span className="an">|</span>
            <span className='out' onClick={out}>Log Out</span>
          </div>
        </div></nav>
        <div className="alluser">
          
        <div className="p404">
          <h1>ok </h1>
          <p> check sp in history </p>
          <a href={'/cart/'+localStorage.useri} className="button">back to cart</a>
          
        </div>
      </div>
       </div>
       )
      }
      if(finduser.length>0){
         
     

      if(findcart.length>0||findcartall.length>0){
       
        {
          
      if(gopfind.length>0){
        
        return(
         
   
         
          <div>
             <nav className="nav-bar nav-user">
    <div className="nav-small">
 <span className="nav-item">Hello,{localStorage.useri}</span>
      <div className="nav-item">
        <svg className="svguser nav-item1" width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
        <span className="an">|</span>
        <a className='nav-item1' href={'/cart/'+localStorage.useri}>Go To Cart </a>

        <span className="an">|</span>
        <span className='out' onClick={out}>Log Out</span>
      </div>
    </div></nav>
    <div className="alluser-i alluser">
<div className="user-i user-ii">

<div className='flex'>
<h4>Thanh Toan</h4>


  </div>
  <div className='mess'>{mess}</div>
<div className="add-cart-item">
  

<table className='table-cart'>
<tbody><tr>
  <th></th>

    <th>san pham :</th>
    <th>so luong :</th>
    <th>mau sac :</th>
    <th>kich co :</th>
    <th>magiamgia :</th>
    <th>gia :</th>
  
  </tr>
  {gopfind.map((value,index)=>{
     if(value.check==='addcart'){
     
      
   return(
     <tr key={index} className='tr-buyi'>
     <td onClick={(e)=>showsanpham(value)} className='poiner td-img' ><img className='cart-img' src={value.img[0]} alt='none'/></td>
     <td onClick={(e)=>showsanpham(value)} className='poiner' >{value.tensanpham}</td>
     <td className='soluongi'>
 <input onChange={(e)=>(changesoluong(e.target.value, value))} className='soluong' type='text' defaultValue={value.soluong}/>
 
 </td>
 <td className='soluongi'>
 { chonmausac(value)}
 
 </td>
 <td className='soluongi'>
 {chonkichco(value)}
 
 </td>
 <td className='soluongi'>
 <input onChange={(e)=>(changemagiamgia(e.target.value, value))} className='soluong' type='text' defaultValue={value.magiamgia}/>
 
 </td>
     <td className='poiner' >{value.giasanpham}vnd</td>
   </tr>
   )
     }
  })}
  </tbody>
  </table>
  <div className='tong'>
<p><b>Tong:</b> {tong}Vnd</p>
<button onClick={()=>buy(gopfind)} className='buy'>Buy</button>
</div>
 
<Link className='link' to={'/cart/'+localStorage.useri}><button className='button'>Back To Cart</button></Link>
     
    
</div>
</div>
</div>
          </div>
        )
      }
        }
      }else{
         return(
             <Redirect to='/p404'/>
         )
     }
      }

return(
    <div> 
  <nav className="nav-bar nav-user">
              <div className="nav-small">
           <span className="nav-item">Hello,{localStorage.useri}</span>
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

export default Buyi