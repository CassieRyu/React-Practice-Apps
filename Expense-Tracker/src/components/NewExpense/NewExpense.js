import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() //id helps React to correctly identify and update the list elements
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const showNewExpenseHandler = () => {
        setShowNewExpenseForm(true);
    }
    const hideNewExpenseHandler = () => {
        setShowNewExpenseForm(false);
    }

    // if (showNewExpenseForm === false) {
    //     return (<div className="new-expense">
    //         <button onClick={showNewExpenseHandler}>Add New Expense</button>
    //     </div>)
    // }

    return (
        <div className="new-expense">
        {!showNewExpenseForm && <button onClick={showNewExpenseHandler}>Add New Expense</button>}
        {showNewExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideExpenseForm={hideNewExpenseHandler} />}
        </div>
    );
}

export default NewExpense;