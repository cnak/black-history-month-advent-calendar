/* eslint-disable react/prop-types */
import React, { lazy, Suspense, useRef } from 'react';

import Confetti from 'react-dom-confetti';
import confettiConfig from './confetti';
import Popup from './Popup';
import Spinner from './Spinner';
import { useAlert } from 'react-alert';

const StyledHatch = lazy(() => import('./HatchStyles'));

const Hatch = ({
  hatchData: {
    id,
    nr,
    text,
    img,
    isOpen,
    adventDate,
    name,
    frontColor,
    hasBeenOpen
  },
  handleClick
}) => {
  const modalRef = useRef();
  const canOpen = new Date().getTime() >= new Date(adventDate).getTime();
  const alert = useAlert();
  const handler = (id) => {
    handleClick(id);
    if (!canOpen) {
        alert.show('Wait for the date')
    }
    if (modalRef.current) {
        modalRef.current.toggleModal();
    }
  };

  return (
    <Suspense fallback={<Spinner />}>
      <StyledHatch
        frontColor={frontColor}
        hatchBackdrop={img}
        onClick={() => handler(id, hasBeenOpen)}
      >
        <div className={isOpen ? 'front open' : 'front'}>
          <p>{nr}</p>
        </div>
        {canOpen && (
          <div className={isOpen ? 'back open' : 'back'} style={{backgroundColor: frontColor}}>
            <div className="confetti">
              <Confetti active={isOpen} config={confettiConfig} />
            </div>
            <Popup
              fact={text}
              name={name}
              imageUrl={img}
              frontColor={frontColor}
              id={id}
              hasBeenOpen={hasBeenOpen}
              ref={modalRef}
            />
          </div>
        )}
      </StyledHatch>
    </Suspense>
  );
};

export default Hatch;
