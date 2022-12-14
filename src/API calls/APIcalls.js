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



export { getWeatherGif, getWeatherData, getLocData, getHourlyForecast };