import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpense/NewExpense';

const App = () => {
  return (
    <div className="App">
      <NewExpenses/>
      <Expenses/>
    </div>
  );
}

export default App;
