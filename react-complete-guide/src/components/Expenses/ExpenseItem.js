import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [name, setName] = useState(props.name);

    const clickHandler = () => {
        setName("Voalaahh!!!!");
    }
    
    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date} name={props.name} amount={props.amount}/>
            </div>
            <div className='expense-item__description'>
                <h2>{name}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;