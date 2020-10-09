/* eslint-disable react/prop-types */
import React, { lazy, Suspense, useRef, forwardRef, useImperativeHandle } from "react";
import Confetti from 'react-dom-confetti';
import confettiConfig from './confetti';

import Popup from './Popup';
import Spinner from "./Spinner";
const StyledHatch = lazy(() => import("./HatchStyles"));

const Hatch = ({
  hatchData: {
    id, nr, text, img, isOpen, adventDate, name, frontColor, hasBeenOpen
  },
  handleClick,
}) => {
    const modalRef = useRef();
  const canOpen = new Date().getTime() >= new Date(adventDate).getTime();


  const handler = (id) => {
    handleClick(id)
    modalRef.current.toggleModal();
  }

  return (
    <Suspense fallback={<Spinner />}>
      <StyledHatch
        frontColor={frontColor}
        hatchBackdrop={img}
        onClick={() => handler(id)}
      >
        <div className={isOpen ? "front open" : "front"}>
          <p>{nr}</p>
        </div>
        {canOpen && (
          <div className={isOpen ? "back open" : "back"}>
            <Confetti active={isOpen} config={confettiConfig} />
            <Popup fact={text} name={name} imageUrl={img} frontColor={frontColor} ref={modalRef} />
          </div>
        )}
      </StyledHatch>
    </Suspense>
  );
};

export default Hatch;
