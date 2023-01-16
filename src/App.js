import React from 'react';
import './App.css';
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
      <Weather defualtCity="Lisbon"/>
    </div>
    <small className='small'><a href="https://github.com/Program-doctor/weather-react-app" target="_blank" rel="noopener noreferrer" title="Source code on github" className='link'>Open-source-code</a>, by <a href="http://beautiful-monstera-c0c071.netlify.app/" target="_blank" rel="noopener noreferrer" title="My portfolio" className='link'>Promise Sylvester</a></small>
    </div>
  );
}

export default App;
