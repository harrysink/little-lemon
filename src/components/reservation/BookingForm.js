import React, { useState, useEffect } from 'react';
import TimeSelect from './TimeSelect';
import GuestSelect from './GuestSelect';
import DateSelect from './DateSelect';
import ReserveButton from './ReserveButton';


function BookingForm(props) {
    const [time, setTime] = useState('00:00');
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState('');
    const [occasion, setOccasion] = useState('birthday');
    const [reservation, setReservation] = useState({
        guests: guests,
        date: '',
        time: '',
        occasion: occasion
    })
c
    //handler function for time selection
    const selectTime = (time) => {
        setTime(time);
        setReservation({...reservation, time: time});
    }

    //handler function for guests' number selection
    const selectGuest = (guests) => {
        setGuests(guests);
        setReservation({...reservation, guests: guests});
        props.dispatchTimeslotsOnDateChange(date);
    }

    //handler function for date selection
    const selectDate = (date) => {
        setDate(date);
        setReservation({...reservation, occasion: occasion});
    }

    //handler function for ocassion selection
    const selectOccasion = (occasion) => {
        setOccasion(occasion);
        setReservation({...reservation, occasion: occasion});
    }

    //handler function for form submission
    const submitHandler = (e) => {
        e.preventDefault();
        props.submitReservation(reservation);
    }

    const validateReservation = () => {
        if (reservation.time !== '' &&
            reservation.date !== '' &&
            reservation.guests !== '' &&
            reservation.occasion !== '') {
            return true;
        }

        return false;
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <TimeSelect selectTime={selectTime} availableTimeSlots={props.availableTimeSlots}/>
                <DateSelec  t selectDate={selectDate} selectOccasion={selectOccasion} occasion={occasion}/>
                <GuestSelect selectGuest={selectGuest}/>
                {
                    //enabled or disabled submit button on form validation
                    validateReservation() ? <ReserveButton value={0} /> : <ReserveButton value={1}/>
                }
            </form>
        </div>
    )
}

export default BookingForm;
