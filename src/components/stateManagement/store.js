
import { configureStore } from '@reduxjs/toolkit'
import { getDefaultNormalizer } from '@testing-library/react';
import socketSlice from './slices/socketSlice';
const store = configureStore({
    reducer: {
        socketSlice,

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({serializableCheck:false})
    }

})
export default store;
