import { configureStore } from '@reduxjs/toolkit';
import BookSlice from '../Book Slice/BookSlice';

export const store = configureStore({
  reducer: {
    BookSlice
  },
});
