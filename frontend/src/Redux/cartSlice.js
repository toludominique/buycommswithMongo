
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,

}

const cartSlice = createSlice({

    name: "cart",
    initialState,
    reducers:{
         add(state, action){

          const isExist = state.cartItems.find((item) => item._id == action.payload?._id)

          if (isExist) {
            isExist.price += action.payload?.price
            isExist.amount += 1
          }else {
            state.cartItems.push({
              ...action.payload, 
              sum: action.payload?.price,
              amount: 1
            })
          }
           
        },
        calculateTotals(state, action){

       /*    state.cartItems.reduce((preval, currVal) => {
            return preval + currVal.price
          }, 0) 
        
           */

         /*  let amount = 0;
          let total = 0
          
          state.cartItems.forEach((item) => {
            amount += item.amount
            total += item.amount * item.price
          })

          state.amount = amount
          state.total = total  */
        
          /*   let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
            const { price, cartQuantity } = cartItem
            const itemTotal = price * cartQuantity

            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity

            return cartTotal
          }, {
            total: 0,
            quantity: 0
          });

          state.cartTotalQuantity = quantity;
          state.cartTotalAmount = total;  */
        },
 
        increase(state, action){
          const cartItem = state.cartItems?.find((item) => item._id === action.payload._id)
     
          console.log(cartItem)
         
      }
    }
});

export const { add, calculateTotals, increase } = cartSlice.actions;
export default cartSlice.reducer;