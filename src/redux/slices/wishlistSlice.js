import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({

      name:'wishlist',
      initialState:[],
      reducers:{
        addToWishlist(state,action){
         state.push(action.payload)   
        },
        removeFromWishlist(state,action){
         return state.filter((item)=>item.id!==action.payload)
        }

        
      }
})
export const selectWishlistCount = (state) => state.wishlistReducer?.length || 0;
export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer;