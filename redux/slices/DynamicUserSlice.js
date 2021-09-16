import { createSlice } from "@reduxjs/toolkit";



export const DynamicUserSlice = createSlice({
    name:"DynamicUser",
    initialState:{
        user:[]
    },
    reducers:{
        UserAdd : (state)=>{

            state.user.push({
                email:"",
                password:""
            })

        },
        UserDelete : (state)=>{

            state.user.pop()

        },
        UserDataUpdate: (state, action)=>{
            console.log("Actions", action.payload)
            const index = action.payload.index;
            state.user[index][action.payload.name] = action.payload.value;
        }
    }
})

// Actions and Reducers===========

export const {UserAdd, UserDelete, UserDataUpdate} = DynamicUserSlice.actions;

export default DynamicUserSlice.reducer;