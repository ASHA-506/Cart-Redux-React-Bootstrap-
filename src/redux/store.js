import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from'./slices/wishlistSlice'
import cartSlice from'./slices/cartSlice'
import productSearchSlice from'./slices/productSearchSlice'


const store  =  configureStore({
reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice,
        productSearchReducer:productSearchSlice
}
})
export default store;