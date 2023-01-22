import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function day(){
        let date= new Date(props.data.time*1000);
        let day=date.getDay();
        let days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        return days[day];
    }
    return(<div>
        <li>
            <p>{day()}</p>
        <WeatherIcon code={props.data.condition.icon} size={32}/>
        <p>{Math.round(props.data.temperature.day)}&deg;</p>
        </li>
    </div> );
}