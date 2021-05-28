import React from 'react'

import {useParams,Redirect,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUser,fetchsanpham} from '../actions/getActions'
import {useState,useEffect} from 'react'

function Home(){

 
const dispatch = useDispatch()

 useEffect(()=>{
  var slideIndex=0;
dispatch(fetchsanpham())
showSlides();

function showSlides() {

  var slides = document.querySelectorAll('.noneimg')
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display='none'
  }
    slideIndex++;
 
    if (slideIndex > slides.length) {slideIndex = 1}   
   
  if(slides[slideIndex-1]!==undefined){
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex-1].style.zIndex =  "-1"; 
  }
   //2 giay thuc hien lai trong showslides
   
    setTimeout(showSlides, 3000); // Change image every 2 seconds
 
}
var dot=document.querySelectorAll('.dot')

document.onclick=function(e) {
 //quan trong

  var target = (e && e.target) ||(e && e.srcElement);
 

//parentNode kiem tra phai dung dinh dang khong
for(var i=0;i<dot.length;i++){

  

    if (target === dot[i]) {
      var slides = document.querySelectorAll('.noneimg')

  for (var j = 0; j < slides.length; j++) {
   
    if( slides[j].style.display === "block")  {
     
       slides[j].style.display="none";
       
        
       j=dot[i].value
      slides[j].style.display="block";
    
      
      
    }
  }
   
       
    
        break;
    }
   
 
  
  
}
}

var topviewi=document.querySelectorAll('.link-item')
var producttop=document.querySelectorAll('.product-top')




var item=document.querySelectorAll('.item')

var luiz=document.querySelector('.lui')
var tiepz=document.querySelector('.tiep')


  for(var i=0;i<item.length;i++){
    
    if(i>8){
      
  
        item[i].style.display="none";
        luiz.style.display="none"
      
    }

    
  }
 

var itemi=document.querySelectorAll('.product-top-i')
var luiii=document.querySelector('.lui-i')
var tiepii=document.querySelector('.tiep-i')

  for(var j=0;j<itemi.length;j++){
    if(j>5){
      itemi[j].style.display="none"
      luiii.style.display="none"
    }
    
  }

  var width=document.body.clientWidth;

if(width<768){
  for(var k=0;k<item.length;k++){
   
      
  
        item[k].style.display="block";
        luiz.style.display="none"
        tiepz.style.display="none"

    
  }
  for(var l=0;l<itemi.length;l++){
   
      
  
    itemi[l].style.display="block";
    luiii.style.display="none"
    tiepii.style.display="none"


}
}
var list=document.querySelectorAll('.list-i')


function myresize() {
 
  if(window.outerWidth<768){
    for(var i=0;i<item.length;i++){
     
        
    
          item[i].style.display="block";
          luiz.style.display="none"
          tiepz.style.display="none"
  
      
    }
    for(var j=0;j<itemi.length;j++){
     
        
    
      itemi[j].style.display="block";
      luiii.style.display="none"
      tiepii.style.display="none"
  
  
  }
  }else{
    for(var k=0;k<item.length;k++){
     
      if(k>8){
      
  
        item[k].style.display="none";
       
        tiepz.style.display="block"
    }

  
}
for(var l=0;l<itemi.length;l++){
 
 
  if(l>5){
    itemi[l].style.display="none"
   tiepii.style.display="block"
  }
  



}
  }
 

 
  if(window.outerWidth<240){
    for(var m=0;m<list.length;m++){
     
      if(m>4){
        list[m].style.display='none'
      }
  
      
    }
   
  }else{
    for(var n=0;n<list.length;n++){
     
      if(n>4){
        list[n].style.display='block'
      }

  
}

  }

}

window.addEventListener('resize', myresize)




tiepz.addEventListener('click',tiep)
  function tiep(){
    for(var i=0;i<item.length;i++){
      if(i>8){
        luiz.style.display="block";
        item[i].style.display="block";
        item[i-9].style.display="none";
        tiepz.style.display="none"
      }
     
     
    }
  }
  luiz.addEventListener('click',lui)
  function lui(){
    for(var i=0;i<item.length;i++){
      if(i>8){
        luiz.style.display="none"
        item[i].style.display="none";
        
        
          item[i-9].style.display="block";
        
        tiepz.style.display="block"
      }
    }
  }

  

 },[dispatch])



  const sanpham = useSelector(state=>state.gets.sanphams)
  var t=5
