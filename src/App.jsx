import React, { useState, useEffect, lazy, Suspense } from 'react';
import GlobalStyle from './components/GlobalStyle'
import StyledApp from './AppStyles';
import './App.css';
import { createCalendar } from './helpers';
import bhmBackground from './img/bhm_logo.svg';
import Spinner from './components/Spinner';
import Splashscreen from './components/Splashscreen';
import StyledLogo from './components/StyledLogo'
import Footer from './components/FooterStyle';
import ReactGA from 'react-ga';
import config from './config.json';

const Hatch = lazy(() => import('./components/Hatch'));

ReactGA.initialize(config.googleAnalytics.trackingCode);
ReactGA.pageview(window.location.pathname);

function App() {
  const [hatches, setHatches] = useState([]);
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();
    setHatches(calendar);
  }, []);

  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches]);

  const shouldOpen = (hatch) => {
    const canOpen =
      new Date().getTime() >= new Date(hatch.adventDate).getTime();
    if ((canOpen && hatch.isOpen === false) || (hatch.isOpen && canOpen)) {
      return true;
    }
    return false;
  };

  const handleFlipHatch = (id) => {
    // eslint-disable-next-line arrow-body-style
    const updatedHatches = hatches.map((hatch) => {
      if (hatch.id === id) {
      const shouldBeOpen = shouldOpen(hatch);
        return { ...hatch, isOpen: shouldBeOpen, hasBeenOpen: shouldBeOpen }
      } else {
          return hatch;
    }
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
