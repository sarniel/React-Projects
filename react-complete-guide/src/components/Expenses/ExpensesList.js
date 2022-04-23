import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="no-records">No list found.</h2>
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.name}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  )
}

export default ExpensesList
