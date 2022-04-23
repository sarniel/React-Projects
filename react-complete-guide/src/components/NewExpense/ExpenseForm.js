import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [newName, setNewName] = useState('')
  const [newAmount, setNewAmount] = useState('')
  const [newDate, setNewDate] = useState('')

  // Other way State
  // const [userInput, setUserInput] = useState({
  //     newName: '',
  //     newAmount: '',
  //     newDate: ''
  // })

  const NameChangeHandler = (event) => {
    setNewName(event.target.value)

    // Other way to set State
    // setUserInput((prevState) => {
    //     return  {...prevState, newName: event.target.value}
    // })
  }
  const AmountChangeHandler = (event) => {
    setNewAmount(event.target.value)
  }
  const DateChangeHandler = (event) => {
    setNewDate(event.target.value)
  }

  const SubmitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      name: newName,
      amount: newAmount,
      date: new Date(newDate),
    }

    setNewName('')
    setNewAmount('')
    setNewDate('')

    props.onSaveExpenseData(expenseData)
  }

  return (
    <>
      <form action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Name</label>
            <input type="text" value={newName} onChange={NameChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={newAmount}
              onChange={AmountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2019-01-01"
              step="2022-12-31"
              value={newDate}
              onChange={DateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={SubmitHandler}>Add Expenses</button>
        </div>
      </form>
    </>
  )
}

export default ExpenseForm
