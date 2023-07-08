import React, {useState, useRef} from 'react';
import './DateSelect.css';

const occasions = [
    {
        label: 'Birthday',
        value: 'birthday'
    },
    {
        label: 'Anniversary',
        value: 'anniversary'
    }
]

const DateSelect = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toDateString());
    const dateRef = useRef(null);

    //split time & date  into arrays using delimiter
    const timeString = time.toString().split(' ');
    const dateString = date.toString().split(' ');

    let cafeCondition = "closed";

    //time & date update interval
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toDateString());
    }, 1000);

    const hour = new Date().toTimeString().split(' ')[0].split(':');
    const startingTime = 8;
    const closingTime = 21;

    if (parseInt(hour[0]) > startingTime && parseInt(hour[0]) < closingTime) {
        cafeCondition = 'Open';
    } else {
        cafeCondition = 'Closed'
    }

    //obtain value of date from input via useRef
    const handleClickedDate = () => {
        props.selectDate(dateRef.current.value);
    }

    //obtain value of occasion from selected option
    const handleOccasionChange = (e) => {
        props.selectOccasion(e.target.value);
    }

    return (
        <div className="reservation-date-select">
            <div className="reservation-date-select-date-time">
                <h1 className="date-name">Date</h1>
                <div className="date-time">
                    <div className="date">
                        {
                            dateString[2] + " " + dateString[1] + " " + dateString[3]
                        }
                    </div>
                    <div className="time">
                        {
                            timeString[0] + " " + timeString[1]
                        }
                    </div>
                </div>
            </div>
            <div className="cafe-condition">
                <h1 className={`title ${cafeCondition} condition`}>{cafeCondition}</h1>
            </div>            
            <div className="select-date">
                <input
                    ref={dateRef}
                    onChange={handleClickedDate}
                    type="date"
                    className="date-Select"
                />
                <select className="occasion-select" value={props.occasion} onChange={handleOccasionChange}>
                    {
                        occasions.map((occasion) => {
                            retunr (
                                <option value={occasion.value}>
                                    {occasion.label}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default DateSelect;