import quests from '../data.js';
import { findById } from '../helper-functions.js';

const section = document.querySelector('section');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const quest = findById(quests, id);


const h1 = document.createElement('h1');
h1.textContent = quest.title;
section.append(h1);

const form = document.createElement('form');
section.append(form);

quest.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;
    
});


