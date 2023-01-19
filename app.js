/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
import { renderMobs, toggleGameOver } from '/utils.js';
const heroImg = document.getElementById('hero-img');
const heroHP = document.getElementById('hero-hp');

const mobInput = document.getElementById('mob-input');
const mobButton = document.getElementById('mob-button');
const mobSpawn = document.getElementById('mob-spawn');

const defeatCount = document.getElementById('defeat-count');

const newGameButton = document.getElementById('new-game-button');

let defeated = 0;
let HP = 10;
let defaultMob = 'ENEMY';

const mobs = [
    {
        name: 'VADER',
        hp: 9,
    },
    {
        name: 'DOOKU',
        hp: 1,
    },
    {
        name: 'MAUL',
        hp: 5,
    },
];

displayMobs();
heroHP.textContent = HP;
defeatCount.textContent = defeated;

function displayMobs() {
    mobSpawn.textContent = '';
    for (let mob of mobs) {
        const newMob = renderMobs(mob);
        mobSpawn.append(newMob);

        newMob.addEventListener('click', () => {
            if (Math.random() > 0.5) {
                alert(`You hit ${mob.name}!`);
                mob.hp--;
                newMob.classList.add('flash');
            } else {
                alert(`You missed ${mob.name}`);
            }
            if (Math.random() > 0.5) {
                alert(`${mob.name} hit you!`);
                HP--;
            } else {
                alert(`${mob.name} missed!`);
            }
            if (mob.hp === 0) {
                defeated++;
            }
            if (HP === 0) {
                toggleGameOver();
                HP = 10;
                defeated = 0;
            }

            heroHP.textContent = HP;
            defeatCount.textContent = defeated;

            displayMobs();
        });
    }
}

mobButton.addEventListener('click', () => {
    const mobName = mobInput.value;

    const addNewMob = {
        name: mobName || defaultMob,
        hp: Math.ceil(Math.random() * 7),
    };

    mobs.push(addNewMob);

    mobInput.nodeValue = '';

    displayMobs();
});

newGameButton.addEventListener('click', () => {
    toggleGameOver();
    displayMobs();
});
