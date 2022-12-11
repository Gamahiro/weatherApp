

function createCurrentContent(weatherObj) {
    document.querySelector('.locName').textContent = weatherObj.name;
    document.querySelector('.locTemp').textContent = 'Temperature: ' + weatherObj.temp + ' °C';
    document.querySelector('.feelsLike').textContent = 'Feels like: ' + weatherObj.feelsLike + ' °C';
    document.querySelector('.weatherType').textContent = 'Weather: ' + weatherObj.weatherType;
    document.querySelector('.windSpeed').textContent = weatherObj.windSpeed + ' m/s';
}

 function populateFooter(city1, city2, city3, city4) {
    const osloW = document.querySelector('.osloW');
    const londonW = document.querySelector('.londonW');
    const madridW = document.querySelector('.madridW');
    const washingtonW = document.querySelector('.washingtonW');

    osloW.textContent = city1.name + ': ' + city1.temp + ' °C';
    osloW.style.backgroundColor = returnColor(city1.temp);

    londonW.textContent = city2.name + ': ' + city2.temp + ' °C';
    londonW.style.backgroundColor = returnColor(city2.temp);

    madridW.textContent = city3.name + ': ' + city3.temp + ' °C';
    madridW.style.backgroundColor = returnColor(city3.temp);

    washingtonW.textContent = city4.name + ': ' + city4.temp + ' °C';
    washingtonW.style.backgroundColor = returnColor(city4.temp);
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


export {createCurrentContent, populateFooter};