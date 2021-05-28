import React from 'react'
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {changecheck,fetchcart,fetchuser,fetchsanpham,fetchshop,addsanpham,updatesanpham,deletesanpham} from '../actions/getActions'
import {Redirect,useParams} from 'react-router-dom'
import { useGoogleLogout } from 'react-google-login'



function Shop(){
  
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
    const axios = require('axios');
    useEffect(()=>{
        dispatch(fetchuser())
        dispatch(fetchshop())
        dispatch(fetchsanpham())
        dispatch(fetchcart())
    },[dispatch])
const [addsp,setaddsp]=useState('none')
    const user = useSelector(state=>state.gets.users)
    const shop = useSelector(state=>state.gets.shops)
    const sanpham = useSelector(state=>state.gets.sanphams)
    const cart = useSelector(state=>state.gets.carts)
const [none,setnone]=useState()
    const finduser = user.filter(function(value){
        return value._id === id
    })
    const findnouser = user.filter(function(value){
        return value._id !== id
    })
    const findshop = shop.filter(function(value){
        return value.userid === id
    })
    var findsanpham = sanpham.filter(function(value){
        return value.userid ===id
    })
   const findcart = cart.filter(function(value){
     if(findshop.length>0){
      return value.tenshop === findshop[0].tenshop
     }
   })
var an = 'user-i user-ii none'
if(findcart.length>0){
  an = 'user-i user-ii'
}
    
const [edit,setedit]=useState('none')
   var go;
    var link;
    const [sanphami,setsanphami]=useState('')
   
    const [mau,setmau]=useState('')
function open(e){
  setaddsp('block')
  setnone('none')
}
function close(e){
  setaddsp('none')
  setnone('block')
  setedit('none')

}
function chinhsua(e){
  setchuyenpage(e._id)
}
function editz(e){
  setedit('block')
  setnone('none')
 const tim = sanpham.filter(function(value){
   return value._id===e
 })
 setsanphami(tim)
}
function mausac(e){

  const t=e.split(',')

  
     
   return ( 
     <div>
       <p>mau sac: {t.map((x,index)=> (<span key={index}>{x}, </span>))}</p>
       
     </div>
     )
     
   
 

 
}




const [edittensanphamz,setedittensanphamz]=useState('')
const [editloaisanphamz,seteditloaisanphamz]=useState('')
const [editgiasanphamz,seteditgiasanphamz]=useState('')
const [editmagiamgiaz,seteditmagiamgiaz]=useState('')
const [editmausacz,seteditmausacz]=useState('')
const [editkichcoz,seteditkichcoz]=useState('')
const [editsoluongz,seteditsoluongz]=useState('')
const [chuyenpage,setchuyenpage]=useState('')


const [addtensanphamz,setaddtensanpham]=useState('')
const [addloaisanphamz,setaddloaisanpham]=useState('giay')
const [addgiasanphamz,setaddgiasanpham]=useState('')
const [addmagiamgiaz,setaddmagiamgia]=useState('no')
const [addmausacz,setaddmausac]=useState('')
const [addkichcoz,setaddkichco]=useState('')
const [addsoluongz,setaddsoluong]=useState('')

const [messadd,setmessadd]=useState('')
const [messadd1,setmessadd1]=useState('')
const [messadd2,setmessadd2]=useState('')
const [messadd3,setmessadd3]=useState('')
const [messadd4,setmessadd4]=useState('')
const [messadd5,setmessadd5]=useState('')

const [ok,setok]=useState('')

function submitadd(e){
  e.preventDefault();


if(addtensanphamz===''){
  setmessadd('nhap ten san pham')
  setTimeout(() => {
    setmessadd('')
  }, 3000);
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}
if(addgiasanphamz===''){
  setmessadd1('nhap gia san pham')
  setTimeout(() => {
    setmessadd1('')
  }, 3000);
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}
if(addmausacz===''){

  setmessadd2('nhap mau sac')
  setTimeout(() => {
    setmessadd2('')
  }, 3000);
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}else{
  var n = ','
  var str = addmausacz.search(n)

  if(str<0){
    setmessadd2('loi, nhap lai: mau1,...')
    setTimeout(() => {
      setmessadd2('')
    }, 3000);
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }else{
    setmessadd2('')
  }
}
if(addkichcoz===''){
  setmessadd3('nhap kich co')
  setTimeout(() => {
    setmessadd3('')
  }, 3000);
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}else{
  var n = ','
  var str = addkichcoz.search(n)

  if(str<0){
    setmessadd3('loi, nhap lai: kichco1,...')
    setTimeout(() => {
      setmessadd3('')
    }, 3000);
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }else{
    setmessadd3('')
  }
}
if(addsoluongz===''){
  setmessadd4('nhap so luong')
  setTimeout(() => {
    setmessadd4('')
  }, 3000);
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}else{
  setmessadd4('')
}
if(anhnhieu.length<1){
  setmessadd5('add anh')
  setTimeout(() => {
    setmessadd5('')
  }, 3000);
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}
if(anhnhieu.length>0&&addtensanphamz!==''&&addgiasanphamz!==''&&addmausacz!==''&&addkichcoz!==''&&addsoluongz!=='')
 { const add = { 
    userid:id,
    img:anhnhieu,
 tenshop:findshop[0].tenshop,
 loaisanpham:addloaisanphamz,
  tensanpham:addtensanphamz,
    
    giasanpham:addgiasanphamz,
    danhgia:'no',
    magiamgia:addmagiamgiaz,
    mausac:addmausacz,
    kichco:addkichcoz,
    soluong:addsoluongz
  }
  dispatch(addsanpham(add))
 window.scrollTo({
   top:0,
   left:0,
   behavior:'smooth'
 })
  setok('ok')
}else{setok('')}
}
const [ananh,setananh]=useState('kananh')

const [file,setfile]=useState([])
const [anhnhieu,setanhnhieu]=useState([])
const [hienanh,sethienanh]=useState([])
const [anh1,setanh1]=useState([])
const [deletechuyen,setdeletechuyen]=useState('')
function filev(e){
  
  setfile(e.target.files[0])

}
function xoaanh(e){
  setanh1('')
}
function xoaanhnhieu(e){
 
  var g=[]
  g =anhnhieu.splice(e,1)
  
 
  setanh1('')
  const z=( 
    
    anhnhieu.map((value,index)=>(
      <div key={index}>
        <img src={value} alt="Flowers in Chania" width={300} height={245} />
      <button onClick={(e)=>{xoaanhnhieu(value)}} className='xoaanh'>x</button>
      </div>
    ))
  )
sethienanh(
  z
)
}
function uploadz(e){
  if(file==''){
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
                axios.post('https://thuongton.net/api/user/imgsanpham/add', formData, config).then(res => {
                    var z;
    var anh=anhnhieu;
                    let filePath = res.data.fileNameInServer
                    for(var i=0;i<filePath.length;i++)
    if(filePath[i]==='/'&&filePath[i+1]==='/'){
      
                            //tren window xoa \\
                            z = filePath.split('\\')[1]
                        
    }else{
      //tren linux xoa /
      z=filePath.split('/')[1]
    }
                 const hinhanh= 'https://thuongton.net/api/user/imgsanpham/'+z
    


    const z1 = ()=>(
      <div>
        <img src={hinhanh} className={ananh} alt="Flowers in Chania" width={300} height={245} />
      <button onClick={(e)=>{xoaanh(hinhanh)}} className='xoaanh'>x</button>
      </div>
    )
   setanh1(z1)
    anh.push(hinhanh)
    setanhnhieu(anh)
    
            })
    
    
  }

    const z=( 
    
      anhnhieu.map((value,index)=>(
        <div key={index}>
          <img src={value} alt="Flowers in Chania" width={300} height={245} />
        <button onClick={(e)=>{xoaanhnhieu(value)}} className='xoaanh'>x</button>
        </div>
      ))
    )
  sethienanh(
    z
  )

}

function submitedit(e){

  var editmagiamgia;
  var edittensanpham;
  var editloaisanpham;
  var editgiasanpham;
  var editmausac;
  var editkichco;
  var editsoluong;
  
if(editmagiamgiaz===''){
  editmagiamgia = 'no'
}else{
  editmagiamgia = e.magiamgia
}
  if(edittensanphamz===''){
     edittensanpham = e.tensanpham
    
 
  }else{
    edittensanpham = edittensanphamz
  }
   if(editloaisanphamz===''){
     editloaisanpham = e.loaisanpham
    
 
  }else{
    editloaisanpham = editloaisanphamz
  }

  if(editgiasanphamz===''){
    editgiasanpham = e.giasanpham
   

 }else{
   editgiasanpham = editgiasanphamz
 }

 if(editmausacz===''){
  editmausac = e.mausac
 

}else{
 editmausac = editmausacz
}

if(editkichcoz===''){
  editkichco = e.kichco
 

}else{
 editkichco = editkichcoz
}

if(editsoluongz===''){
  editsoluong = e.soluong
 

}else{
 editsoluong = editsoluongz
}

const edit ={
  id:e._id,
  userid:finduser[0]._id,
  edittensanpham,
  editloaisanpham,
  editgiasanpham,
  editmagiamgia,
  editmausac,
  editkichco,
  editsoluong
}


dispatch(updatesanpham(edit))

setchuyenpage(e._id)
}

function checkn(e){

  setedittensanphamz(e)
}
function sanphamo(e){


  if(sanphami[0]!==undefined){
    
    return(
      <div>
         
         <div className="user-item">
     
     <div>
       <span>
         <h5>Ten San Pham moi: </h5>
         <input onChange={(e)=>{checkn(e.target.value)}}  className='input-user1' type="text"  defaultValue={sanphami[0].tensanpham} />

       </span>
      
     </div>
   </div>
   <div className="user-item">
     <div>
       <span>
         <h5>Loai San Pham </h5>
         <select onChange={(e)=>seteditloaisanphamz(e.target.value)} defaultValue={sanphami[0].loaisanpham}>
             <option value='Giay'>Giay</option>
             <option value='Ao'>Ao</option>
             <option value='QUan'>Quan</option>
             <option value='wait'>comming soon</option>
         </select>

       </span>
      
     </div>
   </div>
   <div className="user-item">
     <div>
       <span>
         <h5>Gia San Pham: </h5>
         <input onChange={(e)=>seteditgiasanphamz(e.target.value)} className='input-user1' type="text" defaultValue={sanphami[0].giasanpham} />

       </span>
      
     </div>
   </div>
   <div className="user-item">
     <div>
       <span>
         <h5>Ma Giam Gia: </h5>
         <input onChange={(e)=>seteditmagiamgiaz(e.target.value)} className='input-user1' type="text" defaultValue={sanphami[0].magiamgia} />

       </span>
      
     </div>
   </div>
   <div className="user-item">
     <div>
       <span>
         <h5>Mau Sac: </h5>
         <input onChange={(e)=>seteditmausacz(e.target.value)}  className='input-user1' type="text" defaultValue={sanphami[0].mausac} />

       </span>
      
     </div>
   </div>
   <div className="user-item">
     <div>
       <span>
         <h5>Kich co: </h5>
         <input onChange={(e)=>seteditkichcoz(e.target.value)} className='input-user1' type="text" defaultValue={sanphami[0].kichco} />

       </span>
      
     </div>
   </div>
   <div className="user-item">
     <div>
       <span>
         <h5>So Luong San Pham: </h5>
         <input onChange={(e)=>seteditsoluongz(e.target.value)} className='input-user1' type="text" defaultValue={sanphami[0].soluong} />

       </span>
      
     </div>
   </div>
   <input onClick={(e)=>submitedit(sanphami[0])} className='user-submit' type='submit' />
      </div>
    )
  }
}
function deletez(e){
  dispatch(deletesanpham(e))
  setdeletechuyen('ok')
  
}


const [x,setx]=useState([])

function hienimg(e){
var z=[]

for(var i=0;i<e.length;i++){
  z.push(i+1)
}


 
return(
 
<div>
  <img className='imgchinh' onClick={()=>{chuyenimg(e)}} src={e[0]} alt="" />

  <div className='img'>
  
  </div>

</div>


 
)


}
const [animg,setanimg]=useState('img-n')
const [andi,setandi]=useState('goi-y goi-y-u')
const [l,setl]=useState('')
const [tao,settao]=useState('')
const [newcheck,setnewcheck]=useState('choxuly')
const [updatec,setupdatec]=useState('')
function taoshop(){
  settao('ok')
 
}
if(tao==='ok'){
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
  return(
    <Redirect to={'/newshop/'+finduser[0]._id}/>
  )
 }
function chuyenimg(e){
  
  setx(e)
  setandi('goi-y goi-y-u ananh')
  setl(e[0])
  setanimg('img-n kananh')
}


function hienra(){

if(x!=''){
 
 const tim=x.indexOf(l)
 
var next1='next';
if(tim+1===x.length){
  next1='ananh'
}

var prev1='prev'
if(tim===0){
  prev1='ananh'
}

 function nextz(){
setl(x[tim+1])
prev1='prev'


 }
 function prevz(){
  
   if(tim<0){
prev1='ananh'

  }else{
    setl(x[tim-1])
   prev1='prev'
   next1='next'
  }
 
 }

function closez(){

  setandi('goi-y goi-y-u')
  setanimg('ananh')
  
}
  return(
    <div className={animg}>
      <button className={prev1} onClick={()=>prevz()}>Prev</button>
      <img className='img-hienra' src={l} alt="" />
      <button className={next1} onClick={()=>nextz()}>Next</button>
      <button className='close' onClick={()=>closez()}>Close</button>
    </div>
  )
}
  
}
function daupdate(e){
  
  window.location.reload()

}

function check(e){
  if(e!==undefined)
{ return(
  <select onChange={(v)=>setnewcheck(v.target.value)} defaultValue={e}>
  <option value='choxuly'>cho xu ly</option>
  <option value='daguishipper'>da gui shipper</option>
  <option value='danggiao'>dang giao hang</option>
  <option value='dathanhtoan'>da thanh toan</option>
  <option value='huy'>huy</option>
</select>
 )}else{
   return(
     <div>None</div>
   )
 }

}
function updatecheck(e){
  const check = {
    id:e._id,
    userid:e.userid,
    newcheck:newcheck
  }
  dispatch(changecheck(check))
  setupdatec('ok')
}
if(updatec==='ok'){
  window.location.reload();
}
function choxuly(e){
  if(e.length>0){

   return(
    <table className='table-shop'>
    <tbody><tr>
      <th>Username:</th>
      <th></th>
        <th>san pham:</th>
        <th>gia:</th>
        <th>so luong:</th>
        <th>mau sac:</th>
        <th>kich co:</th>
        <th>diachi:</th>
        <th>so dien thoai</th>
        <th>check:</th>
<th></th>
      </tr>
{e.map((value,index)=>{
 
  if(value.check!=='addcart'&&value.check!=='huy'&&value.check!=='dathanhtoan'){
    const finddiachi = user.filter(function(v){
      return v._id === value.userid
    })
    
    var diachi,sdt,ten;
    if(finddiachi[0].username!==undefined){
      ten=finddiachi[0].username
    }else{
      ten='chua cap nhat'
    }
    if(finddiachi[0].diachi!=='no'&&finddiachi[0].diachi!==undefined){
      diachi=finddiachi[0].diachi
    }else{
      diachi='chua cap nhat'
    }
    if(finddiachi[0].sdt!=='no'&&finddiachi[0].sdt!==undefined){
      sdt=finddiachi[0].sdt
    }else{
      sdt='chua cap nhat'
    }
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
         <td className='poiner' >{ten}</td>
         <td className='poiner' className='td-img'><img className='cart-img' src={img}/></td>
   <td className='poiner' >{tensanpham}</td>
   <td className='poiner'>{giasanpham}</td>
   <td className='poiner'>{soluong}</td>
   <td className='poiner'>{mausac}</td>
   <td className='poiner'>{kichco}</td>
   <td className='poiner'>{diachi}</td>
   <td className='poiner'>{sdt}</td>
   <td className='poiner'>{check(value.check)}</td>
   <td className='cart-delete'><p onClick={(e)=>updatecheck(value)}>update check</p></td>
      </tr>
    )
  }
})}
      </tbody></table> 
   )
  }else{
    return(
      <table className='table-shop'>
    <tbody><tr>
      <th>Username:</th>
      <th></th>
        <th>san pham:</th>
        <th>gia:</th>
        <th>so luong:</th>
        <th>mau sac:</th>
        <th>kich co:</th>
        <th>diachi:</th>
        <th>so dien thoai</th>
        <th>check:</th>
<th></th>
</tr>
</tbody>
</table>
    )
  }
}
function lichsu(e){
  const findhuy= cart.filter(function(v){
    return v.check ==='huy'||v.check==='dathanhtoan'
  })
  if(findhuy.length>0){

    return(
     <table className='table-shop'>
     <tbody><tr>
       <th>Username:</th>
       <th></th>
         <th>san pham:</th>
         <th>gia:</th>
         <th>so luong:</th>
         <th>mau sac:</th>
         <th>kich co:</th>
         <th>diachi:</th>
         <th>so dien thoai</th>
         <th>check:</th>

       </tr>
 {e.map((value,index)=>{

   if(value.check==='huy'||value.check==='dathanhtoan'){
     const finddiachi = user.filter(function(v){
       return v._id === value.userid
     })
     
     var diachi,sdt,ten;
     if(finddiachi[0].username!==undefined){
       ten=finddiachi[0].username
     }else{
       ten='chua cap nhat'
     }
     if(finddiachi[0].diachi!=='no'&&finddiachi[0].diachi!==undefined){
       diachi=finddiachi[0].diachi
     }else{
       diachi='chua cap nhat'
     }
     if(finddiachi[0].sdt!=='no'&&finddiachi[0].sdt!==undefined){
       sdt=finddiachi[0].sdt
     }else{
       sdt='chua cap nhat'
     }
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
          <td className='poiner' >{ten}</td>
          <td className='poiner' className='td-img'><img className='cart-img' src={img}/></td>
    <td className='poiner' >{tensanpham}</td>
    <td className='poiner'>{giasanpham}</td>
    <td className='poiner'>{soluong}</td>
    <td className='poiner'>{mausac}</td>
    <td className='poiner'>{kichco}</td>
    <td className='poiner'>{diachi}</td>
    <td className='poiner'>{sdt}</td>
    <td className='poiner'>{value.check}</td>
   
       </tr>
     )
   }
 })}
       </tbody></table> 
    )
   }else{
     return(
       <table className='table-shop'>
     <tbody><tr>
       <th>Username:</th>
       <th></th>
         <th>san pham:</th>
         <th>gia:</th>
         <th>so luong:</th>
         <th>mau sac:</th>
         <th>kich co:</th>
         <th>diachi:</th>
         <th>so dien thoai</th>
         <th>check:</th>

 </tr>
 </tbody>
 </table>
     )
   }
}
function daxoa(e){
 
  window.location.reload()
}
if(deletechuyen==='ok'){
  go='Go Account';
  link='/user/'+finduser[0].username;
    return(
      <div>
        <nav className="nav-bar nav-user">
   <div className="nav-small">
<span className="nav-item">Hello,{finduser[0].username}</span>
     <div className="nav-item andi">
       <svg className="svguser" width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
       <span className="an">|</span>
      
       <a  className='nav-item1' href={link}>{go}</a>
       <span className="an">|</span>
       <span className='out' onClick={out}>Log Out</span>
     </div>
     <span className='out kan' onClick={out}>Log Out</span>
   </div></nav>
      <div className="alluser">
        <div className="p404">
          <h1>Da xoa</h1>
        <button onClick={(e)=>daxoa(e)} className='button'>Back</button>
        </div>
      </div>
      </div>
    )
  
}
   
    if(ok==='ok'){
      go='Go Account';
      link='/user/'+finduser[0].username;
      return(
        <div>
          <nav className="nav-bar nav-user">
   <div className="nav-small">
<span className="nav-item">Hello,{finduser[0].username}</span>
     <div className="nav-item andi">
       <svg className="svguser" width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
       <span className="an">|</span>
     
       <a className='nav-item1' href={link}>{go}</a>
       <span className="an">|</span>
       <span className='out' onClick={out}>Log Out</span>
     </div>
     <span className='out kan' onClick={out}>Log Out</span>
   </div></nav>
   
        <div className="alluser">
          <div className="p404">
            <h1>Da update</h1>
          <button onClick={(e)=>daupdate(e)} className='button'>Back</button>
          </div>
        </div>
        </div>
      )

    }
   if(chuyenpage!==''){
      return(
        <Redirect to={'/shopitem/'+chuyenpage}/>
      )
   }
    if(finduser.length>0){
      
        if(findshop.length>0){
         
            if(sanpham.length<0){
              
                return(
                    <div>add san pham</div>
                )
            }else{
              
        
                go='Go Account';
        link='/user/'+finduser[0].username;
            return(
                <div>
                <nav className="nav-bar nav-user">
   <div className="nav-small">
<span className="nav-item">Hello,{finduser[0].username}</span>
     <div className="nav-item andi">
       <svg className="svguser" width={15} height={11} viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
       <span className="an">|</span>
      
       <a className='nav-item1'  href={link}>{go}</a>
       <span className="an">|</span>
       <span className='out' onClick={out}>Log Out</span>
     </div>
     <span className='out kan' onClick={out}>Log Out</span>
   </div></nav>  
   <div className="user " className={none} >
   <div className="alluser-i alluser">
   <div className="user-i user-ii">
   <div className='flex'>
   <h4>Your Shop:</h4>
   
   </div>
   {hienra()}

   
   <section className={andi}>
   
   <div  className="san-pham">
 {findsanpham.map((e,index)=>{
  
    return(
    

            <div key={index} className="item-g item-gg">
                
              <div>
                <div>
                  <div className="item-i item-ii">
                   
                   {
                      hienimg(e.img)
                   }
                   <div className='item-g-g' onClick={()=>{chinhsua(e)}}>
                   <p>{e.tensanpham}</p>
                    <h5>Gia: {e.giasanpham} (vnd)</h5>
                    <div className='thongtin'>
                    <p>Ma giam gia: {e.magiamgia}</p>
                   {mausac(e.mausac)}
                   <p>Kich co:{e.kichco}</p>
                   <p>So luong:{e.soluong}</p>
                  
                
                    </div>

                   
                   </div>
                   <div className="cart-shop">
                  <button onClick={()=>{editz(e._id)}} className="edit" >Edit</button>
                  <button onClick={()=>{deletez(e._id)}} className="delete" >Delete</button>
                </div> 
                   

                  </div>
                  
                </div>
               
              </div>
              </div>
      
    
    )
 })}

 
            <div className="item-g item-gg item-add">
             <div>
             <div onClick={(e)=>{open(e)}} className='addsanpham'>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
         
                </div>
              </div>
              </div>
              
              </div>
              
      </section>
       
       </div>
       <div className={an}>
       <div className='flex'>
   <h4 className='top-20'>thong tin nguoi mua:</h4>
   
   </div>
   {choxuly(findcart)}
   <div className='flex'>
   <h4 className='top-20'>Lich su:</h4>
   
   </div>
   {lichsu(findcart)}
     
      </div>
       </div>
       
  
       </div>
      
   
       <div className="user " className={addsp} >
   <div className="alluser-i alluser">
   <div className="user-i user-ii">
   <div className='flex'>
   <h4>add San pham </h4>
   <button onClick={(e)=>{close(e)}} className='button'>Close</button>
   </div>
   <div className='mess'>{messadd}</div>
   <div className='mess'>{messadd1}</div>
   <div className='mess'>{messadd2}</div>
   <div className='mess'>{messadd3}</div>
   <div className='mess'>{messadd4}</div>
   <div className='mess'>{messadd5}</div>
   
       <div className="user-item">
            <div>
              <span>
                <h5>upload hinh anh: </h5>
                <input type="file" id="myFile" onChange={(e)=>{filev(e)}} name="filename" />
       <input className='user-submit' type="submit" onClick={uploadz}/>
    <div className='mothang'> {hienanh}
     {anh1}</div>
   
              </span>
             
            </div>
          </div>
   <div className="user-item">
            <div>
              <span>
                <h5>Ten San Pham: </h5>
                <input onChange={(e)=>setaddtensanpham(e.target.value)} className='input-user1' type="text" placeholder='nhap ten san pham'/>
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5>Loai San Pham </h5>
                <select onChange={(e)=>setaddloaisanpham(e.target.value)}>
                    <option value='Giay'>Giay</option>
                    <option value='Ao'>Ao</option>
                    <option value='QUan'>Quan</option>
                    <option value='wait'>comming soon</option>
                </select>
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5>Gia San Pham: </h5>
                <input onChange={(e)=>setaddgiasanpham(e.target.value)} className='input-user1' type="text" placeholder='nhap gia san pham' />
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5>Ma Giam Gia: </h5>
                <input onChange={(e)=>setaddmagiamgia(e.target.value)} className='input-user1' type="text" placeholder='nhap ma giam gia neu co' />
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5>Mau Sac: </h5>
                <input onChange={(e)=>setaddmausac(e.target.value)} className='input-user1' type="text" placeholder='do, vang, cam, ...' />
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5>Kich co: </h5>
                <input onChange={(e)=>setaddkichco(e.target.value)} className='input-user1' type="text" placeholder='size1, size2, ....' />
   
              </span>
             
            </div>
          </div>
          <div className="user-item">
            <div>
              <span>
                <h5>So Luong San Pham: </h5>
                <input onChange={(e)=>setaddsoluong(e.target.value)} className='input-user1' type="text" placeholder='nhap so luong' />
   
              </span>
             
            </div>
          </div>
          <input onClick={(e)=>submitadd(e)} className='user-submit' type='submit' />
       </div>
       </div>
       </div>
       <div className="user " className={edit} >
   <div className="alluser-i alluser">
   <div className="user-i user-ii">
   <div className='flex'>
   <h4>edit San pham </h4>
  
   <button onClick={(e)=>{close(e)}} className='button'>Close</button>
   </div>
  {sanphamo()}
         
       </div>
       </div>
       </div>
       
</div>  

            )
            }
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

export default Shop