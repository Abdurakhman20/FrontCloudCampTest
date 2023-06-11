import React from "react";
import styles from "./Button.module.scss";
type ButtonProps = {
  text: string;
  type?: "submit" | "button" | "reset";
};

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  return (
    <button type={type} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
