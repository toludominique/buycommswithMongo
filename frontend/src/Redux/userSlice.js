
import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({

    name: "user",
    initialState:{
        name:"john",
        email:"john@gmail.com"
    },
    reducers:{
        login: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    }
})

export const { login } = userSlice.actions;

export default userSlice.reducer;