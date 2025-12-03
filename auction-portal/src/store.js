import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./auctions/cart/cartSlice.js"

export const store = configureStore({
    reducer: {
        'cart': cartReducer
    },
    devTools: true
});

// Inny sposób na stan globalny:
// https://react.dev/reference/react/createContext