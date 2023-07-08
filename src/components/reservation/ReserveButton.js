import React from "react";
import './ReserveButton.css';

const ReserveButton = (props) => {
    return (
        <div className="reserve-button">
            <button className="button-reserve" type="submit" disabled={props.value}>Submit</button>
        </div>
    )
};

export default ReserveButton;