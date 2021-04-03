import React from 'react';


const Event = (props) => {

    return(
        <div className={`event start-${props.start} end-${props.end}  time-block`}>
            <p className="title">{props.name}</p>
        </div>
    )
}

export default Event;