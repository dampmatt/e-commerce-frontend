import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login : false,
}

export const loginSlice= createSlice({
    name: "login",
    initialState,
    reducers:{
        SignIn: (state)=>{
            state.login=true
        },
        SignOut: (state)=>{
            state.login=false
        }

    }
})

export const {SignIn, SignOut} = loginSlice.actions

export default loginSlice.reducer