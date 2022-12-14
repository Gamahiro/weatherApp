function removeAllChildElement(classname) {
    const parent = document.querySelector(`.${classname}`);
    const length = parent.children.length;
    for (let index = 0; index < length; index++) {
        parent.removeChild(parent.firstChild);
    }
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

export {removeAllChildElement, returnColor}