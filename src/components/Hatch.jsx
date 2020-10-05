/* eslint-disable react/prop-types */
import React from 'react';
import Confetti from 'react-dom-confetti';
import StyledHatch from './HatchStyles';
import confettiConfig from './confetti';

import defaultBackground from '../img/background.jpg';

const Hatch = ({
  hatchData: {
    id, nr, text, img, isOpen, adventDate,
  },
  handleClick,
}) => {
  const canOpen = new Date().getTime() >= new Date(adventDate).getTime();

  return (
    <StyledHatch
      background={defaultBackground}
      hatchBackdrop={img}
      onClick={() => handleClick(id)}
    >
      <div className={isOpen ? 'front open' : 'front'}>
        <p>{nr}</p>
      </div>
      {canOpen && (
        <div className={isOpen ? 'back open' : 'back'}>
          <Confetti active={isOpen} config={confettiConfig} />
          <p>{text}</p>
        </div>
      )}
    </StyledHatch>
  );
};

export default Hatch;
