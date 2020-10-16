import { USER } from './constants.js';

export function setUserLocalStorage(user) {
    const stringifyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringifyUser);
}

export function getUserLocalStorage() {
    const parseUser = localStorage.getItem(USER);
    return JSON.parse(parseUser);
}

export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === id) {
            return item;
        }
    }
}

export function getRadioValue(form) {
    let value;
    const radios = form.elements['choices'];
    radios.forEach(radio => {
        if (radio.checked) {
            value = radio.value;
        } 
    });
    return value;
}
// function getRadioVal(form, name) {
//     var val;
//     // get list of radio buttons with specified name
//     var radios = form.elements[name];
    
//     // loop through list of radio buttons
//     for (var i=0, len=radios.length; i<len; i++) {
//         if ( radios[i].checked ) { // radio checked?
//             val = radios[i].value; // if so, hold its value in val
//             break; // and break out of for loop
//         }
//     }
//     return val; // return value of checked radio or undefined if none checked
// }