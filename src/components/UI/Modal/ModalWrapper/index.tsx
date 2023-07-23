import React from "react";
import styles from "./ModalWrapper.module.scss";

type ModalWrapperProps = {
  children: React.ReactNode;
};
const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ModalWrapper;
