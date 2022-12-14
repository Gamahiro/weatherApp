import { returnColor, removeAllChildElement } from "./utility";

function createDropDownOptions(responseAmount) {
    const dropdownElements = document.querySelector('.dropdownElements');
    removeAllChildElement('dropdownElements');
    for (let index = 1; index <= responseAmount; index++) {
        const element = document.createElement('div');
        element.className = 'menuBtn';
        element.id = `item${index}`;
        dropdownElements.appendChild(element);
    }
}
function create3HrElem(hourlyWeatherObj) {
    const container = document.querySelector('.hr3Container');
    const hrElem = document.createElement('div');
    hrElem.className = 'hrElem';
    container.appendChild(hrElem);

    const locName = document.createElement('div');
    locName.textContent = hourlyWeatherObj.time;

    const locTemp = document.createElement('div');
    locTemp.textContent = 'Temperature: ' + hourlyWeatherObj.temp;

    const feelsLike = document.createElement('div');
    feelsLike.textContent = 'Feels like: ' + hourlyWeatherObj.feelsLike;

    const weatherType = document.createElement('img');
    weatherType.src = `http://openweathermap.org/img/w/${hourlyWeatherObj.weatherIcon}.png`;

    hrElem.appendChild(locName);
    hrElem.appendChild(weatherType);
    hrElem.appendChild(locTemp);
    hrElem.appendChild(feelsLike);
}

function setWeatherGif(gifUrl) {
    document.querySelector('.weatherGif').src = gifUrl;
}



function createCurrentContent(weatherObj) {
    const locName = document.querySelector('.locName');
    const locTempText = document.querySelector('.locTempText');
    const feelsLikeText = document.querySelector('.feelsLikeText')
    const weatherTypeText = document.querySelector('.weatherTypeText');
    const windSpeedText = document.querySelector('.windSpeedText');

    locName.textContent = `${weatherObj.name}, ${weatherObj.country}`;
    locTempText.textContent = 'Temperature: ' + weatherObj.temp + ' °C';
    feelsLikeText.textContent = 'Feels like: ' + weatherObj.feelsLike + ' °C';
    weatherTypeText.textContent = 'Weather: ' + weatherObj.weatherType;
    windSpeedText.textContent = weatherObj.windSpeed + ' m/s';
}

function populateFooter(city1, city2, city3, city4) {
    const elemCity1 = document.querySelector('.city1');
    const elemCity2 = document.querySelector('.city2');
    const elemCity3 = document.querySelector('.city3');
    const elemCity4 = document.querySelector('.city4');

    elemCity1.textContent = city1.name + ': ' + city1.temp + '°C';
    elemCity1.style.backgroundColor = returnColor(city1.temp);

    elemCity2.textContent = city2.name + ': ' + city2.temp + '°C';
    elemCity2.style.backgroundColor = returnColor(city2.temp);

    elemCity3.textContent = city3.name + ': ' + city3.temp + '°C';
    elemCity3.style.backgroundColor = returnColor(city3.temp);

    elemCity4.textContent = city4.name + ': ' + city4.temp + '°C';
    elemCity4.style.backgroundColor = returnColor(city4.temp);
}

export {create3HrElem, createCurrentContent, createDropDownOptions, populateFooter, setWeatherGif }