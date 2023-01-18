import React from "react";

export default function Date(props){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let day=days[props.dateValue.getDay()];
    let minutes=props.dateValue.getMinutes();
    if(minutes<10){
        return `0${minutes}`
    }
    let hours=props.dateValue.getHours();
    if(hours<10){
        return `0${hours}`
    }
    return( <div className="Date">{day} {hours}:{minutes}</div> );
}