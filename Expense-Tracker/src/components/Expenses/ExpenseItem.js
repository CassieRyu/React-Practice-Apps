import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    //REACT hook, react hooks start with 'use'
    // title is return props.title value, setTitle is a return function to change the value
    // const [title, setTitle] = useState(props.title); 

    // const clickHandler = () => {
    //     // when call this function, 
    //     // 1. value change
    //     // 2. the current component(per componnet instance) will be executed again when state changes
    //     setTitle('Updated!');

    // };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;