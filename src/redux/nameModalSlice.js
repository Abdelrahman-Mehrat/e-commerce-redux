import { createSlice } from "@reduxjs/toolkit";
export const nameModal = createSlice({
  name: "usermodal",
  initialState: {
    show: false,
  },
  reducers: {
    toggleModal: (state) => {
      state.show = !state.show;
    },
  },
});
export const { toggleModal, changeNameWithValue } = nameModal.actions;
export default nameModal.reducer;
