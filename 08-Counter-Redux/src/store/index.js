// import { legacy_createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    // reducer: counterSlice.reducer, // for single reducer
    reducer: { counter: counterReducer, auth: authReducer }, // used for multiple reducers
});

export default store;
