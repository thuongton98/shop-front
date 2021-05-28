import React from 'react'

import {useParams,Redirect,NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUser,updateimg,deleteuser} from '../actions/getActions'
import {useState,useEffect,useMemo} from 'react'
import Footer from '../components/footer'
import { useGoogleLogout } from 'react-google-login'

function Admin(){
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
  const axios = require('axios');
 
  
  const [file,setfile]=useState('')

  const [newvalue,setnewvalue]=useState('5')
  const dispatch=useDispatch()
 
 
    useEffect(()=>{
       dispatch(fetchUser())
      
    
  
  
    },[dispatch])
    const user = useSelector(state=>state.gets.users)
    
   
  
    const finduser = user.filter(function(value){
        return value.token===localStorage.user
      
      })
     
      const [value,setvalue]=useState('5')
      const [images,setimages]=useState('')
     useEffect(()=>{
       if(finduser.length>0){
          setimages(finduser[0].img)
       }
     },[finduser[0]])  

    
     const [number,setnumber]=useState([])
     const [luiz,setluiz]=useState('none')
     const [tiepz,settiepz]=useState('')
  

    
     const [option,setoption]=useState([])
     function optionx(e){
      var op=[]
      var arraycu=[]
      for(var ii=0;ii<user.length;ii++){
        if(user[ii].nguoidung!=='admin'){
          arraycu.push(user[ii])
        }
      }
     if(arraycu.length>0){
      for(var k=1;k<=Math.ceil(arraycu.length/Number(value));k++){
           
        op.push(k)
        
           }
           setoption(op)
           if(op.length<2){
  
            settiepz('none')
          }else{
            settiepz('block')
          }
     }
     }
useEffect(()=>{
  optionx(user)
 
 if(user.length>0){
  const z1=[]

  var arraycu=[]
  for(var ii=0;ii<user.length;ii++){
    if(user[ii].nguoidung!=='admin'){
      arraycu.push(user[ii])
    }
  }

if(arraycu.length>0)
{ for(var j=1;j<=Math.ceil(arraycu.length/Number(value));j++){
 var n=j*Number(value)
 
z1.push(n)

  }

  setnumber(z1)}
 }
 
},[user])
       
       
       const [array,setarray]=useState([])
  
     
      useEffect(()=>{
        const z=[]
        if(user.length>0){
        
         var l;
         for(var i=0;i<6;i++){
          
          if(user[i]!==undefined){
            if(user.length===1){
              z.push(user[i])
            }else{
             l=user[i]
             if(user[i].nguoidung==='admin'){
               l=user[i+1];
               i++;
             }
         
            z.push(l)
            }
           
          }
         
        }
        }
       
        setarray(z)
      },[user])
      
       
       function ok(e){


        if(option.length>1){
         if(parseInt(e.target.value)!==parseInt(option[0]-1)){
           setluiz('')
         }else{
           setluiz('none')
         }
         
        }
       
        if(parseInt(e.target.value)===parseInt(option[option.length-1]-1)){
         settiepz('none')
         }else{
           settiepz('')
         }
       
        var target=e.target
       var arraycu=[]
       for(var ii=0;ii<user.length;ii++){
         if(user[ii].nguoidung!=='admin'){
           arraycu.push(user[ii])
         }
       }
         var newarray=[]
        var c=target.value*Number(value)
       
        if(arraycu.length>0){
          for(var i=0;i<value;i++){
       
          
            if(arraycu[i+Number(c)]!==undefined){
             newarray.push(arraycu[i+Number(c)])
             }
             
               
              
            
          
           }
        }
        setarray(newarray)
        setnewvalue((parseInt(e.target.value)+1)*parseInt(value))
       }
       
       function lui(){
       
         var newarray=[]
        
        settiepz('')
        var z = parseInt(newvalue)-parseInt(value)
       
       setnewvalue(z)
       
       for(var i=0;i<value;i++){
         if(user[(parseInt(z)-1)-i].nguoidung!=='admin')
       newarray.push(user[(parseInt(z)-1)-i])
       }
       
        var newarray1=[]
       for(var j=newarray.length-1;j>=0;j--){
         newarray1.push(newarray[j])
       }
       const find = user.filter(function(value){
         return value.nguoidung !== 'admin'
       })
       if(newarray1[0]===find[0]){
         setluiz('none')
       }
       setarray(newarray1)
       
       }
       
       
       function tiep(){
       
       var newarray=[]
       
       setluiz('')
       
       
         for(var i=0;i<value;i++){
           if(user[parseInt(newvalue)+i]!==undefined){
       newarray.push(user[parseInt(newvalue)+i])
       var z=parseInt(newvalue)+parseInt(value)
        setnewvalue(z)
           }
         }
       setarray(newarray)
       
       
       if(newarray[newarray.length-1]===user[user.length-1]){
         settiepz('none')
       }
       
       
          
       
       }
        
       
           function uploadz(e) {
             e.preventDefault();
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
                           axios.post('https://thuongton.net/api/user/images/add', formData, config).then(res => {
                                 var z;
                               let filePath = res.data.fileNameInServer
                               for(var i=0;i<filePath.length;i++)
         {if(filePath[i]==='/'&&filePath[i+1]==='/'){
           
                                 //tren window xoa \\
                                 z = filePath.split('\\')[1]
                             
         }else{
           //tren linux xoa /
           z=filePath.split('/')[1]
         }
              }                 const fileimage='https://thuongton.net/api/user/images/'+z
                             setimages(fileimage)
               const up = {
                 img:fileimage,
                 id:localStorage.user
               }
              
                              dispatch(updateimg(up)) 
               
                       })
               
               
             }
           }
           
        function xoa(x){
          dispatch(deleteuser(x))
       var newarray=[]
       var z;
       user.find(function(value, index){
       
         if(value._id===x){
          
           
         z=user.indexOf(value)
         }
       })
       user.splice(z, 1);
       for(var i=0;i<value;i++){
         if(user[(parseInt(newvalue)-parseInt(value))+i]!==undefined&&user[(parseInt(newvalue)-parseInt(value))+i].nguoidung!=='admin'){
           newarray.push(user[(parseInt(newvalue)-parseInt(value))+i])
         }
       }
       setarray(newarray)
       
        }
        function change(e){
          e.preventDefault()
        setluiz('none')
          if (typeof user !== "undefined" && user !== null && user.length !== null && user.length > 0) {
            const z=[]
            
           var arraycu=[]
           for(var ii=0;ii<user.length;ii++){
             if(user[ii].nguoidung!=='admin'){
               arraycu.push(user[ii])
             }
           }
         var num;
          if(e.target.value>arraycu.length){
            num=arraycu.length
          }else{
            num=e.target.value
          }
          
          if(arraycu.length>0){
           
            for(var i=0;i<parseInt(num);i++){
             
                z.push(arraycu[i])
              
          
             
            }
            if(parseInt(num)===arraycu.length){
              settiepz('none')
            }else{
              settiepz('block')
            }
            setarray(z)
          
            setvalue(num)
            setnewvalue(num)
            var op=[]
          for(var k=1;k<=Math.ceil(arraycu.length/parseInt(num));k++){
               
            op.push(k)
             
               }
               setoption(op)
            }
          }
           
         
        
          
        }
   
       if(finduser.length>0){
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
          <div className="user admin">
            <div className="avatar" href="/soon">
              <img className='img' src={images} alt="avatar"/>
           
            <form>
          <input type="file" id="myFile" onChange={(e)=>{setfile(e.target.files[0])}} name="filename" />
          <input type="submit" onClick={uploadz}/>
        </form>
   
            </div>
            <div className="alluser alluser-i">
              <div className="user-iii user-i">
                
                
             
              <div className='flex'> <h4>List User</h4>
              <select className='choose' style={{float: 'right'}} onClick={change}>
                    {
                      number.map((num,index)=>{
                   
                        return(
                         
                           
                                 
          <option key={index} value={num} >{num}</option>
         
                         
  
                         
                        )
                      })
                    }
                   </select></div>
                <table>
                  <tbody><tr>
                  <th>Username</th>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                      <th>Age</th>
                      <th>Loai Nguoi Dung</th>
                      <th>Check</th>
                      <th>List San Pham</th>
                      <th>Alert</th>
                    </tr>
                    {array.map((value,index)=>{
                    
                      var check;
                      
                      if(value.active===undefined){
                       check='no thing'
                       
                      
                     }else{
                      check=value.active
                     }
                     
                     var type;
                     if(value.type===undefined){
                      type='no thing'
                       
                     }else{
                      type=value.type
                     }
                     
                     var username;
                     if(value.username===undefined){
                       username='no thing'
                       
                     }else{
                      username=value.username
                     }
                     
                     var fname;
                     if(value.fname===undefined){
                      fname='no thing'
                       
                     }else{
                      fname=value.fname
                     }
                     
                     var lname;
                     if(lname===undefined){
                       lname='no thing'
                      
                     }else{
                      lname=value.lname
                     }
                     
                     var email;
                     if(value.email===undefined){
                      email='no thing'
                      
                     }else{
                      email=value.email
                     }
                     
                     var bird;
                     if(value.bird===undefined){
                       bird='no thing'
                       
                     }else{
                      bird=value.bird
                     }
                     
                     return(
                      <tr key={index}>
                      <td>{username}</td>
                    <td>{fname}</td>
                    <td>{lname}</td>
                    <td>{email}</td>
                    <td>{bird}</td>
                    <td>{type}</td>
                   <td>{check}</td>
                    <td>comming soon</td>
                    <td>comming soon</td>
                    <td className="adminupdate">
                      <NavLink onClick={()=>{window.scrollTo({top:0,left:0,behavior:'smooth'})}} style={{textDecoration: 'none'}} to={'/updateuser/'+value._id}>Update</NavLink>
                    </td>
                    <td onClick={()=>{xoa(value._id)}} className="admindelete">Delete</td>
                  </tr>
                     )
                    })}
                    
                  </tbody></table>
                <div className="toi-lui">
                  <button className='Lui' className={luiz} onClick={lui} >&lt;</button>
                 {
                   option.map((num,index)=>{
                   return(
                    <button onClick={ok} value={index} key={index}>{num}</button>
                   )
                   })
                 }
                 
                  <button className='Tiep' className={tiepz} onClick={tiep}>&gt;</button>
  
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

export default Admin