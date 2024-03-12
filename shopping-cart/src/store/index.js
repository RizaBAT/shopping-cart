import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
