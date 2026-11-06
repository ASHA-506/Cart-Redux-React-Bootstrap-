import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
name:'cart',
initialState:[],
reducers:{
    addToCart(state,action){
        const existingProduct = state.find(item=>item.id==action.payload.id)
        if(existingProduct){
existingProduct.quantity++
existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
        }else{
         state.push({...action.payload,quantity:1,totalPrice:action.payload.price})   
        }
    },
    removeFromCart:(state,action)=>{
        return state.filter(item=>item.id!==action.payload)
    },
    incrementCart:(state,action)=>{
    const existingProduct = state.find(item=>item.id==action.payload)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            }
    },
        decrementCart:(state,action)=>{
    const existingProduct = state.find(item=>item.id==action.payload)
            if(existingProduct){
                existingProduct.quantity--
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            }
    },
    emptyCart:(state,action)=>{
        return []

    }
}
 })
 export const totalQuantity=(state)=>
        state.cartReducer?.reduce((total,item)=>total+item.quantity,0) || 0 ;
 export const totalAmount=(state)=>
        state.cartReducer?.reduce((total,item)=>total+item.totalPrice,0)||0;
 export const selectCartCount = (state) => state.cartReducer?.reduce((total,item)=>total+item.quantity,0);

 export const {addToCart,removeFromCart,incrementCart,decrementCart,emptyCart} = cartSlice.actions;
 export default cartSlice.reducer;