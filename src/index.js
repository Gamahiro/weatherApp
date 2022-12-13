import './style.css';
import { getHourlyForecast, hourlyProcess,createWeather, getWeatherGif, getWeatherData, getLocData, weatherProcess, createWeatherHourly } from "./API calls/getWeather";
import { createCurrentContent, populateFooter, initDocument, setWeatherGif, create3HrElem, removeAllChildElement, createDropDownOptions } from "./generateDOMelem/createDom";
import { createDropDownMenu, dropdownToggle } from "./Events/dropdownMenu";

let cityName = 'oslo';

function addEvents() {
    const btn = document.querySelector('#searchBtn');
    const input = document.querySelector('#location');
    createDropDownMenu(btn, document.querySelector('.dropdownContainer'));

    btn.addEventListener('click', async () => {
        cityName = input.value;
        const cities = await getLocations(cityName);
        createDropDownOptions(cities.length);
        for (let index = 0; index < cities.length; index++) {
            const element = cities[index];
            const DomElement = document.querySelector(`#item${index + 1}`);
            DomElement.textContent = `${element.name}, ${element.country}`;
            DomElement.addEventListener('click', async (e) => {
                const weatherData = await getWeatherData(element.lat, element.lon);
                const weatherProcessed = weatherProcess(weatherData);
                dropdownToggle(document.querySelector('.dropdownContainer'));
                createCurrentContent(weatherProcessed);
                const weatherGif = await getWeatherGif(weatherProcessed.weatherType);
                setWeatherGif(weatherGif);
                removeAllChildElement('hr3Container');
                const hourlyWeather = await getHourlyForecast(element.lat, element.lon);
                const hourlyWeatherProcessed = await hourlyProcess(hourlyWeather);
                for (let index = 0; index < hourlyWeatherProcessed.length; index++) {
                    const element = hourlyWeatherProcessed[index];
                    create3HrElem(element);
                }

            });

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

async function populateDom(cityName) {
    const weatherObj = await createWeather(cityName);
    createCurrentContent(weatherObj);
    const weatherGif = await getWeatherGif(weatherObj.weatherType);
    setWeatherGif(weatherGif);
    removeAllChildElement('hr3Container');
    const hourlyWeather = await createWeatherHourly(cityName);
    for (let index = 0; index < hourlyWeather.length; index++) {
        const element = hourlyWeather[index];
        create3HrElem(element);
    }
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
populateDom(cityName);
footerData();
addEvents();
getLocations(cityName);
