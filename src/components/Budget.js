import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        let value = parseInt(event.target.value);
        console.log(value);
        if(value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
        }
        else if(value > 20000){
            alert("The budget value cannot exceed 20000");
        }
        else {
            setNewBudget(value);
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
                >
            </input>
        </div>
    );
};












export default Budget;