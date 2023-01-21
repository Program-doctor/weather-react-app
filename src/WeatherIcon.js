import React from "react";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";


export default function WeatherIcon(props){
    const codeMapping={"clear-sky-day":"CLEAR_DAY",
    "clear-sky-night":"CLEAR_NIGHT",
    "few-clouds-day":"PARTLY_CLOUDY_DAY",
    "scattered-clouds-day":"PARTLY_CLOUDY_DAY",
    "thunderstorm-day":"CLOUDY",
    "few-clouds-night":"PARTLY_CLOUDY_NIGHT",
    "thunderstorm-night":"CLOUDY",
    "scattered-clouds-night":"PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day":"PARTLY_CLOUDY_DAY",
    "broken-clouds-night":"PARTLY_CLOUDY_NIGHT",
    "shower-rain-day":"RAIN",
    "shower-rain-night":"RAIN",
    "rain-day":"SLEET",
    "rain-night":"SLEET",
    "snow-day":"SNOW",
    "snow-night":"SNOW",
    "mist-day":"FOG",
    "mist-night":"FOG"
};

    return (
        <ReactAnimatedWeather icon={codeMapping[props.code]}
        color="black"
        size={props.size}
        animate={true}/>
    );
}