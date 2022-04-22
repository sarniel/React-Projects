import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const Expenses = () => {
    const [selectedFilter, setSelectedFilter] = useState("2022");

    const ExpenseFilterHandler = (newYearSelected) => {
        setSelectedFilter(newYearSelected);
        console.log(newYearSelected);
    }

    return (
        <div className='card'>
            <ExpenseFilter defaultYear={selectedFilter} onNewYearSelected={ExpenseFilterHandler}/>
            <div className='expenses'>
                <ExpenseItem date={new Date(2020, 7, 14)} name="Car Insurance" amount="$294.67"/>
                <ExpenseItem date={new Date(2020, 7, 14)} name="Life Insurance" amount="$294.67"/>
                <ExpenseItem date={new Date(2020, 7, 14)} name="Education" amount="$294.67"/>
            </div>
        </div>
    )
}

export default Expenses;