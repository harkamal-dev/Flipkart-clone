import React, { useEffect } from 'react';
import './Timer.css';
import {useState } from 'react';

function Timer() {

    // const [dateTimer , setDateTimer ] = useState ('');
    const [hoursTimer , setHoursTimer ] = useState ('');
    const [minutesTimer , setMinutesTimer ] = useState ('');
    const [secondsTimer , setSecondsTimer ] = useState ('');

const startTimer=()=>{
    const timerDate = new Date(2021,3,1,17,0,0).getTime();

    setInterval(()=>{
        const currDate = new Date().getTime();
        const difference = timerDate - currDate;
        
        // const date= Math.floor((difference)/(24*60*60*1000))
        const hours = Math.floor((difference)%(24*60*60*1000)/(60*60*1000))
        const minutes = Math.floor((difference)%(60*1000*60)/(60*1000))
        const seconds = Math.floor((difference)%(60*1000)/1000)

        // setDateTimer(date)
        setHoursTimer(hours)
        setMinutesTimer(minutes)
        setSecondsTimer(seconds)
    },1000);
}

useEffect(() =>{
     startTimer();

},[]);

    return (
        <div className="timerr">


            <p> {hoursTimer} : {minutesTimer} : {secondsTimer} Left</p>

            

        </div>
    )
}

export default Timer
