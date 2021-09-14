import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice'


// let reduxDev
// if (typeof window !== "undefined") {
//     reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   }

export default configureStore({
    
    reducer:{
        user: userReducer,
        dev: typeof window !== "undefined" ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : ""
    },
    
})