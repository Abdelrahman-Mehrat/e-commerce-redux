import { createSlice } from "@reduxjs/toolkit";
 function randomizeArray(array) {
        let RandomProducts = array.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        return RandomProducts
    }
    function filterProducts(products,filterWord){
      if(filterWord){
        const filteredproducts = products.filter(
          (e) => e.category == filterWord
          );
          return filteredproducts
        } else{
          return products
        }
    }
export const fetchProduct = createSlice({
  name: "usermodal",
  initialState: {
    products: [],
    currentProducts:[],
    paginateActiveBtn:1,
    reRenderProducts: [],
    currentPLength:0
  },
  reducers: {
    getAllProducts: (state, action) => {
      let RandomProducts = randomizeArray(action.payload.data)
      state.products = RandomProducts;
      state.currentProducts = state.products;
      state.currentPLength=state.currentProducts.length;
      state.reRenderProducts = state.currentProducts.slice(0,9)
    },
    getPaginateProducts:(state, action)=>{
      let stratNumber = (9 * action.payload) -9;
      let limit = 9 * action.payload;
      state.paginateActiveBtn = action.payload;
      state.reRenderProducts = state.currentProducts.slice(stratNumber,limit);
    },
    getfilteredData: (state, action) => {
      state.paginateActiveBtn =1;
      const filterWord = action.payload.e;
      state.currentProducts = filterProducts(state.products,filterWord)
      state.currentPLength=state.currentProducts.length;
      state.reRenderProducts = state.currentProducts.slice(0,9)
    },
  },
});
export const { getAllProducts, getfilteredData,getPaginateProducts} = fetchProduct.actions;
export default fetchProduct.reducer;
