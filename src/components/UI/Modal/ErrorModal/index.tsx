import ModalWrapper from "../ModalWrapper";
import Backdrop from "../Backdrop";
import Button from "../../Button";
import styles from "./ErrorModal.module.scss";

type ErrorModalProps = {
  onClickClose: () => void;
};

const ErrorModal: React.FC<ErrorModalProps> = ({ onClickClose }) => {
  return (
    <>
      <Backdrop />
      <ModalWrapper>
        <header className={styles.modal_header}>
          <h2 className={styles.title}>Ошибка</h2>
          <img
            src="images/modal_close_i.svg"
            alt="close-btn"
            onClick={onClickClose}
          />
        </header>
        <div className={styles.modal_body}>
          <img src="images/modal_error_i.svg" alt="error_img" />
        </div>
        <div className={styles.btn}>
          <Button type="button" text="Закрыть" onClick={onClickClose} />
        </div>
      </ModalWrapper>
    </>
  );
};

export default ErrorModal;
