import { useState } from 'react'
import ExpenseList from './ExpensesList'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

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

  return (
    <div className="card container">
      <ExpenseFilter
        defaultYear={selectedFilter}
        onNewYearSelected={ExpenseFilterHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense} />
    </div>
  )
}

export default Expenses
