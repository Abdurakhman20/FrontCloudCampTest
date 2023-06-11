import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./MainPageForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { maskPhoneNumber } from "../../utils/maskPhoneNumber";

export interface IFormValues {
  "Номер Телефона": string;
  Email: string;
}

const MainPageForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div className={styles.input__wrapper}>
          <Input
            htmlFor="phone"
            type="tel"
            id="phone"
            labelText="Номер Телефона"
            placeholder="+7 (999) 999-99-99"
            register={register}
            required
            pattern={/^(\+7 )?\(\d{3}\) \d{3}-\d{2}-\d{2}$/}
            onInput={maskPhoneNumber}
          />
          {errors?.["Номер Телефона"] && (
            <p className={styles.errorText}>
              {errors?.["Номер Телефона"]?.message || "Error!"}
            </p>
          )}
        </div>
        <div className={styles.input__wrapper}>
          <Input
            htmlFor="email"
            type="text"
            id="email"
            labelText="Email"
            placeholder="tim.jennings@example.com"
            register={register}
            required
            pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
          />
          {errors?.Email && (
            <p className={styles.errorText}>
              {errors?.Email?.message || "Error!"}
            </p>
          )}
        </div>
        <Button type="submit" text="Начать" />
      </div>
    </form>
  );
};

export default MainPageForm;
