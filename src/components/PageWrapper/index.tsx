import React from "react";
import styles from "./PageWrapper.module.scss";

type PageWrapperProps = {
  children: React.ReactNode;
};
const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default PageWrapper;
