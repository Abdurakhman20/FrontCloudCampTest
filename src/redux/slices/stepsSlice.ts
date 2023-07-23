import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IStepsState {
  steps: number[];
  current: number;
}

const initialState: IStepsState = {
  steps: [1, 2, 3],
  current: 1,
};

export const stepsSlice = createSlice({
  name: "steps",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onClickNext: (state) => {
      if (state.current < state.steps.length) {
        state.current += 1;
      }
    },
    onClickBack: (state) => {
      if (state.current > 1) {
        state.current -= 1;
      }
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      if (action.payload > 0 && action.payload <= 3) {
        state.current = action.payload;
      }
    },
  },
});
export const { onClickNext, onClickBack, setCurrentStep } = stepsSlice.actions;
export default stepsSlice.reducer;
