import React, { Key } from "react";
import styles from "./InputGroup.module.scss";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { FieldErrors } from "../Input/types";
import cn from "classnames";

type InputGroupProps<T extends FieldValues> = {
  fields: {
    id: Key | null | undefined;
    value: string;
  }[];
  register: UseFormRegister<T>;
  handleAppend: (obj: { value: string }) => void;
  handleRemove: (i: number) => void;
  errors: FieldErrors;
};

const InputGroup = <T extends FieldValues>({
  fields,
  register,
  handleRemove,
  handleAppend,
  errors,
}: InputGroupProps<T>) => {
  return (
    <>
      <label className={styles.label}>Advantages</label>
      {fields.map((field, i) => {
        return (
          <div className={styles.wrapper} key={field.id}>
            <div className={styles.inputGroup}>
              <div
                className={cn(styles.input, {
                  [styles.error_input]: errors?.advantages?.[i],
                })}
              >
                <input
                  type="text"
                  id={`field-advantages-${i + 1}`}
                  placeholder="Advantages"
                  autoComplete="advantages"
                  {...register(`advantages.${i}.value` as Path<T>, {
                    required: true && "Поле обязательно к заполнению!",
                  })}
                />
              </div>
              <img
                src="images/trash.svg"
                className={styles.inputGroupBtn_remove}
                onClick={() => handleRemove(i)}
              />
            </div>
            {errors?.advantages && (
              <p className={styles.errorText}>
                {errors?.advantages[i]?.value?.message}
              </p>
            )}
          </div>
        );
      })}
      <button
        className={styles.inputGroupBtn_add}
        type="button"
        onClick={() => handleAppend({ value: "" })}
      >
        +
      </button>
    </>
  );
};

export default InputGroup;
