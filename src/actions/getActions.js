import{FETCH_USER,FETCH_CART,NEW_USER,DELETE_USER,FETCH_SANPHAM,FETCH_SHOP,NEW_SANPHAM,DELETE_SANPHAM} from '../actions/types'

export const fetchUser=()=>dispatch=>{
   
    fetch('https://thuongton.net/api/user/sign')
    .then(res=>res.json())
    .then(users=>dispatch({
        type:FETCH_USER,
        payload:users
    }))
}
export const fetchuser=()=>dispatch=>{
    fetch('https://thuongton.net/api/user/sign')
    .then(res=>res.json())
    .then(users=>dispatch({
        type:FETCH_USER,
        payload:users
    }))
}
export const fetchcart=()=>dispatch=>{
    fetch('https://thuongton.net/api/user/cart')
    .then(res=>res.json())
    .then(carts=>dispatch({
        type:FETCH_CART,
        payload:carts
    }))
}
export const deletecart=id=>dispatch=>{
    fetch('https://thuongton.net/api/user/cart/' + id, {
        method: 'DELETE',
      })
      .then(res => res.json()) 
}
export const guinguoiban=cart=>dispatch=>{
    fetch('https://thuongton.net/api/user/cart/xuly/'+cart.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(cart)
    })
}
export const doisoluong=soluong=>dispatch=>{
   
    fetch('https://thuongton.net/api/user/cart/changesoluong/'+soluong.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(soluong)
    })
}
export const newUser=user=>dispatch=>{
    fetch('https://thuongton.net/api/user/sign/add',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(user=>dispatch({
        type:NEW_USER,
        payload:user
    }))
}

/**/ 
export const updateimg=img=>dispatch=>{
    fetch('https://thuongton.net/api/user/sign/updateimg/'+img.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(img)
    })
 
}
/*delete */
export const deleteuser=id=>dispatch=>{
    fetch('https://thuongton.net/api/user/sign/' + id, {
  method: 'DELETE',
})
.then(res => res.json()) 

}
/*update user admin */
export const updateuser=user=>dispatch=>{
   
    fetch('https://thuongton.net/api/user/sign/updateuser/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

}
/*update user user */
export const updateuseri=user=>dispatch=>{
   
    fetch('https://thuongton.net/api/user/sign/update/'+user.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })

}

export const changeemail=email=>dispatch=>{
    
    fetch('https://thuongton.net/api/user/sign/update/email/'+email.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(email)
    })
}

export const checkchangeemail=email=>dispatch=>{
    fetch('https://thuongton.net/api/user/sign/update/email/check/'+email.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(email)
    })
}

export const changepass=pass=>dispatch=>{

    fetch('https://thuongton.net/api/user/sign/update/pass/'+pass.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(pass)
    })
}

export const checkchangepass=pass=>dispatch=>{
    fetch('https://thuongton.net/api/user/sign/update/pass/check/'+pass.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(pass)
    })
}

export const forgetpass=pass=>dispatch=>{
    fetch('https://thuongton.net/api/user/sign/reset/'+pass.email,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(pass)
    })
}
export const resetpass=pass=>dispatch=>{
    fetch('https://thuongton.net/api/user/sign/resetpass/'+pass.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(pass)
    })
}

export const actives=id=>dispatch=>{
    fetch('https://thuongton.net/api/user/sign/active/'+id.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(id)
    })
}


export const fetchsanpham=()=>dispatch=>{
   
    fetch('https://thuongton.net/api/user/sanpham')
    .then(res=>res.json())
    .then(sanphams=>dispatch({
        type:FETCH_SANPHAM,
        payload:sanphams
    }))
}

export const fetchshop =()=> dispatch=>{
    fetch('https://thuongton.net/api/user/shop')
    .then(res=>res.json())
    .then(shops=>dispatch({
        type:FETCH_SHOP,
        payload:shops
    }))
}



export const addshop = shop =>dispatch =>{
  
    fetch('https://thuongton.net/api/user/shop/add',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(shop)
    })
}

export const addsanpham=sanpham=>dispatch=>{
    
    fetch('https://thuongton.net/api/user/sanpham/add',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(sanpham)
    })
}


export const updatesanpham = sanpham =>dispatch =>{

    fetch('https://thuongton.net/api/user/sanpham/update/'+sanpham.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(sanpham)
    })
}

export const deletesanpham = id =>dispatch =>{
    fetch('https://thuongton.net/api/user/sanpham/' + id, {
        method: 'DELETE',
      })
      .then(res => res.json()) 
}


export const addtocarts = sanpham =>dispatch =>{
  
    fetch('https://thuongton.net/api/user/cart/add', {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(sanpham)
      })
      .then(res => res.json()) 
}


export const updatecartitem = sanpham =>dispatch =>{
    fetch('https://thuongton.net/api/user/cart/updateitemcart/'+sanpham.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(sanpham)
    })
}
export const changemagiamgiaz = sanpham =>dispatch =>{
    fetch('https://thuongton.net/api/user/cart/changemagiamgia/'+sanpham.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(sanpham)
    })
}
export const changecheck = sanpham =>dispatch =>{
    fetch('https://thuongton.net/api/user/cart/updatecheck/'+sanpham.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(sanpham)
    })
}
export const buyitem = sanpham =>dispatch =>{
    fetch('https://thuongton.net/api/user/cart/buyitem/'+sanpham.id,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(sanpham)
    })
}