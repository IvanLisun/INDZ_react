import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateDate } from '../redux/reducers/dateReducer';

const DateTime = ({ currentDate, updateDate }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      updateDate();
    }, 1000);

    return () => clearInterval(interval);
  }, [updateDate]);

  return (
    <div>
      <CurrentDate date={new Date(currentDate)} />
      <CurrentTime date={new Date(currentDate)} />
    </div>
  );
};

const CurrentDate = ({ date }) => (
  <p>
    {date.toLocaleDateString('uk-UA', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: '2-digit',
    })}
  </p>
);

const CurrentTime = ({ date }) => <p>{date.toLocaleTimeString()}</p>;

// Функція для отримання даних зі сховища
const mapStateToProps = (state) => ({
  currentDate: state.date.currentDate,
});

// Функція для передачі екшенів у компонент
const mapDispatchToProps = {
  updateDate,
};

// Підключення компонента до Redux
export default connect(mapStateToProps, mapDispatchToProps)(DateTime);
