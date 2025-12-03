import { createSlice } from "@reduxjs/toolkit";

// Dzięki toolkit - mamy slice, mamy akcje per reducer (nie musimy zwracać uwagi na ich typ), możemy mutować dane

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    counter: 0,
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

// CQS -> Command Query Separation. (podejście)

// Tutaj Aktualizujemy STAN:
// COMMANDs
export const { addItem } = cartSlice.actions;

// Tutaj ODCZUTUJEMY STAN:
// QUERY:
export const selectAllItems = (rootState) => rootState.cart.cartItems;
export const selectItemsCount = (rootState) => rootState.cart.cartItems.length;

export default cartSlice.reducer;