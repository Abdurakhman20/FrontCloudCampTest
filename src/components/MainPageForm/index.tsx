import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./MainPageForm.module.scss";

const MainPageForm: React.FC = () => {
  return (
    <form>
      <div className={styles.wrapper}>
        <div className={styles.input__wrapper}>
          <Input
            htmlFor="phone"
            type="text"
            id="phone"
            labelText="Номер Телефона"
            placeholder="+7 999 999-99-99"
          />
        </div>
        <div className={styles.input__wrapper}>
          <Input
            htmlFor="email"
            type="text"
            id="email"
            labelText="Email"
            placeholder="tim.jennings@example.com"
          />
        </div>
        <Button text="Начать" />
      </div>
    </form>
  );
};

export default MainPageForm;
