import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import stepsReducer from "./slices/stepsSlice";
import formReducer from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
