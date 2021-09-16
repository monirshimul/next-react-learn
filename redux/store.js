import { configureStore } from '@reduxjs/toolkit';
import DynamicUserSlice from './slices/DynamicUserSlice';
import userReducer from './slices/UserSlice';


export default configureStore({
    
    reducer:{
        user: userReducer,
        DynamicUser: DynamicUserSlice
        
    },
    
})