import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState('2022')

  const ExpenseFilterHandler = (newYearSelected) => {
    setSelectedFilter(newYearSelected)
    console.log(newYearSelected)
  }

  // Filter Array
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter
  })

  let expenseContent = <p className="no-records">No records found.</p>

  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        name={expense.name}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ))
  }

  return (
    <div className="card">
      <ExpenseFilter
        defaultYear={selectedFilter}
        onNewYearSelected={ExpenseFilterHandler}
      />
      <div className="expenses">{expenseContent}</div>
    </div>
  )
}

export default Expenses
