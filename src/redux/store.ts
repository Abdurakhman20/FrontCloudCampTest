import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import stepsReducer from "./slices/stepsSlice";

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
