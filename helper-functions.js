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