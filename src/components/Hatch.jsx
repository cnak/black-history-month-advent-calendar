/* eslint-disable react/prop-types */
import React, { lazy, Suspense } from "react";
import Confetti from 'react-dom-confetti';
import confettiConfig from './confetti';

import defaultBackground from '../img/background.jpg';
import Popup from './Popup';
import Spinner from "./Spinner";
const StyledHatch = lazy(() => import("./HatchStyles"));

const Hatch = ({
  hatchData: {
    id, nr, text, img, isOpen, adventDate, name,
  },
  handleClick,
}) => {
  const canOpen = new Date().getTime() >= new Date(adventDate).getTime();

  return (
    <Suspense fallback={<Spinner />}>
      <StyledHatch
        background={defaultBackground}
        hatchBackdrop={img}
        onClick={() => handleClick(id)}
      >
        <div className={isOpen ? "front open" : "front"}>
          <p>{nr}</p>
        </div>
        {canOpen && (
          <div className={isOpen ? "back open" : "back"}>
            <Confetti active={isOpen} config={confettiConfig} />
            <Popup fact={text} name={name} imageUrl={img} />
          </div>
        )}
      </StyledHatch>
    </Suspense>
  );
};

export default Hatch;
