import React, { useState, useEffect } from 'react';
import splashscreen from '../img/splashscreen.jpg';

export default function Splashscreen(props) {
  const style = { width: '100%', height: '100vh' };
  if (!props.showSplascreen) {
    return (
      <div className="splashscreen">
        <img src={splashscreen} style={style} />
      </div>
    );
  } else {
    return null;
  }
}
