import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numArr: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addELem: (state, action) => {
      state.numArr.push(action.payload);
    },
    removeElem: (state, action) => {
      state.numArr.splice(state.numArr.indexOf(action.payload), 1);
    },
    emptyArr: (state) => {
      state.numArr = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addELem, removeElem, emptyArr } = counterSlice.actions;

export default counterSlice.reducer;
