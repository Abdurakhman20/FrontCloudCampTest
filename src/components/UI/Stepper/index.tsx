import React from "react";
import styles from "./Stepper.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Stepper: React.FC = () => {
  const steps = useSelector((state: RootState) => state.steps.steps);
  const current = useSelector((state: RootState) => state.steps.current);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {steps?.map((step, i) => (
          <div
            key={i}
            className={cn(styles.stepItem, {
              [styles.active]: current === i + 1,
              [styles.stepItem__completed]: current > i + 1,
            })}
          >
            <div className={styles.step}>
              {current === i + 1 && (
                <div className={styles.active__point}></div>
              )}
              {current > i + 1 && <img src="images/completed.svg" />}
            </div>
            <p className={styles.stepTitle}>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
