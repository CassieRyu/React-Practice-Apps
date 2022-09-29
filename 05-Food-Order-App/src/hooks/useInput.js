import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');

    const enteredValueValididity = validateValue(enteredValue);

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const reset = () => {
        setEnteredValue('');
    };

    return {
        value: enteredValue,
        isValid: enteredValueValididity,
        valueChangeHandler,
        reset,
    };
};

export default useInput;
