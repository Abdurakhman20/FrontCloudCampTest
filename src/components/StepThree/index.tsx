import React from "react";
import styles from "./StepThree.module.scss";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import Button from "../UI/Button";
import { useAppDispatch } from "../../redux/store";
import { onClickBack } from "../../redux/slices/stepsSlice";
import TextArea from "../UI/TextArea";
import { setStepThreeData } from "../../redux/slices/formSlice";

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
  const textAreaLength = watch("about")?.replace(/\s+/g, "").length;
  const onSubmit: SubmitHandler<IStepThreeForm> = (data: IStepThreeForm) => {
    console.log(data);
    dispatch(setStepThreeData(data));
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
