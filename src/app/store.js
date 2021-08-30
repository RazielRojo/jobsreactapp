import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import daysStatisticsReducer from "../features/daysStatistics/daysSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    days: daysStatisticsReducer,
  },
});
