
import './App.css';
import NavBar from './componenet/NavBar/NavBar';
import CurrentWeather from './componenet/currentWeather/CurrentWeather';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { useState ,createContext,useEffect, } from "react";


export const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider >
    <NavBar ></NavBar>
    <Routes>


   </Routes>
  </AppContext.Provider>
  );
}

export default App;
