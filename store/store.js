import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import NumberReducer from "../features/numbers/numberSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    number: NumberReducer,
  },
});
