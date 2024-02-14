
import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./productSlice"
import counterReducer from "./counterSlice"
import cartReducer from './cartSlice'
import userReducer from './userSlice'




export default configureStore({
    reducer: {
        product: productReducer,
        counter: counterReducer,
        cart: cartReducer,
        user: userReducer
    },
});