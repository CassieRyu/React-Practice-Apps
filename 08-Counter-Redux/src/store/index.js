import { legacy_createStore, configureStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

/**
 * Use createSlice method instead of createReducer
 */

const counterSlice = createSlice({
    name: 'counter', // state name
    initialState,
    reducers: {
        increment(state) {
            // NOT use this in createReducer, use reference instead!
            //because manipulate with state directly is highly not recommend, easily to cause bug
            state.counter++;
            // ABLE to use here because createSlice has auto transfer such code to use reference
        },
        decrement(state) {
            state.counter--;
        },
        increase(state) {
            state.counter = state.counter + action.amount;
        },
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
    // reducer: { counter: counterSlice.reducer }, // used for multiple reducers
});

// /**
//  * use createReducer method
//  * @param {*} state
//  * @param {pass from calling func} action
//  * @returns
//  */
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         };
//     }

//     return state;
// };

// const store = legacy_createStore(counterReducer);

export default store;
