import './style.css';
import { createWeather } from "./API calls/getWeather";
import { createCurrentContent, populateFooter, initDocument } from "./generateDOMelem/createDom";

const btn = document.querySelector('#searchBtn');
const input = document.querySelector('input');
let cityName = 'oslo';

btn.addEventListener('click', () => {
    cityName = input.value;
    populateDom(cityName);
});



async function populateDom(cityName) {
    const weatherObj = await createWeather(cityName);
    createCurrentContent(weatherObj);
}

async function footerData() {
    try {
        const city1 = await createWeather('Oslo');
    const city2 = await createWeather('London');
    const city3 = await createWeather('Madrid');
    const city4 = await createWeather('Orlando');
    populateFooter(city1, city2, city3, city4);

    } catch (error) {
        console.log(error);
    }
    
}

initDocument();
populateDom(cityName);
footerData();