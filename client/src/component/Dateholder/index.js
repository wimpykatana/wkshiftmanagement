import React from 'react';
import './dateholder.css';

const Dateholder = (props) => {
    return(
        <div className="date">
            <p className="date-num">{props.datenum}</p>
            <p className="date-day">{props.datename},&nbsp;</p>
            <p className="date-month-year">{props.datemontyear}</p>
            <div className="add-shift">
                <button onClick={props.addShift}>
                    <div> add shift</div>
                </button>
            </div>
            <div className="next-prev">
                <button onClick={props.leftClick}>
                    <div className="before-date" > &lt; </div>
                </button>
                <button onClick={props.rightClick}>
                    <div className="next-date" > &gt; </div>
                </button>
            </div>
        </div>
    )
}

export default Dateholder;