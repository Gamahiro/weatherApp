let key = 'f311acbde5084d948501ed5874b9b20e';
let unit = 'metric';

//API calls

async function getLocData(loc) {
//gets longitude and latitude of string name   
    const locURL = `https://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=1&appid=${key}`;
    try {
        const response = await fetch(locURL, {mode: 'cors'});
        const locData = await response.json();
        return locData;
    } catch (error) {
        console.log(error);
    }

}

async function getWeatherData(lat, lon) {

    try {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`
        const response = await fetch(weatherURL, {mode: 'cors'});
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
        const response = await fetch(giphyURL, {mode: 'cors'});
        const weatherGif = await response.json();
        return weatherGif.data[0].images.original.url;
    } catch (error) {
        console.log(error)
    }
}

//data processing
function weatherProcess(weatherData) {
    let name = weatherData.name;
    let temp = weatherData.main.temp;
    let feelsLike = weatherData.main.feels_like;
    let weatherType = weatherData.weather[0].main;
    let windSpeed = weatherData.wind.speed;

    return { name, temp, feelsLike, weatherType, windSpeed };
}

function locProcess(loc) {
    let lat = loc[0].lat;
    let lon = loc[0].lon;
    return { lat, lon };
}




// init
async function createWeather(locName) {
    const locData = await getLocData(locName);
    let loc =  locProcess(locData);
    let weatherData = await getWeatherData(loc.lat, loc.lon);
    const weatherProcessed = weatherProcess(weatherData);
    return weatherProcessed;
    }

export {createWeather, getWeatherGif};