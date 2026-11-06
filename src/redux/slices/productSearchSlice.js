import { createSlice } from "@reduxjs/toolkit";

 const productSearchSlice = createSlice({
    name:"Search",
    initialState:{
        searchKey : ""
    },
    reducers:{
        setSearchKey:(state,action)=>{
            state.searchKey = action.payload
        }
    }

 })
 export const {setSearchKey} = productSearchSlice.actions;
 export default productSearchSlice.reducer