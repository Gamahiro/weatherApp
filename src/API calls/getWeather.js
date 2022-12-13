let key = 'f311acbde5084d948501ed5874b9b20e';
let unit = 'metric';

//API calls

async function getLocData(cityName) {
    //gets longitude and latitude of string name   
    const locURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${key}`;
    try {
        const response = await fetch(locURL, { mode: 'cors' });
        if(response.status !== 200) {
            throw new Error(`Statuscode: ${response.status}`);
        } else {
        const locData = await response.json();
        if(locData.length === 0) {
            throw new Error(`${cityName} not found`);
        }
        return locData;
    }
    } catch (error) {
        console.log(error);
    }

}

async function getWeatherData(lat, lon) {

    try {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`
        const response = await fetch(weatherURL, { mode: 'cors' });
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log(error);
    }
}

async function getWeatherGif(weather) {
    try {
        const giphyKey = 'mPks7xOqmUh3hb02SSufYq0vY6EOv0OA';
        const giphyURL = `https://api.giphy.com/v1/gifs/search?key=${giphyKey}&q=${weather}&limit=1&offset=0&rating=g&lang=en`;
        const response = await fetch(giphyURL, { mode: 'cors' });
        const weatherGif = await response.json();
        return weatherGif.data[0].images.original.url;
    } catch (error) {
        console.log(error)
    }
}

async function getHourlyForecast(lat, lon) {
    try {
        const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${unit}&cnt=5`;
        const response = await fetch(hourlyUrl, { mode: 'cors' });
        const hourlyWeather = await response.json();
        return hourlyWeather;
    } catch (error) {
        console.log(error)
    }
}

//data processing
function weatherProcess(weatherData) {
    let name = weatherData.name;
    let country = weatherData.sys.country
    let temp = weatherData.main.temp;
    let feelsLike = weatherData.main.feels_like;
    let weatherType = weatherData.weather[0].main;
    let windSpeed = weatherData.wind.speed;

    return { name, country, temp, feelsLike, weatherType, windSpeed };
}

async function hourlyProcess(hr3Data) {
    let hr3Array = [];

    for (let i = 0; i < hr3Data.list.length; i++) {

        const element = hr3Data.list[i];
        const time = element.dt_txt.slice(11);
        const temp = element.main.temp;
        const feelsLike = element.main.feels_like;
        const weatherIcon = element.weather[0].icon;
        const weatherObj = { time, temp, feelsLike, weatherIcon };
        hr3Array.push(weatherObj);
    }
    return hr3Array;
}

export { getWeatherGif, getWeatherData, getLocData, weatherProcess, getHourlyForecast, hourlyProcess };