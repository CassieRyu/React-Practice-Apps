// import { legacy_createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

/**
 * Use createSlice method instead of createReducer
 */

const counterSlice = createSlice({
    name: 'counter', // state name
    initialState: initialCounterState,
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
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

// e.g. counterSlice.actions.increment to avoid typo in old ways: dispatch({type: 'increment'})
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
// /**s
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
// export default store;
