import React, {useState} from 'react';
import './TimeSelect.css';

const TimePod = (props) => {
    //this obtains the current time and passes it to the parent
    const handleRadioChange = (e) => {
        props.selectTime(e.target.value);
    }

    return (
        <div>
            <h1>{props.morning}</h1>
            <div className="timeslots-pods">
                {
                    props.slots.map((item) => {
                        return (
                            <span className="radio-label-container">
                                <label htmlFor={item} classNme="radio-button-label">
                                    <input type="radio" name="timeslots" id={item} value={item} onClick={handleRadioChange}/>
                                    {item}
                                </label>
                            </span>
                        )
                    })
                }
            </div>
        </div>
    );
}

const TimeSelect = (props) => {
    const hour = new Date().toTimeString().split(' ')[0].split(':');
    console.log("Time: ", hour);

    let isMorning =false;
    let isAfternoon =  false;
    let isEvening = false;

    if (parseInt(hour) >= 9 && parseInt(hour) < 12) {
        isMorning = true;
        isAfternoon = false;
        isEvening = false;
    } else if (parseInt(hour) >= 12 && parseInt(hour) < 16) {
        isMorning = false;
        isAfternoon = true;
        isEvening = false;
    } else if (parseInt(hour) >= 16 && parseInt(hour) < 21) {
        isMorning = false;
        isAfternoon = false;
        isEvening = true;
    }

    return (
        <div className="reservation-time-select">
            {
                (isMorning && (<TimePod selectTime={props.selectTime} morning="Morning" slots={props.availableTimeSlots.morning} />)) ||
                (isAfternoon && (<TimePod selectTime={props.selectTime} morning="Afternoon" slots={props.availableTimeSlots.afternoon} />)) ||
                (isEvening && (<TimePod selectTime={props.selectTime} morning="Evening" slots={props.availableTimeSlots.evening} />))
            }
        </div>
    );
};

export default TimeSelect;