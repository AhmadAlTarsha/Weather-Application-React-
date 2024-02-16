

import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css"

const WelcomeScreen = () => {
   const navigate=useNavigate()
  return (
    <div className="welcome-container">
      <h1>Welcome to Weather App</h1>
      <p>Check the current weather and forecasts for your location and search for other city.</p>
      <button onClick={()=>{
        navigate("/main")
      }}>Get Started</button>
    </div>
  );
};

export default WelcomeScreen;
