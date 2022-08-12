import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterByYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpensesList = props.data.filter(item => item.date.getFullYear().toString() === filteredYear);

    return (
        <Card className='expenses'>
            <ExpensesFilter 
            selected={filteredYear} 
            onSelectYear={filterByYearHandler} 
            />
            <ExpenseChart expenses={filteredExpensesList}/>
            <ExpensesList list={filteredExpensesList}/>
        </Card>
    )
}

export default Expenses;