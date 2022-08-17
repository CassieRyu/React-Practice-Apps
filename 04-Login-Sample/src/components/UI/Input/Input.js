import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

// with forwardRef and useImperativeHandle, able to export component refs functon to parent components
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };
    useImperativeHandle(ref, () => {
        return {
            focus: activate
        };
    });

    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
                }`}
        >
            <label>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;