import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TypeStepOneData = {
  Name: string;
  Nickname: string;
  Sername: string;
  Sex: string;
};
export type TypeStepTwoData = {
  advantages: string[];
  checkboxGroup: number[];
  radioGroup: number;
};
export type TypeStepThreeData = {
  about: string;
};

interface IFormSlice {
  stepOneData: TypeStepOneData;
  stepTwoData: TypeStepTwoData;
  stepThreeData: TypeStepThreeData;
}

const initialState: IFormSlice = {
  stepOneData: {
    Name: "",
    Nickname: "",
    Sername: "",
    Sex: "",
  },
  stepTwoData: {
    advantages: [""],
    checkboxGroup: [0],
    radioGroup: 0,
  },
  stepThreeData: {
    about: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStepOneData: (state, action: PayloadAction<TypeStepOneData>) => {
      state.stepOneData = action.payload;
    },
    setStepTwoData: (state, action: PayloadAction<TypeStepTwoData>) => {
      state.stepTwoData = action.payload;
    },
    setStepThreeData: (state, action: PayloadAction<TypeStepThreeData>) => {
      state.stepThreeData = action.payload;
    },
  },
});

export const { setStepOneData, setStepTwoData, setStepThreeData } =
  formSlice.actions;
export default formSlice.reducer;
