import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import styles from "./StepOne.module.scss";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import ReactSelect, { StylesConfig } from "react-select";
import cn from "classnames";
import { RootState, useAppDispatch } from "../../redux/store";
import { onClickNext } from "../../redux/slices/stepsSlice";
import { setStepOneData } from "../../redux/slices/formSlice";
import { useSelector } from "react-redux";

interface IStepOneForm {
  Nickname: string;
  Name: string;
  Sername: string;
  Sex: string;
}
interface IOptions {
  value: string;
  label: string;
}
const options: IOptions[] = [
  {
    value: "man",
    label: "Man",
  },
  {
    value: "women",
    label: "Women",
  },
];

const customStyles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    border: state.isFocused
      ? "1px solid rgba(0, 0, 0, 0.16)"
      : "1px solid rgba(0, 0, 0, 0.16)",
    marginTop: "8px",
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
    "&:hover": {
      border: provided.border,
    },
  }),
  input: (provided, state) => ({
    ...provided,
    padding: "0px",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: "12px",
  }),
};

const StepOne: React.FC = () => {
  const stepOneData = useSelector((state: RootState) => state.form.stepOneData);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IStepOneForm>({
    mode: "onBlur",
    defaultValues: {
      ...stepOneData,
    },
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IStepOneForm> = (data: IStepOneForm) => {
    dispatch(setStepOneData(data));
    reset();
    dispatch(onClickNext());
  };

  const getValue = (value: string) => {
    return value ? options.find((opt) => opt.value === value) : "";
  };
  const onClickBackHandler = () => {
    navigate("/");
  };

  const selectLabelClasses = cn(
    styles.select__wrapper,
    styles.select__wrapper__error
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div className={styles.control__wrapper}>
          <Input<IStepOneForm>
            type="text"
            id="field-nickname"
            labelText="Nickname"
            placeholder="Nickname"
            register={register}
            required={true}
            errors={errors}
          />
        </div>
        <div className={styles.control__wrapper}>
          <Input<IStepOneForm>
            type="text"
            id="field-name"
            labelText="Name"
            placeholder="Name"
            register={register}
            required={true}
            errors={errors}
          />
        </div>
        <div className={styles.control__wrapper}>
          <Input<IStepOneForm>
            type="text"
            id="field-sername"
            labelText="Sername"
            placeholder="Sername"
            register={register}
            required={true}
            errors={errors}
          />
        </div>
        <div className={styles.control__wrapper}>
          <Controller
            control={control}
            name="Sex"
            rules={{
              required: "Поле обязательно к заполнению!",
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <div
                className={error ? selectLabelClasses : styles.select__wrapper}
              >
                <label>Sex</label>
                <ReactSelect
                  options={options}
                  placeholder="Не выбрано"
                  id="fiels-sex"
                  value={getValue(value)}
                  onChange={(newValue) =>
                    onChange((newValue as IOptions).value)
                  }
                  styles={customStyles}
                />
                {error && <p className={styles.errorText}>{error.message}</p>}
              </div>
            )}
          />
        </div>
        <div className={styles.buttons}>
          <Button
            text="Back"
            style="back"
            type="button"
            onClick={onClickBackHandler}
          />
          <Button text="Next" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default StepOne;
