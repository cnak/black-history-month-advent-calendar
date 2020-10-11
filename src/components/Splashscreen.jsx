import React from 'react';
import splashscreen from '../img/splashscreen.jpg';

export default function Splashscreen(props) {
  const style = { width: '100%' };
  if (!props.showSplascreen) {
    return (
      <div className="splashscreen">
        <img src={splashscreen} style={style} alt="" />
      </div>
    );
  } else {
    return null;
  }
}
