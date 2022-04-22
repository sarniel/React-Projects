import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
    
    const saveExpenseDataHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
    }

    return (
        <>
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
        </>
    )
}

export default NewExpense;