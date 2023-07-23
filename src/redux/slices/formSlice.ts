import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

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

type SendFormDataArg = {
  stepOneData: TypeStepOneData;
  stepTwoData: TypeStepTwoData;
  stepThreeData: TypeStepThreeData;
};

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

export const sendFormData = createAsyncThunk(
  "data/sendFormDataStatus",
  async (data: SendFormDataArg) => {
    try {
      const response = await fetch(
        "https://api.sbercloud.ru/content/v1/bootcamp/frontend",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      let result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

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
    clearAllData: (state) => {
      state.stepOneData = {
        Name: "",
        Nickname: "",
        Sername: "",
        Sex: "",
      };
      state.stepTwoData = {
        advantages: [""],
        checkboxGroup: [0],
        radioGroup: 0,
      };
      state.stepThreeData = {
        about: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendFormData.pending, (state) => {
      console.log("LOADING...");
    });
    builder.addCase(sendFormData.fulfilled, (state) => {
      state.modalData = { ...state.modalData, status: "success", isOpen: true };
    });
    builder.addCase(sendFormData.rejected, (state) => {
      state.modalData = { ...state.modalData, status: "error", isOpen: true };
    });
  },
});

export const {
  setStepOneData,
  setStepTwoData,
  setStepThreeData,
  closeModal,
  clearAllData,
} = formSlice.actions;
export default formSlice.reducer;
