import { useState } from "react";
import {Modal} from "./modal";
import "./modal.css";

export const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button id="model_btn" onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Header</h1>}
          footer={<h1>Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}
