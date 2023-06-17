import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./MainPageForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { maskPhoneNumber } from "../../utils/maskPhoneNumber";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    console.log(data);
    reset();
    navigate("/create");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div className={styles.input__wrapper}>
          <Input<IFormValues>
            htmlFor="phone"
            type="tel"
            id="phone"
            labelText="Номер Телефона"
            name="Номер Телефона"
            placeholder="+7 (925) 952-31-42"
            register={register}
            required={true}
            pattern={/^(\+7 )?\(\d{3}\) \d{3}-\d{2}-\d{2}$/}
            errors={errors}
            onInput={maskPhoneNumber}
          />
        </div>
        <div className={styles.input__wrapper}>
          <Input<IFormValues>
            htmlFor="email"
            type="text"
            id="email"
            labelText="Email"
            name="Email"
            placeholder="ausmanov706@gmail.com"
            register={register}
            required={true}
            pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            errors={errors}
          />
        </div>

        <Button type="submit" text="Начать" />
      </div>
    </form>
  );
};

export default MainPageForm;
