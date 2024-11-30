import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducers/menuReducer';
import logoReducer from './reducers/logoReducer';
import dateReducer from './reducers/dateReducer';
import todoReducer from './reducers/todoSlice';
const store = configureStore({
  reducer: {
    menu: menuReducer,
    logo: logoReducer,
    date: dateReducer,
    todo: todoReducer,

  },
});

export default store;
