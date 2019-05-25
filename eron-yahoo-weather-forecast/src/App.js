import React from 'react';
import './App.css';
import Forecast from './components/Forecast/Forecast';
import CitySearch from './components/CitySearch/CitySearch';

function App() {
  return (
    <div className="App">
      <CitySearch/>
      <Forecast/>
    </div>
  );
}

export default App;
