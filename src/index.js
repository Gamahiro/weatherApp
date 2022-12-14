import './style.css';
import { getHourlyForecast, getWeatherGif, getWeatherData, getLocData } from "./API calls/APIcalls";
import { hourlyProcess, weatherProcess } from "./API calls/dataProcessing";
import { initDocument } from "./generateDOMelem/createDom";
import { create3HrElem, createCurrentContent, populateFooter, setWeatherGif  } from "./generateDOMelem/dynamicElements";
import { addEvents } from "./Events/eventListeners";
import { removeAllChildElement } from "./generateDOMelem/utility";

let cityName = 'oslo';

async function populateDom(lat, lon) {
    const weatherData = await getWeatherData(lat, lon);
    const weatherObj = weatherProcess(weatherData);
    createCurrentContent(weatherObj);
    const weatherGif = await getWeatherGif(weatherObj.weatherType);
    setWeatherGif(weatherGif);
    removeAllChildElement('hr3Container');
    const hourlyWeather = await getHourlyForecast(lat, lon);
    const hourlyWeatherObj = await hourlyProcess(hourlyWeather);
    for (let index = 0; index < hourlyWeatherObj.length; index++) {
        const element = hourlyWeatherObj[index];
        create3HrElem(element);
    }
}

async function getInitLoc(cityName) {
    let latlon = await getLocations(cityName);
    populateDom(latlon[0].lat, latlon[0].lon);
}

async function getLocations(cityName) {
    const locObj = await getLocData(cityName);
    return locObj;

}

async function footerData() {
    try {
        let loc = await getLocData('Oslo');
        let cityData = await getWeatherData(loc[0].lat, loc[0].lon);
        const city1 = weatherProcess(cityData);

        loc = await getLocData('London');
        cityData = await getWeatherData(loc[0].lat, loc[0].lon);
        const city2 = weatherProcess(cityData);

        loc = await getLocData('Madrid');
        cityData = await getWeatherData(loc[0].lat, loc[0].lon);
        const city3 = weatherProcess(cityData);

        loc = await getLocData('Orlando');
        cityData = await getWeatherData(loc[0].lat, loc[0].lon);
        const city4 = weatherProcess(cityData);

        populateFooter(city1, city2, city3, city4);

    } catch (error) {
        console.log(error);
    }

}


initDocument();
getInitLoc(cityName);
footerData();
addEvents();

export {populateDom, getLocations}