function tiep_i(e){
 
  const tiepall = document.querySelectorAll('.product-top-i')
  
  const tiep = document.querySelector('.tiep-i')
  const lui = document.querySelector('.lui-i')
  lui.style.display='block'
  if(tiepall.length<6){
    tiep.style.display='none'
  }
  
  for(var i=0;i<tiepall.length;i++){
    tiepall[i].style.display='none'
    
   if(i>t){
    
     tiepall[i].style.display='block'
   }
  if(i>t+6){
    tiepall[i].style.display='none'   
  }
   
  }
 
  t=t+6
 if(t>tiepall.length){
   tiep.style.display='none'
 }
 
}
function lui_i(e){
  const tiepall = document.querySelectorAll('.product-top-i')
  
  const tiep = document.querySelector('.tiep-i')
  const lui = document.querySelector('.lui-i')
  tiep.style.display='block'
  t=t-5
  for(var i=tiepall.length-1;i>-1;i--){
    tiepall[i].style.display='none'
    if(i<t){
    
      tiepall[i].style.display='block'
    }
   if(i<t-6){
     tiepall[i].style.display='none'   
   }
    
  
   
  }
  
 t=t-1
 if(t<6){
   lui.style.display='none'
 }
}
function tiep_ii(e){
 
  const tiepall = document.querySelectorAll('.product-top-ii')
  
  const tiep = document.querySelector('.tiep-ii')
  const lui = document.querySelector('.lui-ii')
  lui.style.display='block'
  if(tiepall.length<6){
    tiep.style.display='none'
  }
  
  for(var i=0;i<tiepall.length;i++){
    tiepall[i].style.display='none'
    
   if(i>t){
    
     tiepall[i].style.display='block'
   }
  if(i>t+6){
    tiepall[i].style.display='none'   
  }
   
  }
 
  t=t+6
 if(t>tiepall.length){
   tiep.style.display='none'
 }
 
}
function lui_ii(e){
  const tiepall = document.querySelectorAll('.product-top-ii')
  
  const tiep = document.querySelector('.tiep-ii')
  const lui = document.querySelector('.lui-ii')
  tiep.style.display='block'
  t=t-5
  for(var i=tiepall.length-1;i>-1;i--){
    tiepall[i].style.display='none'
    if(i<t){
    
      tiepall[i].style.display='block'
    }
   if(i<t-6){
     tiepall[i].style.display='none'   
   }
    
  
   
  }
  
 t=t-1
 if(t<6){
   lui.style.display='none'
 }
}


const [topsl,settopsl]=useState('sale-top')
const [topt,settopt]=useState('product-top')
const [none,setnone]=useState('next')
const [none1,setnone1]=useState('none')
const [linkitem,setlinkitem]=useState('active')
const [linkitem1,setlinkitem1]=useState('link-item')

function topsale(e){
  settopt('sale-top')
  settopsl('product-top')
  setnone('none')
 setnone1('next')
 setlinkitem('link-item')
 setlinkitem1('active')
}
function toptrend(e){
  settopt('product-top')
  settopsl('sale-top')
  setnone1('none')
 setnone('next')
 setlinkitem1('link-item')
 setlinkitem('active')
}

