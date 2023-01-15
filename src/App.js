import React from 'react';
import './App.css';
import Forecast from './Forecast';
import Weather from './Weather';


function App() {
  
  return (
    <div className="container">
    <div className="App">
      <header>
        <ul>
          <li><a href='/' className='link'>Lisbon</a></li>
          <li><a href='/' className='link'>Paris</a></li>
          <li><a href='/' className='link'>Sydney</a></li>
          <li><a href='/' className='link'>San Francisco</a></li>
        </ul>
      </header>
      <Weather/>
      <Forecast/>
    </div>
    <small className='small'><a href="http://" target="_blank" rel="noopener noreferrer" title="source code on github" className='link'>Open-source-code</a>, by <a href="http://" target="_blank" rel="noopener noreferrer" className='link'>Promise Sylvester</a></small>
    </div>
  );
}

export default App;
