import React from "react";
import styles from "./CreatePage.module.scss";
import StepOne from "../../components/StepOne";
import Stepper from "../../components/UI/Stepper";
import PageWrapper from "../../components/PageWrapper";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import StepTwo from "../../components/StepTwo";
import StepThree from "../../components/StepThree";
import Modal from "../../components/UI/Modal";

const CreatePage: React.FC = () => {
  const current = useSelector((state: RootState) => state.steps.current);
  const { isOpen, status } = useSelector(
    (state: RootState) => state.form.modalData
  );

  const renderStep = () => {
    switch (current) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        return null;
    }
  };
  console.log(current);
  return (
    <>
      <div className={styles.stepperContainer}>
        <Stepper />
      </div>
      {isOpen && <Modal status={status} />}
      <PageWrapper>{renderStep()}</PageWrapper>
    </>
  );
};

export default CreatePage;
