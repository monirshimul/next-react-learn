import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"monir",
        post:""
    },
    reducers:{ 
        addUser: (state, action) =>{
            state.name = action.payload.name
            state.post = action.payload.post
        }
    }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer;