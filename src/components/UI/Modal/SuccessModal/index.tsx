import ModalWrapper from "../ModalWrapper";
import Button from "../../Button";
import Backdrop from "../Backdrop";
import styles from "./SuccessModal.module.scss";

type SuccessModalProps = {
  onClickHome: () => void;
};

const SuccessModal: React.FC<SuccessModalProps> = ({ onClickHome }) => {
  return (
    <>
      <Backdrop />
      <ModalWrapper>
        <header className={styles.modal_header}>
          <h2 className={styles.title}>Форма успешно отправлена</h2>
        </header>
        <div className={styles.modal_body}>
          <img src="images/modal_success_i.svg" alt="success_img" />
        </div>
        <div className={styles.btn}>
          <Button type="button" text="На главную" onClick={onClickHome} />
        </div>
      </ModalWrapper>
    </>
  );
};

export default SuccessModal;
