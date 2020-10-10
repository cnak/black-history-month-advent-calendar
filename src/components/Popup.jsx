import React, { forwardRef, useState, useImperativeHandle } from 'react';
import './modal.css';
import Modal from 'react-modal';
import ProgressiveImage from 'react-progressive-graceful-image';
import Confetti from 'react-dom-confetti';
import confettiConfig from './confetti';

Modal.setAppElement('#root');
const Popup = forwardRef((props, ref) => {
  const { fact, name, imageUrl, frontColor, hasBeenOpen } = props;
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleModal() {
      if (!isOpen && hasBeenOpen === false) {
        setTimeout(() => {
          setIsOpen(!isOpen);
        }, 1000);
      } else if (!isOpen && hasBeenOpen) {
        setIsOpen(!isOpen);
      }
    }
  }));

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
        <a href="#" className={'modal-button'} onClick={toggleModal}></a>
        <div
          className="modal-image"
          style={{ borderBottom: `solid 24px ${frontColor}` }}
        >
          <ProgressiveImage src={imageUrl} placeholder={imageUrl}>
            {(imageUrl) => <img src={imageUrl} alt="" />}
          </ProgressiveImage>
        </div>
        <div className="modal-info">
          <div className="modal-name">{name}</div>
          <div className="modal-fact">{fact}</div>
        </div>
      </Modal>
    </div>
  );
});

export default Popup;
