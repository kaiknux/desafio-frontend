import React, { Component } from 'react';
import SingleCity from './SingleCity/SingleCity';

import { WEATHER_KEY } from '../Keys';

const cities = [
    3451190, 3448439, 3405814, 3469058, 3405863, 3450554, 3464975, 6320062, 3663517, 3397277,
];
const units = 'metric';
const link = `http://api.openweathermap.org/data/2.5/group?id=${cities[0]},${cities[1]},${cities[2]},${cities[3]},${cities[4]},${cities[5]},${cities[6]},${cities[7]},${cities[8]},${cities[9]}&APPID=${WEATHER_KEY}&units=${units}`



class Forecast extends Component {

    state = {
     cities: [
        {
        "id": 3451190,
        "name": "Rio de ",
        "coord": {
            "lon": -43.2075,
            "lat": -22.902781
                },
        "main": { "temp": null},
        "sys": {"country": "BR"}
    }, {
        "id": 3448439,
        "name": "Sao Paulo",
        "country": "BR",
        "coord": {
            "lon": -46.636108,
            "lat": -23.547501
                },
        "main": { "temp": null},
        "sys": {"country": "BR"}
    }, {
        "id": 3405814,
        "name": "Belo Horizonte",
        "country": "BR",
        "coord": {
            "lon": -36.333328,
            "lat": -9.8
                },
        "main": { "temp": null},
        "sys": {"country": "BR"}
    }, {
        "id": 3469058,
        "name": "Brasilia",
        "country": "BR",
        "coord": {
            "lon": -47.929722,
            "lat": -15.77972
                },
        "main": { "temp": null},
        "sys": {"country": "BR"}
    }, {
        "id": 3405863,
        "name": "Belem",
        "country": "BR",
        "coord": {
            "lon": -35.533329,
            "lat": -6.69167
               },
        "main": { "temp": null},
        "sys": {"country": "BR"}
    }, {
        "id": 3450554,
        "name": "Salvador",
        "country": "BR",
        "coord": {
            "lon": -38.51083,
            "lat": -12.97111
                },
        "main": { "temp": null},
        "sys": {"country": "BR"}
    }, {
        "id": 3464975,
        "name": "Curitiba",
        "country": "BR",
        "coord": {
            "lon": -49.27306,
            "lat": -25.42778
                },
        "main": { "temp": null},
        "sys": {"country": "BR"}
    }, {
        "id": 6320062,
        "name": "Fortaleza",
        "country": "BR",
        "coord": {
            "lon": -38.524651,
            "lat": -3.72271
                },
        "main": { "temp": null},
        "sys": {"country": "BR"}
    }, {
        "id": 3663517,
        "name": "Manaus",
        "country": "BR",
        "coord": {
            "lon": -60.025002,
            "lat": -3.10194
                },
        "main": { "temp": null},
        "sys": {"country": "BR"}
    }, {
        "id": 3397277,
        "name": "Joao Pessoa",
        "country": "BR",
        "coord": {
            "lon": -34.86306,
            "lat": -7.115
                },
        "main": { "temp": null},
        "sys": {"country": "BR"}
    },
]};

    searchData = async () => { 
        // API call
        let data = await fetch(link);
                                                            console.log('inside API');
        const res = await data.json();
        this.parseChecker(res);
    };
    
    cityAdaptation = (updatedArray) => {
        const amor = updatedArray.main
        return amor;
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
    };

    


    render() {

        return (
            <div>
                        <SingleCity
                                name={this.state.cities[0].name}
                                id={this.state.cities[0].id}
                                country={this.state.cities[0].sys.country}
                                temp={this.state.cities[0].main.temp}
                                />
                        
            <button onClick={this.searchData}>Atualizar</button>
            <button onClick={this.teste}>Verificar</button>

            </div>
            
        );

    }
};

export default Forecast;

// RIO DE JANEIRO       3451190
// SÃO PAULO            3448439
// BELO HORIZONTE       3405814
// BRASÍLIA             3469058
// BELÉM                3405863

// SALVADOR             3450554
// CURITIBA             3464975
// FORTALEZA            6320062
// MANAUS               3663517
// JOÃO PESSOA          3397277

//MY KEY 200f283586f507e8c77b876afa998b97
