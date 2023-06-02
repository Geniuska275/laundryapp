import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartReducer";
import ProductReducer from "../ProductReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductReducer,
  },
});
