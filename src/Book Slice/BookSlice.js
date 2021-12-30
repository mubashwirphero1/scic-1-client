import { createSlice } from "@reduxjs/toolkit"



const bookSlice = createSlice({
    name: "book",
    initialState: {
        addToCart: []
    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.addToCart.push(payload)
        },
        removeFromCart: (state, { payload }) => {
            state.addToCart = state.addToCart.filter(product => product._id !== payload._id)
        }
    }
})

export const { addToCart, removeFromCart } = bookSlice.actions;

export default bookSlice.reducer;