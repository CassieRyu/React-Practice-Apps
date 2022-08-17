import React, { useState, Fragment, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = props => {

    // Refs used for manipulate DOM, State used for data update, 
    // if just Read value, we can use refs; but if for update data, better use State  
    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    

    // const changeUsernameHandler = event => {
    //     setEnteredUsername(event.target.value);
    // }
    // const changeAgeHandler = event => {
    //     setEnteredAge(event.target.value);
    // }

    const addUserHandler = event => {
        event.preventDefault();
        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please input valid username and age(values can't be empty)"
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please input a valid age( >1 )"
            })
            return;
        }

        const newUser = {
            key: Math.random().toString(),
            name: enteredUsername,
            age: +enteredAge
        }

        props.onSubmitData(newUser);
        // setEnteredUsername('');
        // setEnteredAge('');
        nameInputRef.current.value='';
        ageInputRef.current.value='';

    };
    const resetErrorHandeler = () =>{
        setError(null);
    }
//<Fragment> used, instead of <div> which could help ro reduce the levels of <div> because of component root
// same as <> </>
    return (
        <Fragment> 
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={resetErrorHandeler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id='username' type='text' ref={nameInputRef}/>
                    <label htmlFor="age">Age (years)</label>
                    <input id='age' type='number' ref={ageInputRef} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddUser;