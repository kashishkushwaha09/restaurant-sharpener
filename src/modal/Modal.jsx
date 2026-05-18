import React from "react";
import ReactDOM from "react-dom";
import { Icon } from "@iconify/react";
const Modal = ({ show, onHide, children }) => {
  if (!show) null;
  return ReactDOM.createPortal(
    <div
      className="position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div
        className="bg-dark p-2 rounded-3 text-white"
        style={{ minWidth: "300px" }}
      >
        <div className="position-relative w-100">
          <button
            className="btn position-absolute end-0 top-0 p-0"
            onClick={onHide}
          >
            {" "}
            <Icon
              icon="akar-icons:cross"
              width="24"
              style={{ color: "white" }}
            />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
