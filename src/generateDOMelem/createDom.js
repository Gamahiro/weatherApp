import TempIconUrl from '../assets/icons/device_thermostat_FILL0_wght400_GRAD0_opsz48.svg';
import FeelsLikeIconUrl from '../assets/icons/dew_point_FILL0_wght400_GRAD0_opsz48.svg';
import weatherUrl from '../assets/icons/clear_day_FILL0_wght400_GRAD0_opsz48.svg'
import windSpeedUrl from '../assets/icons/air_FILL0_wght400_GRAD0_opsz48.svg'



function initDocument() {
    const searchBox = document.createElement('div');
    searchBox.className = 'searchBox';
    const content = document.createElement('div');
    content.className = 'content';
    const weatherGif = document.createElement('img');
    weatherGif.className = 'weatherGif';
    const hr3Container = document.createElement('div');
    hr3Container.className = 'hr3Container';
    const footer = document.createElement('footer')
    footer.className = 'footer';

    document.body.appendChild(searchBox);
    document.body.appendChild(content);
    document.body.appendChild(weatherGif);
    document.body.appendChild(hr3Container);
    document.body.appendChild(footer);

    const locInput = document.createElement('input');
    locInput.type = 'text';
    locInput.name = 'location';
    locInput.id = 'location';

    const searchBtn = document.createElement('button');
    searchBtn.id = 'searchBtn';
    searchBtn.textContent = 'Search';

    searchBox.appendChild(locInput);
    searchBox.appendChild(searchBtn);

    const locName = document.createElement('div');
    locName.className = 'locName';

    const locTemp = document.createElement('div');
    locTemp.className = 'locTemp';

    const weatherType = document.createElement('div');
    weatherType.className = 'weatherType';

    const feelsLike = document.createElement('div');
    feelsLike.className = 'feelsLike';

    const windSpeed = document.createElement('div');
    windSpeed.className = 'windSpeed';

    content.appendChild(locName);
    content.appendChild(locTemp);
    content.appendChild(weatherType);
    content.appendChild(feelsLike);
    content.appendChild(windSpeed);



    const city1 = document.createElement('div');
    city1.className = 'city1';

    const city2 = document.createElement('div');
    city2.className = 'city2';

    const city3 = document.createElement('div');
    city3.className = 'city3';

    const city4 = document.createElement('div');
    city4.className = 'city4';

    footer.appendChild(city1);
    footer.appendChild(city2);
    footer.appendChild(city3);
    footer.appendChild(city4);
};

function create3HrElem(hourlyWeatherObj) {
    console.log(hourlyWeatherObj);
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
    hrElem.appendChild(locTemp);
    hrElem.appendChild(feelsLike);
    hrElem.appendChild(weatherType);
}

function setWeatherGif(gifUrl) {
    document.querySelector('.weatherGif').src = gifUrl;
}

function removeChildElementsh3e() {
    const h3e = document.querySelector('.hr3Container');
    const length = h3e.children.length;

    for (let index = 0; index < length; index++) {
        h3e.removeChild(h3e.firstChild);
    }

}

function createCurrentContent(weatherObj) {

    const locName = document.querySelector('.locName');
    const locTemp = document.querySelector('.locTemp');
    const feelsLike = document.querySelector('.feelsLike')
    const weatherType = document.querySelector('.weatherType');
    const weatherSpeed = document.querySelector('.windSpeed');

    locName.textContent = weatherObj.name;

    const locTempIcon = document.createElement('img');
    locTempIcon.className = 'inlineIcon';
    locTempIcon.src = TempIconUrl;
    const locTempText = document.createElement('span');
    locTempText.textContent = 'Temperature: ' + weatherObj.temp + ' °C';
    locTemp.appendChild(locTempIcon);
    locTemp.appendChild(locTempText);

    const feelsLikeIcon = document.createElement('img');
    feelsLikeIcon.className = 'inlineIcon';
    feelsLikeIcon.src = FeelsLikeIconUrl;
    const feelsLikeText = document.createElement('span');
    feelsLikeText.textContent = 'Feels like: ' + weatherObj.feelsLike + ' °C';
    feelsLike.appendChild(feelsLikeIcon);
    feelsLike.appendChild(feelsLikeText);

    const weatherTypeIcon = document.createElement('img');
    weatherTypeIcon.className = 'inlineIcon';
    weatherTypeIcon.src = weatherUrl;
    const weatherTypeText = document.createElement('span');
    weatherTypeText.textContent = 'Weather: ' + weatherObj.weatherType;
    weatherType.appendChild(weatherTypeIcon);
    weatherType.appendChild(weatherTypeText);

    const weatherSpeedIcon = document.createElement('img');
    weatherSpeedIcon.className = 'inlineIcon';
    weatherSpeedIcon.src = windSpeedUrl;
    const weatherSpeedText = document.createElement('span');
    weatherSpeedText.textContent = weatherObj.windSpeed + ' m/s';
    weatherSpeed.appendChild(weatherSpeedIcon);
    weatherSpeed.appendChild(weatherSpeedText);
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


export { createCurrentContent, populateFooter, initDocument, setWeatherGif, create3HrElem, removeChildElementsh3e };