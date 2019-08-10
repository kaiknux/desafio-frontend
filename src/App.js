import React from 'react';
import classes from './App.css';
import Forecast from './components/Forecast/Forecast';
import CitySearch from './components/CitySearch/CitySearch';

function App() {
  return (
    <div className={classes.App}>
      <CitySearch/>
      <Forecast/>
    </div>
  );
}

export default App;
