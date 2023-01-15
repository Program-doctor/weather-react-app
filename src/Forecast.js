import React from "react";
import "./Forecast.css";

export default function(){
    return(
        
      <div className="forecast row">
      <ul className="row">
        <div className="col-sm-2">
        <li><p>Wed</p>
        <img src="" alt="" />
        <p>15&deg;</p>
        </li>
        </div>
        <div className="col-sm-2">
        <li><p>Thu</p>
        <img src="" alt="" />
        <p>16&deg;</p>
        <p></p></li>
        </div>
        <div className="col-sm-2">
        <li><p>Fri</p>
        <img src="" alt="" />
        <p>17&deg;</p></li>
        </div>
        <div className="col-sm-2">

        <li><p>
          Sat</p>
          <img src="" alt="" />
          <p>18&deg;</p></li>
        </div>
        <div className="col-sm-2">

        <li><p>
          Sun</p>
          <img src="" alt="" />
          <p>18&deg;</p></li>
        </div>
      </ul>
    </div>
    );
}