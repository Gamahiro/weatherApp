const btn = document.querySelector('button');
const input = document.querySelector('input');
let cityName = 'oslo';
let limit = 1;
let key = 'f311acbde5084d948501ed5874b9b20e'

btn.addEventListener('click', () => {
    cityName = input.value;
    populateDom(cityName);
});

async function getLocData(loc) {
    const locURL = `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=${limit}&appid=${key}`;
    try {
        const response = await fetch(locURL, { mode: 'cors' });
        const locData = await response.json();
        const locProcessed = locProcess(locData);
        return locProcessed;
    } catch (error) {
        console.log(error);
    }
}


async function getWeatherData(loc) {

    try {
        const latlon = await getLocData(loc);
        let lon = latlon.lon;
        let lat = latlon.lat;
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
        const response = await fetch(weatherURL, { mode: 'cors' });
        const weatherData = await response.json();
        const weatherProcessed = weatherProcess(weatherData);
        return weatherProcessed;
    } catch (error) {
        console.log(error);
    }
}

function weatherProcess(weatherData) {
    let name = weatherData.name;
    let temp = weatherData.main.temp;
    let feelsLike = weatherData.main.feels_like;
    let weatherType = weatherData.weather[0].main;
    let windSpeed = weatherData.wind.speed;

    return { name, temp, feelsLike, weatherType, windSpeed };
}

function locProcess(loc) {
    lat = loc[0].lat;
    lon = loc[0].lon;
    return { lat, lon };
}



async function populateDom(cityName) {
    const weatherObj = await getWeatherData(cityName);
    document.querySelector('.locName').textContent = weatherObj.name;
    document.querySelector('.locTemp').textContent = 'Temperature: ' + weatherObj.temp + ' °C';
    document.querySelector('.feelsLike').textContent = 'Feels like: ' + weatherObj.feelsLike + ' °C';
    document.querySelector('.weatherType').textContent = 'Weather: ' + weatherObj.weatherType;
    document.querySelector('.windSpeed').textContent = weatherObj.windSpeed + ' m/s';
}

async function populateFooter() {
    const osloW = document.querySelector('.osloW');
    const londonW = document.querySelector('.londonW');
    const madridW = document.querySelector('.madridW');
    const washingtonW = document.querySelector('.washingtonW');

    const weatherObjOslo = await getWeatherData('oslo');
    osloW.textContent = weatherObjOslo.name + ': ' + weatherObjOslo.temp + ' °C';
    osloW.style.backgroundColor = returnColor(weatherObjOslo.temp);

    const weatherObjLondon = await getWeatherData('london');
    londonW.textContent = weatherObjLondon.name + ': ' + weatherObjLondon.temp + ' °C';
    londonW.style.backgroundColor = returnColor(weatherObjLondon.temp);

    const weatherObjMadrid = await getWeatherData('madrid');
    madridW.textContent = weatherObjMadrid.name + ': ' + weatherObjMadrid.temp + ' °C';
    madridW.style.backgroundColor = returnColor(weatherObjMadrid.temp);

    const weatherObjWashington = await getWeatherData('washington');
    washingtonW.textContent = weatherObjWashington.name + ': ' + weatherObjWashington.temp + ' °C';
    washingtonW.style.backgroundColor = returnColor(weatherObjWashington.temp);
}

function returnColor(value) {
    if (value <= -1) {
        return 'skyblue';
    } else if (value >= 1 && value <= 10) {
        return 'greenyellow';
    } else if (value >= 11 && value <= 29) {
        return 'yellow';
    } else if (value >= 30) {
        return 'red';
    }


}

populateDom(cityName);
populateFooter();