import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './CartRedux';

export const store = configureStore({
    reducer: {
        [cartSlice.name]: cartSlice.reducer,
    },
});

