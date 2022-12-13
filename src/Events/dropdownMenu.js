function createDropDownMenu (btn, dropdownElements) {
    btn.addEventListener('click', (e) => {

        if(e.target !== e.currentTarget) {
            return;
        }
        dropdownToggle(dropdownElements);
    });
}
   //function to toggle display style between 'block' and 'none' on a DOM element
function dropdownToggle(toggleElement) {
    if(toggleElement.style.display !== 'block') {
        toggleElement.style.display = 'block';
    }
    else {
        return;
        //toggleElement.style.display = 'none';
    }
}


export {createDropDownMenu, dropdownToggle};