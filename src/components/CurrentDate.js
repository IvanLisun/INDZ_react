import React from 'react';

function CurrentDate({ date }) {
  const options = { weekday: 'short', day: 'numeric', month: 'long', year: '2-digit' };
  const formattedDate = date.toLocaleDateString('uk-UA', options);

  return <div className="current-date">{formattedDate}</div>;
}

export default CurrentDate;