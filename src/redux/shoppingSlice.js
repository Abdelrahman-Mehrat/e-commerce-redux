import { createSlice } from "@reduxjs/toolkit";
export const shoppingCartSlice = createSlice({
  name: "usermodal",
  initialState: {
    shoppingProducts: [],
    shoppingTotalPrice:0,
    shoppingQuantity:0
  },
  reducers: {
    addToCart: (state,action) => {
      state.shoppingProducts = [...state.shoppingProducts,action.payload] ;
      state.shoppingTotalPrice += action.payload.price
      state.shoppingQuantity = state.shoppingProducts.length
    },
    removeFromCart: (state,action) => {
        console.log("test");
        state.shoppingProducts = state.shoppingProducts.filter((e)=>{
           return e.id != action.payload.id
        })
        state.shoppingTotalPrice -= action.payload.price
      state.shoppingQuantity = state.shoppingProducts.length
      }
  },
});
export const { addToCart,removeFromCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;