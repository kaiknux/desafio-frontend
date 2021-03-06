import React, { Component } from 'react';

import WeatherForm from './WeatherForm/WeatherForm';
import WeatherInfo from './WeatherInfo/WeatherInfo';

import { WEATHER_KEY } from '../Keys';
import classes from '../CitySearch/CitySearch.css';


class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        error: null,
        temp_max: '',
        temp_min: '',
    };

    getWeather = async (e) => {
        e.preventDefault();
        const { city } = e.target.elements;
        const cityValue = city.value;
        const countryValue = 'Brazil';

        if (cityValue && countryValue) {
            // metric parameter is for Celcius Unit
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data)

            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null,
                temp_max: data.main.temp_max,
                temp_min: data.main.temp_min
            });
        } else {
            this.setState({
                error: 'Por favor insira o nome de uma cidade.'
            });
        }

    }

    render() {
        return <div className={classes.SearchAppContainer}>
            <div classname={classes.TitleCitySearch}>Previsão do Tempo</div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <WeatherForm
                        getWeather={this.getWeather}
                    />
                    <WeatherInfo {...this.state} />
                </div>
            </div>
        </div>
    }
}

export default App;