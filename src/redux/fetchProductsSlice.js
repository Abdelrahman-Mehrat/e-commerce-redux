import { createSlice } from "@reduxjs/toolkit";
 function randomizeArray(array) {
        let RandomProducts = array.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        return RandomProducts
    }
    function filterProducts(products,filterWord){
      const filteredproducts = products.filter(
        (e) => e.category == filterWord
      );
      return filteredproducts
    }
export const fetchProduct = createSlice({
  name: "usermodal",
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    getAllProducts: (state, action) => {
      // let RandomProducts = randomizeArray(action.payload.data)
      state.products = action.payload.data;
    },
    getfilteredData: (state, action) => {
      const filterWord = action.payload.e;
      const productsBeforeFilter =action.payload.products
      const filteredProducts = filterProducts(productsBeforeFilter,filterWord)
      state.filteredProducts = filteredProducts;
    },
  },
});
export const { getAllProducts, getfilteredData } = fetchProduct.actions;
export default fetchProduct.reducer;
