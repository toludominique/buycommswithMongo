

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

/* const initialState = {
    data:[],

} */ 


export const getData = createAsyncThunk("product/getProducts", async() => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const res = await fetch(`${apiUrl}/popularproducts`, {
  cache: 'no-store',
});

return res.json(); 

})



 const productSlice = createSlice({

    name: "product",
    initialState:{
        data:[],
        loading: false,
},
    reducers:{},
/*     extraReducers:{
        [getData.pending]: (state, action) => {
            state.pending = true
        },
        [getData.fulfilled]: (state, action) => {
            state.pending = false;
            state.products = action.payload;
        },
        [getData.rejected]: (state, action) => {
            state.pending = false;
            state.error = true;
        },
     } */

        extraReducers(builder) {
            builder.addCase(getData.pending, (state, action) => {
                state.pending = true
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.pending = false
                state.data = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
                state.pending = false
                state.error = true;
            })
        }
    },

);

export default productSlice.reducer;

