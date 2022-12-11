
function initDocument(){
    const content = document.createElement('div');
    content.className = 'content';
    const weatherGif = document.createElement('img');
    weatherGif.className = 'weatherGif';
    const footer = document.createElement('footer')
    footer.className = 'footer';
    document.body.appendChild(content);
    document.body.appendChild(weatherGif);
    document.body.appendChild(footer);

    const locName = document.createElement('div');
    locName.className = 'locName';

    const locTemp = document.createElement('div');
    locTemp.className = 'locTemp';

    const weatherType = document.createElement('div');
    weatherType.className = 'weatherType';

    const feelsLike =  document.createElement('div');
    feelsLike.className = 'feelsLike';
    
    const windSpeed =  document.createElement('div');
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

function setWeatherGif(gifUrl) {
    console.log(gifUrl);
    document.querySelector('.weatherGif').src = gifUrl;
}


function createCurrentContent(weatherObj) {

    document.querySelector('.locName').textContent = weatherObj.name;
    document.querySelector('.locTemp').textContent = 'Temperature: ' + weatherObj.temp + ' °C';
    document.querySelector('.feelsLike').textContent = 'Feels like: ' + weatherObj.feelsLike + ' °C';
    document.querySelector('.weatherType').textContent = 'Weather: ' + weatherObj.weatherType;
    document.querySelector('.windSpeed').textContent = weatherObj.windSpeed + ' m/s';
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


export {createCurrentContent, populateFooter, initDocument, setWeatherGif};