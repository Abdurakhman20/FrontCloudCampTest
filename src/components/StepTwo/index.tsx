import React from "react";
import {
  useForm,
  SubmitHandler,
  useFieldArray,
  useWatch,
} from "react-hook-form";
import styles from "./StepTwo.module.scss";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useAppDispatch } from "../../redux/store";
import { onClickBack, onClickNext } from "../../redux/slices/stepsSlice";

interface IStepTwoForm {
  Advantages: string;
  items: {
    name: string;
    value: boolean;
  }[];
  checkedRadioIndex: number;
}

const StepTwo: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IStepTwoForm>({
    mode: "onBlur",
    defaultValues: {
      Advantages: "",
      items: [{ name: "", value: false }],
      checkedRadioIndex: -1,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const checkedRadioIndex = useWatch({
    control,
    name: "checkedRadioIndex",
    defaultValue: -1,
  });
  const dispatch = useAppDispatch();

  const handleRemove = (index: number) => {
    if (fields.length <= 1) {
      return;
    }
    reset({ Advantages: "", items: fields, checkedRadioIndex });
    remove(index);
  };
  const handleRadioChange = (index: number) => {
    reset({ ...getValues(), checkedRadioIndex: index });
  };
  const handleCheckboxChange = (index: number, value: boolean) => {
    setValue(`items.${index}.value`, value);
  };
  const onSubmit: SubmitHandler<IStepTwoForm> = (data: IStepTwoForm) => {
    console.log(data);
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
                <Input
                  htmlFor={`field-advantages-${i + 1}`}
                  type="text"
                  id={`field-advantages-${i + 1}`}
                  placeholder="Advantages"
                  labelText={`items.${i}.name`}
                  register={register}
                  required={false}
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
          onClick={() => append({ name: "", value: false })}
        >
          +
        </button>
        <div className={styles.checkboxGroup}>
          <label className={styles.label}>Checkbox Group</label>
          {fields.map((field, index) => (
            <div className={styles.checkbox} key={field.id}>
              <input
                type="checkbox"
                id={`field-checkbox-group-option-${index + 1}`}
                {...register(`items.${index}.value`)}
                defaultChecked={field.value}
                onChange={(e) => handleCheckboxChange(index, e.target.checked)}
              />
              <label htmlFor={`field-checkbox-group-option-${index + 1}`}>
                {index + 1}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.radioGroup}>
          <label className={styles.label}>Radio Group</label>
          {fields.map((field, index) => (
            <div className={styles.radio} key={field.id}>
              <input
                type="radio"
                id={`field-radio-group-option-${index + 1}`}
                {...register("checkedRadioIndex")}
                value={index}
                checked={checkedRadioIndex === index}
                onChange={() => handleRadioChange(index)}
              />
              <label htmlFor={`field-radio-group-option-${index + 1}`}>
                {index + 1}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <Button
            text="Back"
            style="back"
            type="button"
            onClick={() => dispatch(onClickBack)}
          />
          <Button text="Next" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default StepTwo;
