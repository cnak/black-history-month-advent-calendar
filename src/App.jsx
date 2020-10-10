import React, { useState, useEffect, lazy, Suspense } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import StyledApp from './AppStyles';
import './App.css';
import { createCalendar } from './helpers';
import bhmBackground from './img/bhm_logo.svg';
import Spinner from './components/Spinner';
import PilatNarrowBlack from './fonts/PilatNarrow-Black.woff';
import BEYNO from './fonts/BEYNO.woff';
import Splashscreen from './components/Splashscreen';
import Footer from './components/FooterStyle';

const Hatch = lazy(() => import('./components/Hatch'));
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'BEYNO';
    src: url(${BEYNO}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
    @font-face {
        font-family: 'Pilat Narrow';
        src: url(${PilatNarrowBlack}) format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
  body {
    background-color: #1E1E1;
    margin: 0;
  }
`;

export const StyledLogo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  const [hatches, setHatches] = useState([]);
  const [showSplashScreen, setShowSplashScreen] = useState(true);

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
    const canOpen =
      new Date().getTime() >= new Date(hatch.adventDate).getTime();
    if ((hatch.isOpen === false && canOpen) || (hatch.isOpen && canOpen)) {
      return true;
    }
    return false;
  };

  const handleFlipHatch = (id) => {
    // eslint-disable-next-line arrow-body-style
    const updatedHatches = hatches.map((hatch) => {
      const shouldBeOpen = shouldOpen(hatch);
      return hatch.id === id
        ? { ...hatch, isOpen: shouldBeOpen, hasBeenOpen: shouldBeOpen }
        : hatch;
    });
    setHatches(updatedHatches);
  };

  return (
    <>
      <Splashscreen showSplashScreen={showSplashScreen} />
      <div className="logo">
        <StyledLogo src={bhmBackground} alt="logo" />
      </div>
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
      <Footer />
    </>
  );
}

export default App;
