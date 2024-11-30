import React from 'react';

function CurrentTime({ date }) {
  const formattedTime = date.toLocaleTimeString('uk-UA');

  return <div className="current-time">{formattedTime}</div>;
}

export default CurrentTime;