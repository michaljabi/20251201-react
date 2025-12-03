import { createSlice } from "@reduxjs/toolkit";

// Dzięki toolkit - mamy slice, mamy akcje per reducer (nie musimy zwracać uwagi na ich typ), możemy mutować dane

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItem: (state, action) => {
        // ponieważ jest Immer (taka biblioteka js) to możemy tutaj mutować!

        // Dodajemy nową aukcje do cartItems:
        state.cartItems.push(action.payload);
    }
  }
})

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;