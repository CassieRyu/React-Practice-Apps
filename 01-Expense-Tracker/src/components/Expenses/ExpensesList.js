import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (props.list.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found.</h2>
    }
    return (
        <ul className='expenses-list'>
            {
                props.list.map(item => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}
        </ul>
    )
}

export default ExpensesList;