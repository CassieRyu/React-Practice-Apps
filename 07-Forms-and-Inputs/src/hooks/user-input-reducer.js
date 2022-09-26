import { useReducer, useState } from "react";

const initialInputState = {
    value: '',
    isTouched: false
}
const inputStateReducer = (state, action) => {

    if(action.type === 'INPUT') {
        return {value: action.value};
    }
    if(action.type === 'BLUR') {
        return { isTouched: true, value: state.value };
    }
    if(action.type === 'RESET') {
        return { isTouched: false, value: ''};
    }
    return initialInputState;
};


const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = event => {
        dispatch({type: 'INPUT', value: event.target.value});
    };

    const valueBlurHandler = event => {
        dispatch({type: 'BLUR'});
    };

    const reset = () => {
        dispatch({type: 'RESET'});
    }
    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    };
};

export default useInput;