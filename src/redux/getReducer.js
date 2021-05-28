import{FETCH_USER,FETCH_CART,NEW_USER,DELETE_USER,FETCH_SANPHAM,FETCH_SHOP,NEW_SANPHAM,DELETE_SANPHAM} from '../actions/types'

const initialState={
    users:[],
    user:{},
sanphams:[],
    sanpham:{},
    shops:[],
    carts:[],
   
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_USER:
           
            return{
                ...state,
                users:action.payload
            }

        case NEW_USER:
            return{
                ...state,
                user:action.payload
            }
case FETCH_SANPHAM:
           
                return{
                    ...state,
                    sanphams:action.payload
                }
    case FETCH_SHOP:
           
                return{
                    ...state,
                    shops:action.payload
                }
        case NEW_SANPHAM:
            return{
                ...state,
                sanpham:action.payload
            }

case FETCH_CART:
                return{
                    ...state,
                    carts:action.payload
                }
        default:
            return state;

    }
}