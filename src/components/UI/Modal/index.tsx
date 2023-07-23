import React from "react";
import ErrorModal from "./ErrorModal";
import SuccessModal from "./SuccessModal";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../../../redux/slices/formSlice";
import { useAppDispatch } from "../../../redux/store";

type ModalProps = {
  status: "error" | "success";
};

const Modal: React.FC<ModalProps> = ({ status }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClickClose = () => {
    dispatch(closeModal());
  };

  const onClickHome = () => {
    dispatch(closeModal());
    navigate("/");
  };

  return (
    <>
      {status === "success"
        ? ReactDOM.createPortal(
            <SuccessModal onClickHome={onClickHome} />,
            document.getElementById("modal-window")!
          )
        : ReactDOM.createPortal(
            <ErrorModal onClickClose={onClickClose} />,
            document.getElementById("modal-window")!
          )}
      {}
    </>
  );
};

export default Modal;
