import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import StyledApp from './AppStyles';
import { createCalendar } from './helpers';
import Hatch from './components/Hatch';

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

  const handleFlipHatch = (id) => {
    // eslint-disable-next-line arrow-body-style
    const updatedHatches = hatches.map((hatch) => {
      return (hatch.id === id ? { ...hatch, open: !hatch.open } : hatch);
    });
    setHatches(updatedHatches);
  };

  return (
    <>
      <StyledLogo src={require('./img/bhm.png')} alt="logo" />
      <GlobalStyle />
      <StyledApp>
        {hatches.map((hatch) => (
          <Hatch
            key={hatch.id}
            hatchData={hatch}
            handleClick={handleFlipHatch}
          />
        ))}
      </StyledApp>
    </>
  );
}

export default App;
