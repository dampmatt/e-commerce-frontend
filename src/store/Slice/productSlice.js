import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    items: [],
    loading: false,
    error: null
}

const productSlice= createSlice({
    name: 'products',
    initialState,
    reducers:{
        fetchProductsRequest : (state)=>{
            state.loading=true
        },
        fetchProductSuccess : (state,action)=>{
            state.loading=false,
            state.items=action.payload
        },
        fetchProductFailure:(state,action)=>{
            state.loading=false,
            state.error=action.payload
        }
    }
})

export const{fetchProductFailure, fetchProductsRequest, fetchProductSuccess} = productSlice.actions

export default productSlice.reducer