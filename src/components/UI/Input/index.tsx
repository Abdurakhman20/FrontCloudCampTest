import React from "react";
import styles from "./Input.module.scss";
import { IFormValues } from "../../MainPageForm";
import { Path, UseFormRegister } from "react-hook-form/dist/types";

type InputProps = {
  htmlFor: string;
  type: string;
  id: string;
  placeholder: string;
  labelText: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  pattern?: RegExp;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  htmlFor,
  type,
  id,
  placeholder,
  labelText,
  register,
  required,
  pattern,
  onInput,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onInput) {
      onInput(event);
    }
  };
  return (
    <div className={styles.wrapper}>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(labelText, {
          required: "Поле обязательно к заполнению!",
          pattern: pattern && {
            value: pattern,
            message: "Некорректный формат!",
          },
        })}
        onInput={handleChange}
      />
    </div>
  );
};

export default Input;
