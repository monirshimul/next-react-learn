import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice'

export default configureStore({
    reducer:{
        user: userReducer,
        dev: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    },
    
})