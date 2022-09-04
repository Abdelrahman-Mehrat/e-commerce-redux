import { createSlice } from "@reduxjs/toolkit";
export const fetchProduct = createSlice({
  name: "usermodal",
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload.data;
    },
    getfilteredData: (state, action) => {
      const filterWord = action.payload.e;
      const filteredProducts = action.payload.products.filter(
        (e) => e.category == filterWord
      );
      state.filteredProducts = filteredProducts;
      console.log(filteredProducts);
    },
  },
});
export const { getAllProducts, getfilteredData } = fetchProduct.actions;
export default fetchProduct.reducer;
