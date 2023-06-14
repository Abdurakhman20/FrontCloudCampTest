import React from "react";
import styles from "./Button.module.scss";
type ButtonProps = {
  text: string;
  type?: "submit" | "button" | "reset";
  style?: "next" | "back";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  style = "next",
  onClick,
}) => {
  const btnClasses = style === "next" ? styles.button_next : styles.button_back;
  return (
    <button onClick={onClick} type={type} className={btnClasses}>
      {text}
    </button>
  );
};

export default Button;
