import './style.css';
import { getHourlyForecast, hourlyProcess, getWeatherGif, getWeatherData, getLocData, weatherProcess } from "./API calls/getWeather";
import { createCurrentContent, populateFooter, initDocument, setWeatherGif, create3HrElem, removeAllChildElement, createDropDownOptions } from "./generateDOMelem/createDom";
import { createDropDownMenu, dropdownToggle } from "./Events/dropdownMenu";

let cityName = 'oslo';

function addEvents() {
    const btn = document.querySelector('#searchBtn');
    const input = document.querySelector('#location');
    const dropdownContainer = document.querySelector('.dropdownContainer');

    btn.addEventListener('click', async () => {
        if(dropdownContainer.style.display !== 'block') {
            dropdownContainer.style.display = 'block';
        }
        cityName = input.value;
        const cities = await getLocations(cityName);
        //input.value = '';
        
        if (cities === undefined){
            alert(`'${input.value}' was not found`);
        }
         else if (cities.length === 1) {
            populateDom(cities[0].lat, cities[0].lon);
        } else {
            createDropDownOptions(cities.length);
        
            for (let index = 0; index < cities.length; index++) {
                const element = cities[index];
                const DomElement = document.querySelector(`#item${index + 1}`);
                if(element.state === undefined) {
                    DomElement.textContent = `${element.name}, ${element.country}`;
                } else {
                    DomElement.textContent = `${element.name}, ${element.state}, ${element.country}`;

                }
                
                DomElement.addEventListener('click', async (e) => {
                    populateDom(element.lat, element.lon);
                    dropdownContainer.style.display = 'none';
                });
            }
        }

        
        //populateDom(cityName);
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            btn.click();
        }
    });
}

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
