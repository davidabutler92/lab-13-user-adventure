import { setUserLocalStorage } from './helper-functions.js'
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    
    setUserLocalStorage({
        name: data.get('name'),
        class: data.get('class'),
        gold: 0,
        hp: 50,
        completed: {},
    });
    document.location.href = '../map/index.html';
});