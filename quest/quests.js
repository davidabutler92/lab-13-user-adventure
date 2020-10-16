import quests from '../data.js';
import { findById } from '../helper-functions.js';

const section = document.querySelector('section');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const quest = findById(quests, id);


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


quest.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');
    
    span.textContent = choice.description;
    
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = 'choice.id';
    radio.name = 'choices';
    
    label.append(span, radio);
    form.append(label);
});


