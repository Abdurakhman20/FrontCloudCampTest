import React from "react";
import styles from "./Input.module.scss";
type InputProps = {
  htmlFor: string;
  type: string;
  id: string;
  placeholder: string;
  labelText: string;
};
const Input: React.FC<InputProps> = ({
  htmlFor,
  type,
  id,
  placeholder,
  labelText,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input type={type} id={id} placeholder={placeholder}></input>
    </div>
  );
};

export default Input;
