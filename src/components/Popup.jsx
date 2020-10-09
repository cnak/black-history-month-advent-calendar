import React, { forwardRef, useState, useImperativeHandle } from 'react';
import "./modal.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
const Popup = forwardRef((props, ref) => {
    const { fact, name, imageUrl, frontColor} = props; 
  const [isOpen, setIsOpen] = useState(false);

useImperativeHandle(
        ref,
        () => ({
            toggleModal() {
                 setIsOpen(!isOpen);
            }
        }),
    )

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="modal-container">
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <a className={"modal-button"} onClick={toggleModal} />
        <div className="modal-image" style={{borderBottom: `solid 24px ${frontColor}`}}>
          <img src={imageUrl} alt={name} />
        </div>
        <div className="modal-info">
          <div className="modal-name">{name}</div>
          <div className="modal-fact">{fact}</div>
        </div>
      </Modal>
    </div>
  );
})

export default Popup;