import React from "react";
import styles from "./MainPage.module.scss";
import MainPageForm from "../../components/MainPageForm";
import MainPageHeader from "../../components/MainPageHeader";
import PageWrapper from "../../components/PageWrapper";
const MainPage: React.FC = () => {
  return (
    <PageWrapper>
      <MainPageHeader />
      <MainPageForm />
    </PageWrapper>
  );
};

export default MainPage;
