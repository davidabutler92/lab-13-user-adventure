import quests from '../data.js';
import { createRadioChoice, completedQuest } from './quest-helper-functions.js';
import { findById, getUserLocalStorage, setUserLocalStorage} from '../helper-functions.js';

getUserLocalStorage();

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const quest = findById(quests, id);

if (!quest) {
    document.location = '../map/index.html';
}



const h1 = document.createElement('h1');
h1.textContent = quest.title;
section.append(h1);

const image = document.createElement('img');
image.src = quest.image;
section.append(image);

const description = document.createElement('div');
const p = document.createElement('p');
p.textContent = quest.description;
description.append(p);
section.append(description);

const form = document.createElement('form');
section.append(form);





const button = document.createElement('button');
button.textContent = 'Proceed';
button.type = 'submit';
form.append(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const character = getUserLocalStorage();

    character.hp += checked.hp;
    character.hp += quest.choices.gold;

    setUserLocalStorage(character);

});