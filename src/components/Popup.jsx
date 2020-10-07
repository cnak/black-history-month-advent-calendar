import React, { useState } from "react";
import "./modal.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Popup({fact, name, imageUrl}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="modal-container">
      <button className="learn-more-button" onClick={toggleModal}>
        Learn More
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <a className={"modal-button"} onClick={toggleModal} />
        <div className="modal-image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="modal-info">
          <div className="modal-name">{name}</div>
          <div className="modal-fact">{fact}</div>
        </div>
      </Modal>
    </div>
  );
}
