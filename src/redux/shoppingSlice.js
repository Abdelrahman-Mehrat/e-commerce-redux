import { createSlice } from "@reduxjs/toolkit";
let newProduct = true;

const initialState = {
  shoppingProducts: [],
  shoppingTotalPrice: 0,
  shoppingQuantity: 0,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingPage",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newObjj = { ...action.payload, quantity: 1 };
      const shopItems = state.shoppingProducts;
      shopItems.forEach((e) => {
        if (e.id == newObjj.id) {
          e.quantity++;
          newProduct = false;
        }
      });
      if (newProduct) {
        state.shoppingProducts = [...state.shoppingProducts, newObjj];
      }
      newProduct = true;
      state.shoppingTotalPrice += action.payload.price;
      state.shoppingQuantity = state.shoppingProducts.length;
    },
    removeFromCart: (state, action) => {
      state.shoppingProducts = state.shoppingProducts.filter((e) => {
        return e.id != action.payload.id;
      });
      state.shoppingTotalPrice -=
        action.payload.price * action.payload.quantity;
      state.shoppingQuantity = state.shoppingProducts.length;
    },
    removeAllCart: () => initialState,
    // increase of decrease Quantity in shopping cart page
    changeProductQuantity: (state, action) => {
      const shopItems = state.shoppingProducts;
      let changedProduct = action.payload;
      shopItems.forEach((e) => {
        if (!(e.id == changedProduct.product.id)) return;
        console.log(e);
        if (changedProduct.type == "increment") {
          e.quantity++;
          state.shoppingTotalPrice += changedProduct.product.price;
        } else if (changedProduct.type == "decrement") {
          if (e.quantity == 1) {
            alert("minimun order Quantity is 1");
            return;
          }
          e.quantity--;
          state.shoppingTotalPrice -= changedProduct.product.price;
        }
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllCart,
  changeProductQuantity,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
