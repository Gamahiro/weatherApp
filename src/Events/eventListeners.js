import { createDropDownOptions } from "../generateDOMelem/dynamicElements";
import { populateDom, getLocations } from "../index";

function addEvents() {
    const btn = document.querySelector('#searchBtn');
    const input = document.querySelector('#location');
    const dropdownContainer = document.querySelector('.dropdownContainer');

    btn.addEventListener('click', async () => {
        if(dropdownContainer.style.display !== 'block') {
            dropdownContainer.style.display = 'block';
        }
        let cityName = input.value;
        const cities = await getLocations(cityName);
        //input.value = '';
        
        if (cities === undefined){
            alert(`'${input.value}' was not found`);
        }
         else if (cities.length === 1) {
            populateDom(cities[0].lat, cities[0].lon);
        } else {
            createDropDownOptions(cities.length);
        
            for (let index = 0; index < cities.length; index++) {
                const element = cities[index];
                const DomElement = document.querySelector(`#item${index + 1}`);
                if(element.state === undefined) {
                    DomElement.textContent = `${element.name}, ${element.country}`;
                } else {
                    DomElement.textContent = `${element.name}, ${element.state}, ${element.country}`;

                }
                
                DomElement.addEventListener('click', async (e) => {
                    populateDom(element.lat, element.lon);
                    dropdownContainer.style.display = 'none';
                });
            }
        }

        
        //populateDom(cityName);
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            btn.click();
        }
    });
}

export {addEvents}