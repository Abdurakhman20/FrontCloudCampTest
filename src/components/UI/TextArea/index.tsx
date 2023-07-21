import React from "react";
import styles from "./TextArea.module.scss";
import { FieldValues, Path, UseFormRegister } from "react-hook-form/dist/types";
import { FieldErrors } from "../Input/types";

type TextAreaProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors;
  textAreaLength: number;
};

const TextArea = <T extends FieldValues>({
  register,
  name,
  errors,
  textAreaLength,
}: TextAreaProps<T>) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>About</label>
      <textarea
        className={styles.textarea}
        placeholder="Placeholder"
        {...register(name, {
          required: true && "Поле обязательно к заполнению!",
          validate: {
            length: (value) => value.replace(/\s+/g, "").length <= 200,
          },
        })}
      ></textarea>
      <span className={styles.areaLength}>length: {textAreaLength}</span>
      {errors?.[name] && (
        <p className={styles.errorText}>
          {errors?.[name]?.message ||
            "Ошибка! Разрешено не больше 200 символов!"}
        </p>
      )}
    </div>
  );
};

export default TextArea;
