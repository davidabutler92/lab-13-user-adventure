import quests from '../data.js';
console.log(quests);

const ul = document.querySelector('ul');

quests.forEach(quest => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    
    li.style.position = 'absolute';
    li.style.left = quest.map.left;
    li.style.top = quest.map.top;
    li.classList.add('size');
    li.append(link);
    link.textContent = quest.title;
    link.href = `/quest/?id=${quest.id}`;
    ul.append(li);
});