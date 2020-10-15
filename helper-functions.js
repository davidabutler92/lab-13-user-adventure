import { USER } from './constants.js';

export function setUserLocalStorage(user) {
    const stringifyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringifyUser);
}

export function getUserLocalStorage() {
    const parseUser = localStorage.getItem(USER);
    return JSON.parse(parseUser);
}