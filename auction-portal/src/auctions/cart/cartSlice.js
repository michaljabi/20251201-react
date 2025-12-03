import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItem: (state, action) => {
        
    }
  }
})

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;