import { createSlice } from "@reduxjs/toolkit";
export const getDataSlice = createSlice({
  name: "getData",
  initialState: {
    products: [],
    name: "User",
  },
  reducers: {
    changeNameWithValue: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { changeUserName, changeNameWithValue } = getDataSlice.actions;
export default getDataSlice.reducer;
