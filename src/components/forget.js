import React from 'react'
import {useParams,Redirect} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUser,forgetpass} from '../actions/getActions'
import {useState,useEffect} from 'react'


function Forget(){
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchUser())
     },[dispatch])
     const user = useSelector(state=>state.gets.users)
const [mess,setmess]=useState('')
     const [email,setemail]=useState('')
     const [redirect,setredirect]=useState('')
     
     function check(e){

         e.preventDefault();
         if(email===''){
           setmess('nhap email')
           window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    setTimeout(() => {
        setmess('')
    }, 3000);
         }
         const finduser = user.filter(function(value){
            return email===value.email
           
          })
         if(finduser.length>0){
             const z={
                 email:email
             }
             dispatch(forgetpass(z))
             setredirect('ok')

         }else{
             setmess('email sai, nhap lai email')
             setTimeout(() => {
                 setmess('')
             }, 3000);
             window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
         }
     }
     if(redirect==='ok'){
        localStorage.newuser='da tao user'
        return(<Redirect to='/checkemail'/>)
     }
return(
    <div className=" alluser">
      <div className="check">
      <div className='mess'>{mess}</div>
         <div className="check-item">
           
           
                <h2>Your Email: </h2>
                <input  onChange={(e)=>{setemail(e.target.value)}}  type="text" />
               
             
             
           
          </div>
          
          <button onClick={(e)=>{check(e)}} className="button">Check</button>
      </div>
      </div>
)


}

export default Forget