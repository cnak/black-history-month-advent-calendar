import React, { useState, useEffect, lazy, Suspense } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import StyledApp from './AppStyles';
import { createCalendar } from './helpers';
import bhmBackground from './img/bhm.png';
import Spinner from './components/Spinner'

const Hatch = lazy(() => import ('./components/Hatch'));
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #73a282;
    margin: 0;
  }
`;

export const StyledLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  min-width: 20em;
`;

function App() {
  const [hatches, setHatches] = useState([]);

  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    setHatches(calendar);
  }, []);

  // Store calendar in localStorage
  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches]);

  const shouldOpen = (hatch) => {        
      const canOpen = new Date().getTime() >= new Date(hatch.adventDate).getTime();
      if ((hatch.isOpen === false && canOpen) || (hatch.isOpen && canOpen)) { 
        return true;
      }
      return false;
  };

  const handleFlipHatch = (id) => {
    // eslint-disable-next-line arrow-body-style
    const updatedHatches = hatches.map((hatch) => {
      return hatch.id === id ? { ...hatch, isOpen: shouldOpen(hatch) } : hatch;
    });
    setHatches(updatedHatches);
  };

  return (
    <>
      <StyledLogo src={bhmBackground} alt="logo" />
      <GlobalStyle />
      <StyledApp>
          <Suspense fallback={<Spinner />}>
        {hatches.map((hatch) => (
          <Hatch
            key={hatch.id}
            hatchData={hatch}
            handleClick={handleFlipHatch}
          />
        ))}
          </Suspense>
      </StyledApp>
    </>
  );
}

export default App;
