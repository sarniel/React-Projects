import ExpenseItem from './ExpenseItem';

function Expenses () {
    return (
        <div className='expenses'>
            <ExpenseItem date={new Date(2020, 7, 14)} name="Car Insurance" amount="$294.67"/>
            <ExpenseItem date={new Date(2020, 7, 14)} name="Life Insurance" amount="$294.67"/>
            <ExpenseItem date={new Date(2020, 7, 14)} name="Education" amount="$294.67"/>
        </div>
    )
}

export default Expenses;