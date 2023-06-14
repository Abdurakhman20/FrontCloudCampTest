import React from "react";
import styles from "./CreatePage.module.scss";
import StepOne from "../../components/StepOne";
import Stepper from "../../components/UI/Stepper";
import PageWrapper from "../../components/PageWrapper";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CreatePage: React.FC = () => {
  const current = useSelector((state: RootState) => state.steps.current);

  return (
    <>
      <div className={styles.stepperContainer}>
        <Stepper />
      </div>
      <PageWrapper>{current === 1 && <StepOne />}</PageWrapper>
    </>
  );
};

export default CreatePage;
