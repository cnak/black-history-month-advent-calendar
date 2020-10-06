import React, { useState } from "react";
import "./modal.css";
import Button from "./Button";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Popup({fact, name}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="modal-container">
      <button className="modal-button" onClick={toggleModal}>Learn More</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="modal-fact">
            {name}
            {fact}
        </div>
        <button onClick={toggleModal}>Go Back</button>
      </Modal>
    </div>
  );
}