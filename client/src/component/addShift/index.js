import React, { useState } from 'react';
import './addShift.css'

const AddShift = (props) => {
    const [title, setTitle] = useState(null);
    const [shiftDateYear, setShiftDateYear] = useState(null);
    const [shiftDateMonth, setShiftDateMonth] = useState(null);
    const [shiftDateDay, setShiftDateDay] = useState(null);
    const [shiftStart, setShiftStart] = useState(null);
    const [shiftEnd, setShiftEnd] = useState(null);

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const shiftDataSend = {
            title: title,
            shiftDateYear: shiftDateYear,
            shiftDateMonth: shiftDateMonth,
            shiftDateDay: shiftDateDay,
            shiftStart: shiftStart,
            shiftEnd: shiftEnd
        }

        fetch(`http://localhost:4000/api/shift`, {
            method: 'POST',
            body: JSON.stringify(shiftDataSend),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(result =>  {
            if(result.message === "success"){
                window.location.reload();
            }
            console.log(result);
        } );

    }
    
    return (
        <div className="add-shift-holder">
            
            <div className="add-shift-form-holder">
                <div className="close-add-shift-holder" onClick={props.closeClick}>X</div>
                <div className="add-shift-title">Add New shift</div>
                <div className="body-add-shift">
                    <form onSubmit={handleSubmit}>
                        <div className="input-holder">
                            <label>Shift Name</label>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" id="shiftTitle" name="ShiftTitle" placeholder="Shift Name"/>
                            
                        </div>

                        <div className="input-holder">
                            <label>Shift Date<br /></label>
                            <input onChange={(e) => setShiftDateYear(e.target.value)} type="number" id="shiftYear" name="shiftDateYear" placeholder="YYYY"/>
                            <input onChange={(e) => setShiftDateMonth(e.target.value)} type="number" id="shiftMonth" name="shiftDateMonth" placeholder="MM"/>
                            <input onChange={(e) => setShiftDateDay(e.target.value)} type="number" id="shiftDay" name="shiftDateDay" placeholder="DD"/>
                        </div>

                        <div className="input-holder">
                            <label>Shift Start and end<br /></label>
                            <input  onChange={(e) => setShiftStart(e.target.value)} type="number" id="shiftStart" name="shiftStart" placeholder="HH Start"/>
                            <input   onChange={(e) => setShiftEnd(e.target.value)}type="number" id="shiftEnd" name="shiftEnd" placeholder="HH End"/>
                        </div>

                        <div className="input-holder">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddShift;