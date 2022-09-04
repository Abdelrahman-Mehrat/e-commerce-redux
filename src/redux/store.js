import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./productsSlice"
import ModalProvider from "./nameModalSlice"
export const store = configureStore({
  reducer: {
    products:productsReducer,
    toggleModal:ModalProvider,
  },
})