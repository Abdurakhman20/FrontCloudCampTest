import React from "react";
import styles from "./Input.module.scss";
import { FieldValues } from "react-hook-form/dist/types";
import { InputProps } from "./types";
import cn from "classnames";

function Input<T extends FieldValues>({
  type,
  id,
  placeholder,
  labelText,
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
      <label htmlFor={id}>{labelText}</label>
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
