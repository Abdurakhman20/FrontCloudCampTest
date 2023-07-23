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
  modalData: {
    isOpen: boolean;
    status: "success" | "error";
  };
  stepOneData: TypeStepOneData;
  stepTwoData: TypeStepTwoData;
  stepThreeData: TypeStepThreeData;
}

const initialState: IFormSlice = {
  modalData: {
    isOpen: false,
    status: "success",
  },
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
    closeModal: (state) => {
      state.modalData = { ...state.modalData, isOpen: false };
    },
  },
});

export const { setStepOneData, setStepTwoData, setStepThreeData, closeModal } =
  formSlice.actions;
export default formSlice.reducer;
