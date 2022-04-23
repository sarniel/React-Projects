import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [startEditing, setStartEditing] = useState(false)
  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...newExpenseData,
    }
    props.onAddExpense(expenseData)
  }
  const startEditingHandler = () => {
    setStartEditing(true)
  }
  const stopEditingHandler = () => {
    setStartEditing(false)
  }

  return (
    <div className="new-expense">
      {!startEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {startEditing && (
        <ExpenseForm
          onStopEditing={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
