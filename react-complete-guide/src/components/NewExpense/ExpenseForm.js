
import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [newtitle, setNewTitle] = useState("")
    const [newAmount, setNewAmount] = useState("")
    const [newDate, setNewDate] = useState("")

    // Other way State
    // const [userInput, setUserInput] = useState({
    //     newtitle: '',
    //     newAmount: '',
    //     newDate: ''
    // })
    
    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value)

        // Other way to set State
        // setUserInput((prevState) => {
        //     return  {...prevState, newtitle: event.target.value}
        // })
        
    }
    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setNewDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: newtitle,
            Amount: newAmount,
            Date: new Date(newDate)
        }

        setNewTitle('');
        setNewAmount('');
        setNewDate('');

        props.onSaveExpenseData(expenseData)
    }

    return (
        <>
            <form action="">
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="">Title</label>
                        <input type="text" value={newtitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Amount</label>
                        <input type="number" min="0.01" step="0.01" value={newAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Date</label>
                        <input type="date" min="2019-01-01" step="2022-12-31" value={newDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={submitHandler}>Voalah</button>
                </div>
            </form>
        </>
    )
}

export default ExpenseForm;