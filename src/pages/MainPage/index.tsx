import React from "react";
import styles from "./MainPage.module.scss";
import MainPageForm from "../../components/MainPageForm";
import PageWrapper from "../../components/PageWrapper";
import MainPageHeader from "../../components/MainPageHeader";
const MainPage: React.FC = () => {
  return (
    <PageWrapper>
      <MainPageHeader />
      <MainPageForm />
    </PageWrapper>
  );
};

export default MainPage;
