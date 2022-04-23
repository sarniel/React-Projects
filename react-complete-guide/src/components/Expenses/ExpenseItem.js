import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const removeItemHandler = () => {}
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button className="btn" onClick={removeItemHandler}>
          Remove
        </button>
      </div>
    </Card>
  )
}

export default ExpenseItem
