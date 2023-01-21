import React from "react";

export default function Date(props){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let day=days[props.dateValue.getDay()];
    let minutes=props.dateValue.getMinutes();
    if(minutes<10){
        minutes=`0${minutes}`
    }
    let hours=props.dateValue.getHours();
    if(hours<10){
        hours=`0${hours}`
    }
    return(<div>{day} {hours}:{minutes}</div> );
}