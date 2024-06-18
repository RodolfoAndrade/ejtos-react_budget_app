import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const style = {
        'background-color': '#80ff80',
        'color': 'white',
    };
    return (
        <select 
        style={style}
        className="form-select" 
        aria-label="Default select example"
        onChange={(event) => {
            let new_currency = '';
            switch(event.target.value){
                case '1':
                    new_currency = '$'
                    break;
                case '2':
                    new_currency = '£'
                    break;
                case '3':
                    new_currency = '€'
                    break;
                case '4':
                    new_currency = '₹'
                    break;
                default:
                    break;
            }
            console.log(new_currency);
            if(new_currency!==''){
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: new_currency,
                })
            }
        }}>
            <option value="1">$ Dollar</option>
            <option selected value="2">£ Pound</option>
            <option value="3">€ Euro</option>
            <option value="4">₹ Ruppee</option>
        </select>
    );
};
export default Currency;