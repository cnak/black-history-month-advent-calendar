import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 1400,
  offset: '30px',
  transition: transitions.FADE
}

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);
ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
