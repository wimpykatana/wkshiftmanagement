import React, { useState, useEffect } from 'react';
import moment from 'moment';
import TimeBlock from '../Timeblock'


const Event = ( props ) => {
    const [data, setData] = useState(null);

    useEffect( () => {
        fetch(`http://localhost:4000/api/shiftdate/${moment(props.date).format('YYYYMMDD')}`)
        .then(res =>  res.json())
        .then(result => {
            setData(result.data)
        })  
    },[props])


    if(data){
        return(
            <div className="events">
                {
                    data.dataShift.map( x => {
                        return <TimeBlock name={x.name} start={x.start} end={x.end} key={x._id} />
                    })
                }
            </div>
        )
    }
    return(
        <div className="events">
            
        </div>
    )
}

export default Event;