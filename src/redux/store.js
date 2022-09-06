import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import ModalProvider from "./nameModalSlice";
import ProductReducer from "./fetchProductsSlice";
import ShoppingReducer from "./shoppingSlice"
export const store = configureStore({
  reducer: {
    products: productsReducer,
    toggleModal: ModalProvider,
    fetchProduct: ProductReducer,
    shoppingCart:ShoppingReducer,
  },
});
