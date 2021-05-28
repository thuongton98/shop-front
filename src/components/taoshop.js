import React from 'react'
import {usePrams,Redirect} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {useState,useEffect} from 'react'
import {fetchshop, fetchuser} from '../actions/getActions'
import Footer from '../components/footer'


function Taoshop(){
 


    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchshop())
        dispatch(fetchuser())
    },[dispatch])
    const allshop = useSelector(state=>state.gets.shops)
    const users=useSelector(state=>state.gets.users)
   
  const finduser = users.filter(function(value){
      return value.token===localStorage.user
  })
  const [newz,setnewz]=useState('chua co shop tao Shop ....')
  const [check,setcheck]=useState('')
if(finduser.length>0){
    
    const findshop = allshop.filter(function(value){
        return value.userid===finduser[0]._id
    })

   if(findshop.length>0){
    
       return(
           <Redirect to={'/shopi/'+finduser[0]._id}/>
       )
   }

}
function create(){
    setcheck('ok')
}
if(check==='ok'){
    return(
        <Redirect to={'/newshop/'+finduser[0]._id}/>
    )
}
if(localStorage.user===undefined){
    return(
        <Redirect to='/sign'/>
    )
}
    return(
        <div>
    <div className="alluser">
      <div className="p404">
        <h2>{newz}</h2>
      <button onClick={()=>create()} className='button'>Create</button>
      </div>
    </div>
    <Footer/>
  </div>
    )
}


export default Taoshop