import React from "react";
import styles from "./CheckGroup.module.scss";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Path } from "react-hook-form/dist/types";

type CheckGroupProps<T extends FieldValues> = {
  labelText: Path<T>;
  type: string;
  register: UseFormRegister<T>;
};

function CheckGroup<T extends FieldValues>({
  labelText,
  type,
  register,
}: CheckGroupProps<T>) {
  const options = [{ value: 1 }, { value: 2 }, { value: 3 }];
  return (
    <div className={styles.checkGroup}>
      <label className={styles.label}>{labelText} </label>
      <div className={styles.checkWrapper}>
        {options.map((item, index) => (
          <div key={item.value}>
            <input
              type={type}
              id={`field-check-group-option-${index + 1}`}
              value={item.value}
              {...register(labelText)}
            />
            <label htmlFor={`field-check-group-option-${index + 1}`}>
              {index + 1}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckGroup;
