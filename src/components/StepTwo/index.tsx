import React from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import styles from "./StepTwo.module.scss";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useAppDispatch } from "../../redux/store";
import { onClickBack, onClickNext } from "../../redux/slices/stepsSlice";
import CheckGroup from "../UI/CheckGroup";
import { setStepTwoData } from "../../redux/slices/formSlice";

interface IStepTwoForm {
  advantages: { value: string }[];
  checkboxGroup: number[];
  radioGroup: number;
}

const StepTwo: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IStepTwoForm>({
    mode: "onBlur",
    defaultValues: {
      advantages: [{ value: "" }],
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <label className={styles.label}>Advantages</label>
        {fields.map((field, i) => {
          return (
            <div className={styles.inputGroup} key={field.id}>
              <div className={styles.input}>
                <Input<IStepTwoForm>
                  htmlFor={`field-advantages-${i + 1}`}
                  type="text"
                  id={`field-advantages-${i + 1}`}
                  placeholder="Advantages"
                  labelText={`advantages.${i}.value`}
                  register={register}
                  required={true}
                  errors={errors}
                />
              </div>
              <img
                src="images/trash.svg"
                className={styles.inputGroupBtn_remove}
                onClick={() => handleRemove(i)}
              />
            </div>
          );
        })}
        <button
          className={styles.inputGroupBtn_add}
          type="button"
          onClick={() => append({ value: "" })}
        >
          +
        </button>
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
