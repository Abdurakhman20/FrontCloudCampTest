import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import Button from "../../components/UI/Button";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        <span>😕</span>
        <p>Данная страница была удалена или никогда не существовала!</p>
        <Link to="/">
          <Button text="Вернуться назад" />
        </Link>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
