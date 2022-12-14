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

export {weatherProcess, hourlyProcess}