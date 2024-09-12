// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';
import transportationReducer from './transportationSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    transportation: transportationReducer,
    meals: mealsReducer,
  },
});
