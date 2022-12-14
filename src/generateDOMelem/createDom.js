import TempIconUrl from '../assets/icons/device_thermostat_FILL0_wght400_GRAD0_opsz48.svg';
import FeelsLikeIconUrl from '../assets/icons/dew_point_FILL0_wght400_GRAD0_opsz48.svg';
import weatherUrl from '../assets/icons/clear_day_FILL0_wght400_GRAD0_opsz48.svg'
import windSpeedUrl from '../assets/icons/air_FILL0_wght400_GRAD0_opsz48.svg'

//DOM init functions
function createContainers() {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'mainContainer';
    const searchBox = document.createElement('div');
    searchBox.className = 'searchBox';
    const content = document.createElement('div');
    content.className = 'content';
    const contentContainer = document.createElement('div');
    contentContainer.className = 'contentContainer';
    const weatherGif = document.createElement('img');
    weatherGif.className = 'weatherGif';
    const hr3Container = document.createElement('div');
    hr3Container.className = 'hr3Container';
    const footer = document.createElement('footer')
    footer.className = 'footer';

    mainContainer.appendChild(footer);
    mainContainer.appendChild(searchBox);
    mainContainer.appendChild(contentContainer);
    contentContainer.appendChild(content);
    contentContainer.appendChild(weatherGif);
    contentContainer.appendChild(hr3Container);
    document.body.appendChild(mainContainer);
}

function createSearchBox() {
    const searchBox = document.querySelector('.searchBox');
    const locInput = document.createElement('input');
    locInput.type = 'text';
    locInput.name = 'location';
    locInput.id = 'location';
    searchBox.appendChild(locInput);


    const searchBtn = document.createElement('button');
    searchBtn.id = 'searchBtn';
    searchBtn.textContent = 'Search';
    searchBox.appendChild(searchBtn);

    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'dropdownContainer';
    const dropdownElements = document.createElement('div');
    dropdownElements.className = 'dropdownElements';
    dropdownContainer.appendChild(dropdownElements);

    searchBox.appendChild(dropdownContainer);

    
}



function createContent() {
    const content = document.querySelector('.content');
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

    const locTempIcon = document.createElement('img');
    locTempIcon.className = 'inlineIcon';
    locTempIcon.src = TempIconUrl;
    const locTempText = document.createElement('span');
    locTempText.className = 'locTempText';
    locTemp.appendChild(locTempIcon);
    locTemp.appendChild(locTempText);

    const feelsLikeIcon = document.createElement('img');
    feelsLikeIcon.className = 'inlineIcon';
    feelsLikeIcon.src = FeelsLikeIconUrl;
    const feelsLikeText = document.createElement('span');
    feelsLikeText.className = 'feelsLikeText';
    feelsLike.appendChild(feelsLikeIcon);
    feelsLike.appendChild(feelsLikeText);

    const weatherTypeIcon = document.createElement('img');
    weatherTypeIcon.className = 'inlineIcon';
    weatherTypeIcon.src = weatherUrl;
    const weatherTypeText = document.createElement('span');
    weatherTypeText.className = 'weatherTypeText';
    weatherType.appendChild(weatherTypeIcon);
    weatherType.appendChild(weatherTypeText);

    const windSpeedIcon = document.createElement('img');
    windSpeedIcon.className = 'inlineIcon';
    windSpeedIcon.src = windSpeedUrl;
    const windSpeedText = document.createElement('span');
    windSpeedText.className = 'windSpeedText';
    windSpeed.appendChild(windSpeedIcon);
    windSpeed.appendChild(windSpeedText);
}

function createFooterElems() {
    const footer = document.querySelector('.footer');
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
}

function initDocument() {
    createContainers();
    createSearchBox();
    createContent();
    createFooterElems();
};




export { initDocument };