function showallsanpham(e){
 if(e.length>0){
   return(
     <div className='san-pham'>
        {e.map((value,index)=>{
         
     return(
      <div key={index} className='item-g'>
      <Link onClick={()=>{window.scrollTo({top:0,left:0,behavior:'smooth'})}} to={"/sanphami/"+value._id}>
        <div className="item-i">
         
          <img loading="lazy" src={value.img[0]} alt="" />
         
   
          <p>{value.tensanpham}</p>
          <h5>Gia:{value.giasanpham}vnd</h5>
        </div>

        <p className='cart'>click to see more !!!</p>
      </Link>
       
    </div>
     )
   })}
     </div>
   )
  
  
 }
}
    return(
        <main>
         
        <section className="promotion">
       
         <div className="product">
            <div className="all-dot">
              <button className="dot" value={0} />
              <button className="dot" value={1} />
              <button className="dot" value={2} />
            </div>
            
            <img loading='lazy' className="noneimg nononeimg"  src="../../public/images/images/12-Home.png" alt="sale" />
           
            
            <img loading='lazy' className="noneimg" src="../../public/images/images/index.jpg" alt="sale" />
           
           
            <img loading='lazy' className="noneimg" src="../../public/images/images/stylish-yellow-sale-banner-design_1017-14559.jpg" alt="sale" />
           
          </div>
         

          <div className="sale"> 
            <img loading='lazy' src="../../public/images/images/1-Home.jpg"alt="sale" />
            <img loading='lazy' src="../../public/images/images/index.jpg"alt="sale" />
          </div>
        </section>
        <section className="danh-muc">
          <h4>Danh Mục</h4>
          <div className="san-pham ">
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div className="ao" /> 
                  <p>Ao</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div className="dientu" /> 
                  <p>Thiet bi dien tu</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div></div> 
                  <p>......1</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>......1.</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>.....2.</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>.....2..</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>...3...</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>....3...</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>...4...</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>....4...</p>
                </div>
              </a>  
            </div>   
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>...5...</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>....5...</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>....6..</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>...6....</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>....7..</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>...7....</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>...8...</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>...8....</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>....9..</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>......9.</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>....10..</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>....10...</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>...11...</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>....11...</p>
                </div>
              </a>  
            </div>
            <div className="item">
              <a href="/soon">
                <div className="item-i">
                  <div /> 
                  <p>cuoi</p>
                </div>
              </a>
              <a href="/soon">
                <div className="item-i">
                </div>
              </a>  
            </div>
          </div>
          <div className="next">
            <button className="lui "/>
            <button className="tiep " />
          </div>
        </section>
        <section className="top-view">
          <div className="link-i">
            <div onClick={(e)=>toptrend(e)} className={linkitem}>Top Trending</div>
            <div onClick={(e)=>topsale(e)} className={linkitem1}>Top Sale ...</div>
          </div>
          <div className={topt}>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div className="ao" /> 
                    <p>Ao</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                   
                    <img loading='lazy' src="../../public/images/images/8.3-Home.png" alt="" />
                   
                    <p>......1</p>
                    <h5>Gia:500k</h5>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......2</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......3</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......4</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......5</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......6</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......7</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......8</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......9</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......10</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......11</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......12</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......13</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......14</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......15</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......16</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......17</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......18</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......19</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-i">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div /> 
                    <p>.......20</p>
                  </div>
                </a>      
              </div>
            </div>
          </div>
          <div className={topsl}>
            <div className="product-top-ii">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                    <div className="ao" /> 
                    <p>Ao</p>
                  </div>
                </a>      
              </div>
            </div>
            <div className="product-top-ii">
              <div className="itemz">
                <a href="/soon">
                  <div className="item-i">
                   
                    <img loading='lazy' src="../../public/images/images/8.3-Home.png" alt="" />
                   
                    <p>......1</p>
                    <h5>Gia:500k</h5>
                  </div>
                </a>      
              </div>
            </div>
            </div>
          <div className={none}><button onClick={(e)=>lui_i(e)} className='lui-i' />
            <button onClick={(e)=>tiep_i(e)} className='tiep-i'>
            </button></div>
            <div className={none1}><button onClick={(e)=>lui_ii(e)} className='lui-ii' />
            <button onClick={(e)=>tiep_ii(e)} className='tiep-ii'>
            </button></div>
        </section>
        <section className="goi-y">
          <h4>Gợi ý</h4>
        
          
            
           
             {showallsanpham(sanpham)}
            
             
            
            
         
        </section>
      </main>
    )

}

export default Home