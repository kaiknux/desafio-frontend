import React, { Component } from 'react';
import SingleCity from './SingleCity/SingleCity';
import classes from '../Forecast/Forecast.css';
import { WEATHER_KEY } from '../Keys';

const cities = [
    3451190, 3448439, 3405814, 3469058, 3405863, 3450554, 3464975, 6320062, 3663517, 3397277,
];
const units = 'metric';
const link = `http://api.openweathermap.org/data/2.5/group?id=${cities[0]},${cities[1]},${cities[2]},${cities[3]},${cities[4]},${cities[5]},${cities[6]},${cities[7]},${cities[8]},${cities[9]}&APPID=${WEATHER_KEY}&units=${units}`



class Forecast extends Component {

    state = {
     cities: [
    {"coord":{"lon":-46.64,"lat":-23.55},
     "sys":{"country":"BR",
            "timezone":-10800,
            "sunrise":1558863512,
            "sunset":1558902537},
     "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
     "main":{"temp":18.63,"pressure":1022,"humidity":68,"temp_min":17,"temp_max":21.11},
     "visibility":10000,
     "wind":{"speed":2.6,"deg":110},
     "clouds":{"all":75},
     "dt":1558875701,
     "id":3448439,
     "name":"Sao Paulo"},

    {"coord":{"lon":-36.33,"lat":-9.8},
    "sys":{"country":"BR",
            "timezone":-10800,
            "sunrise":1558859650,
            "sunset":1558901450},
    "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
    "main":{"temp":25,"pressure":1016,"humidity":88,"temp_min":25,"temp_max":25},
    "visibility":10000,
    "wind":{"speed":1.5,"deg":90},
    "clouds":{"all":75},
    "dt":1558875700,
    "id":3405814,
    "name":"Belo Horizonte"},
    
    {"coord":{"lon":-47.93,"lat":-15.78},"sys":{"country":"BR","timezone":-10800,"sunrise":1558863014,"sunset":1558903655},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"main":{"temp":22,"pressure":1021,"humidity":78,"temp_min":22,"temp_max":22},"visibility":10000,"wind":{"speed":1,"deg":330},"clouds":{"all":0},"dt":1558875702,"id":3469058,"name":"Brasilia"},{"coord":{"lon":-38.51,"lat":-12.97},"sys":{"country":"BR","timezone":-10800,"sunrise":1558860477,"sunset":1558901670},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"main":{"temp":29,"pressure":1015,"humidity":70,"temp_min":29,"temp_max":29},"visibility":10000,"wind":{"speed":5.1,"deg":90},"clouds":{"all":20},"dt":1558875701,"id":3450554,"name":"Salvador"},{"coord":{"lon":-34.86,"lat":-7.12},"sys":{"country":"BR","timezone":-10800,"sunrise":1558859045,"sunset":1558901350},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"main":{"temp":29,"pressure":1014,"humidity":79,"temp_min":29,"temp_max":29},"visibility":10000,"wind":{"speed":3.6,"deg":150},"clouds":{"all":75},"dt":1558875700,"id":3397277,"name":"Joao Pessoa"},{"coord":{"lon":-43.21,"lat":-22.9},"sys":{"country":"BR","timezone":-10800,"sunrise":1558862618,"sunset":1558901785},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"main":{"temp":23.99,"pressure":1018,"humidity":57,"temp_min":22,"temp_max":26},"visibility":10000,"wind":{"speed":2.6,"deg":330},"clouds":{"all":75},"dt":1558875701,"id":3451190,"name":"Rio de Janeiro"},{"coord":{"lon":-35.53,"lat":-6.69},"sys":{"country":"BR","timezone":-10800,"sunrise":1558859165,"sunset":1558901551},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"main":{"temp":27.25,"pressure":1014.15,"humidity":66,"temp_min":27.25,"temp_max":27.25,"sea_level":1014.15,"grnd_level":969.15},"wind":{"speed":5.06,"deg":128.366},"clouds":{"all":80},"dt":1558875700,"id":3405863,"name":"Belem"},{"coord":{"lon":-49.27,"lat":-25.43},"sys":{"country":"BR","timezone":-10800,"sunrise":1558864353,"sunset":1558902958},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"main":{"temp":14.01,"pressure":1022,"humidity":100,"temp_min":11,"temp_max":16.11},"visibility":1500,"wind":{"speed":1,"deg":40},"clouds":{"all":75},"dt":1558875702,"id":3464975,"name":"Curitiba"},{"coord":{"lon":-38.52,"lat":-3.72},"sys":{"country":"BR","timezone":-10800,"sunrise":1558859606,"sunset":1558902545},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"main":{"temp":28.07,"pressure":1013,"humidity":88,"temp_min":27.78,"temp_max":28.33},"wind":{"speed":0.89,"deg":135},"clouds":{"all":78},"dt":1558875725,"id":6320062,"name":"Fortaleza"},{"coord":{"lon":-60.03,"lat":-3.1},"sys":{"country":"BR","timezone":-14400,"sunrise":1558864712,"sunset":1558907765},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"main":{"temp":28,"pressure":1013,"humidity":83,"temp_min":28,"temp_max":28},"visibility":10000,"wind":{"speed":1,"deg":80},"clouds":{"all":0},"dt":1558875706,"id":3663517,"name":"Manaus"}]};

     
    searchData = async () => { 
        // API call
        let data = await fetch(link);
        const res = await data.json();
        this.parseChecker(res);
    };

