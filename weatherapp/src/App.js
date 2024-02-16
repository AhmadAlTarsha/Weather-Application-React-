
import './App.css';
import CurrentWeather from './pages/currentWeather/CurrentWeather';
import WelcomeScreen from './pages/welcomeScreen/Welcomscreen';
import { createContext, useState } from "react";
import { Routes, Route } from 'react-router-dom';

export const AppContext = createContext();
// root fun
function App() {
  const [search,setSearch]=useState("")
  return (
<> 

<AppContext.Provider  >
     <Routes>
     <Route path="/" element={<WelcomeScreen />} />
     
     <Route path="/main" element={<CurrentWeather />} />
     </Routes>
    </AppContext.Provider>
</>
   
  );
}

export default App;
