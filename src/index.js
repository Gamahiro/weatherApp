import './style.css';
import { createWeather, getWeatherGif, getWeatherData, getLocData, weatherProcess, createWeatherHourly } from "./API calls/getWeather";
import { createCurrentContent, populateFooter, initDocument, setWeatherGif, create3HrElem, removeChildElementsh3e } from "./generateDOMelem/createDom";

let cityName = 'oslo';

function addEvents() {
    const btn = document.querySelector('#searchBtn');
    const input = document.querySelector('#location');

btn.addEventListener('click', () => {
    cityName = input.value;
    populateDom(cityName);
});

input.addEventListener('keypress', (event) => {
    if(event.key === "Enter") {
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
    removeChildElementsh3e();
    const hourlyWeather = await createWeatherHourly(cityName);
    for (let index = 0; index < hourlyWeather.length; index++) {
        const element = hourlyWeather[index];
    create3HrElem(element);
    }
    console.log(hourlyWeather);

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
