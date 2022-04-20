import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date} name={props.name} amount={props.amount}/>
            </div>
            <div className='expense-item_description'>
                <h2>{props.name}</h2>
                <div className='expense-item_price'>{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;