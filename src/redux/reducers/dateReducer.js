const initialState = {
  currentDate: new Date().toISOString(), // Зберігаємо дату як рядок
};

export const updateDate = () => ({
  type: 'UPDATE_DATE',
  payload: new Date().toISOString(), // Передаємо дату як рядок
});

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return { ...state, currentDate: action.payload };
    default:
      return state;
  }
};

export default dateReducer;
