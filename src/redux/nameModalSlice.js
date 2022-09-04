import { createSlice } from '@reduxjs/toolkit'
export const nameModal = createSlice({
  name: 'usermodal',
  initialState :{
    show: true
  },
  reducers: {
    // changeUserName:(state)=>{
    //     state.name = "Abdo2"
    // },
    toggleModal: (state) => {
        state.show = !state.show
      }
  },
})
export const {toggleModal,changeNameWithValue} = nameModal.actions
export default nameModal.reducer