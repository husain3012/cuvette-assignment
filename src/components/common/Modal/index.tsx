import React from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";
import Card from "../Card";
import Button from "../Button";


const Modal = ({
  handleClose,
  children,
  title,
  handleOk,
  okText,
  cancelText,
  modalIcon,
  isOpen,
}: {
  handleClose?: () => void;
  handleOk?: () => void;
  children?: React.ReactNode;
  title?: string | false;
  okText: React.ReactNode | false;
  cancelText: React.ReactNode | false;
  modalIcon: React.ReactNode | false;
  isOpen: boolean;
}) => {
  return isOpen ? (
    ReactDOM.createPortal(
    <div className={classes["container"]} onClick={handleClose}>
      <Card
        className={classes["modal-main"]}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={classes["modal-header"]}>
          {title && <h1 className={classes["modal-title"]}>{title}</h1>}
          <div className={classes["modal-icon"]}>{modalIcon}</div>
        </div>
        <div className={classes["modal-body"]}>{children}</div>
        <div className={classes["modal-footer"]}>
        {cancelText && <Button styletype="secondary" onClick={handleClose}>{cancelText}</Button>}
        {okText && <Button styletype="primary" onClick={handleOk}>{okText}</Button>}
        </div>
            
      </Card>
    </div>, document.getElementById('modal-root')!,
    )
  ) : (
    <></>
  );
};

export default Modal;
