import React, { useState, useEffect } from "react";
import './GuestSelect.css';

const GuestSelect = ({selectGuest}) => {
    let [guest, setGuest] = useState(1);
    const [warning, setWarning] = useState('');

    const increase = () => {
        if (guest < 10) {
            guest++;
            setGuest(guest);
            setWarning('');
            selectGuest(guest);
        } else {
            setWarning('Maximum of 10 guests');
        }
    }

    const decrease = () => {
        if (guest > 1) {
            guest--;
            setGuest(guest);
            setWarning('');
            selectGuest(guest);
        } else {
            setWarning('Manimum of 1 guest');
        }
    }

    return (
        <div className="reservation-guest-select">
            <h1 className="guest-name">Guest</h1>
            <div className="reservation-guest-select-counter-container">
                <div className="reservation-guest-select-counter">
                    <CgMathMinus className='guest-decrease' onClick={decrease}/>
                        <pre> {guest} </pre>
                    <CgMathPlus className='guest-increase' onClick={increase}/>
                </div>
                {
                    guest <= 1 && (<span>{warning}</span>) ||
                    guest >= 6 && (<span>{warning}</span>)
                }
            </div>
        </div>
    )
}

export default GuestSelect;