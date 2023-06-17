import React from "react";
import styles from "./Input.module.scss";
import {
  Path,
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
} from "react-hook-form/dist/types";
import cn from "classnames";

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;

type InputProps<T extends FieldValues> = {
  htmlFor: string;
  type: string;
  id: string;
  placeholder: string;
  labelText: Path<T>;
  name?: string;
  register: UseFormRegister<T>;
  required: boolean;
  pattern?: RegExp;
  errors?: FieldErrors;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input<T extends FieldValues>({
  htmlFor,
  type,
  id,
  placeholder,
  labelText,
  name,
  register,
  required,
  pattern,
  errors,
  onInput,
}: InputProps<T>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onInput) {
      onInput(event);
    }
  };

  const wrapperClasses = cn(styles.wrapper, {
    [styles.error]: errors?.[labelText],
  });

  return (
    <div className={wrapperClasses}>
      <label htmlFor={htmlFor}>{name}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(labelText, {
          required: required && "Поле обязательно к заполнению!",
          pattern: pattern && {
            value: pattern,
            message: "Некорректный формат!",
          },
        })}
        onInput={handleChange}
      />
      {errors?.[labelText] && (
        <p className={styles.errorText}>
          {errors?.[labelText]?.message || "Error!"}
        </p>
      )}
    </div>
  );
}

export default Input;
