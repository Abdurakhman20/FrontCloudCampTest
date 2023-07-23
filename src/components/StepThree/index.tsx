import React from "react";
import styles from "./StepThree.module.scss";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import Button from "../UI/Button";
import { RootState, useAppDispatch } from "../../redux/store";
import { onClickBack } from "../../redux/slices/stepsSlice";
import TextArea from "../UI/TextArea";
import {
  sendFormData,
  setStepThreeData,
  clearAllData,
} from "../../redux/slices/formSlice";
import { useSelector } from "react-redux";

interface IStepThreeForm {
  about: string;
}

const StepThree: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IStepThreeForm>({
    mode: "onBlur",
  });
  const dispatch = useAppDispatch();
  const { stepOneData, stepTwoData, stepThreeData, modalData } = useSelector(
    (state: RootState) => state.form
  );
  const textAreaLength = watch("about")?.replace(/\s+/g, "").length;
  const onSubmit: SubmitHandler<IStepThreeForm> = (data: IStepThreeForm) => {
    dispatch(setStepThreeData(data));
    dispatch(
      sendFormData({
        stepOneData,
        stepTwoData,
        stepThreeData,
      })
    );
    dispatch(clearAllData());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <TextArea<IStepThreeForm>
          register={register}
          name={"about"}
          errors={errors}
          textAreaLength={textAreaLength}
        />
        <div className={styles.buttons}>
          <Button
            text="Back"
            style="back"
            type="button"
            onClick={() => dispatch(onClickBack())}
          />
          <Button text="Submit" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default StepThree;