    parseChecker = async (res) => {
        if (res !== undefined) {
            this.updateFromServer(res);
        } else { console.log('error, data is undefined') }
    };

    updateFromServer = (res) => {
        let transitionObject = [...res.list]
        const updatedArray = transitionObject.filter(function(city) {
            return cities.indexOf(city);
          });
                                                            // console.log(updatedArray);
          this.setState({cities: updatedArray});
                                                            // console.log(this.state.cities[1].sys.country);
                                                            
                                                            console.log(this.state.cities);
    };


    render() {

        return (
            
            <div className={classes.Citiesapp}>
                <div className={classes.Title}>Capitais</div>
                <div className={classes.Area1}>
                <div className={classes.Minmax}>Min</div><div className={classes.Minmax}>Máx</div>
                </div>
                <SingleCity name={this.state.cities[0].name}
                            tempmin={this.state.cities[0].main.temp_min}
                            tempmax={this.state.cities[0].main.temp_max}
                            />
                <SingleCity name={this.state.cities[1].name}
                            tempmin={this.state.cities[1].main.temp_min}
                            tempmax={this.state.cities[1].main.temp_max}
                            />
                <SingleCity name={this.state.cities[2].name}
                            tempmin={this.state.cities[2].main.temp_min}
                            tempmax={this.state.cities[2].main.temp_max}
                            />
                <SingleCity name={this.state.cities[3].name}
                            tempmin={this.state.cities[3].main.temp_min}
                            tempmax={this.state.cities[3].main.temp_max}
                            />
                <SingleCity name={this.state.cities[4].name}
                            tempmin={this.state.cities[4].main.temp_min}
                            tempmax={this.state.cities[4].main.temp_max}
                            />
                <SingleCity name={this.state.cities[5].name}
                            tempmin={this.state.cities[5].main.temp_min}
                            tempmax={this.state.cities[5].main.temp_max}
                            />
                <SingleCity name={this.state.cities[6].name}
                            tempmin={this.state.cities[6].main.temp_min}
                            tempmax={this.state.cities[6].main.temp_max}
                            />
                <SingleCity name={this.state.cities[7].name}
                            tempmin={this.state.cities[7].main.temp_min}
                            tempmax={this.state.cities[7].main.temp_max}
                            />
                <SingleCity name={this.state.cities[8].name}
                            tempmin={this.state.cities[8].main.temp_min}
                            tempmax={this.state.cities[8].main.temp_max}
                            />
                <SingleCity name={this.state.cities[9].name}
                            tempmin={this.state.cities[9].main.temp_min}
                            tempmax={this.state.cities[9].main.temp_max}
                            />
            <button onClick={this.searchData}>Atualizar</button>

            </div>
            
        );

    }
};

export default Forecast;

