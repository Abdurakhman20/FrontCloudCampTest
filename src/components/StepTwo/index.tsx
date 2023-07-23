import React from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import styles from "./StepTwo.module.scss";
import Button from "../UI/Button";
import { RootState, useAppDispatch } from "../../redux/store";
import { onClickBack, onClickNext } from "../../redux/slices/stepsSlice";
import CheckGroup from "../UI/CheckGroup";
import { setStepTwoData } from "../../redux/slices/formSlice";
import InputGroup from "../UI/InputGroup";
import { useSelector } from "react-redux";

interface IStepTwoForm {
  advantages: { value: string }[];
  checkboxGroup: number[];
  radioGroup: number;
}

const StepTwo: React.FC = () => {
  const { advantages, checkboxGroup, radioGroup } = useSelector(
    (state: RootState) => state.form.stepTwoData
  );
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IStepTwoForm>({
    mode: "onBlur",
    defaultValues: {
      advantages: advantages.map((item) => {
        return {
          value: item,
        };
      }),
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
  });

  const dispatch = useAppDispatch();

  const handleRemove = (index: number) => {
    if (fields.length <= 1) {
      return;
    }
    remove(index);
  };

  const handleAppend = (obj: { value: string }) => {
    append(obj);
  };

  const onSubmit: SubmitHandler<IStepTwoForm> = (data: IStepTwoForm) => {
    const { advantages, checkboxGroup, radioGroup } = data;
    // У меня advantages это массив объектов из строк,
    // а по требованию нужно, чтобы advantages было массивом строк
    const newAdvantages = advantages.map((item) => item.value); // Здесь я преобразую
    const newCheckboxGroup = checkboxGroup.map((item) => Number(item));
    const newData = {
      advantages: newAdvantages,
      checkboxGroup: newCheckboxGroup,
      radioGroup: +radioGroup,
    };
    dispatch(setStepTwoData(newData));
    reset();
    dispatch(onClickNext());
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <InputGroup
          fields={fields}
          register={register}
          handleRemove={handleRemove}
          handleAppend={handleAppend}
          errors={errors}
        />
        <CheckGroup<IStepTwoForm>
          register={register}
          labelText="checkboxGroup"
          type="checkbox"
        />
        <CheckGroup<IStepTwoForm>
          register={register}
          labelText="radioGroup"
          type="radio"
        />
        <div className={styles.buttons}>
          <Button
            text="Back"
            style="back"
            type="button"
            onClick={() => dispatch(onClickBack())}
          />
          <Button text="Next" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default StepTwo;
