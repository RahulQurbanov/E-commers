import { createSlice } from "@reduxjs/toolkit"

const initialState = {isLogged:false,access:"",refresh:""}

const authStore = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state,action) =>{
        state.isLogged=true;
        state.access = action.access;
        state.refresh = action.refresh;           
    },
        logout: (state) =>{state.isLogged=false}
    }
})

export default authStore.reducer
export const authAction = authStore.actions