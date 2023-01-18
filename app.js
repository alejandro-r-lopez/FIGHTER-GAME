/* Imports */

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
import { renderMobs } from '/utils.js';
const heroImg = document.getElementById('hero-img');

const mobInput = document.getElementById('input');
const mobButton = document.getElementById('mob-button');
const mobSpawn = document.getElementById('mob-spawn');

const mobs = [
    {
        name: 'greg',
        hp: 5,
    },
    {
        name: 'mark',
        hp: 5,
    },
    {
        name: 'tim',
        hp: 5,
    },
];

displayMobs();

function displayMobs() {
    mobSpawn.textContent = '';
    for (let mob of mobs) {
        const newMob = renderMobs(mob);
        mobSpawn.append(newMob);

        newMob.addEventListener('click', () => {
            if (Math.random() > 0.5) {
                alert(`You hit ${mob.name}!`);
                mob.hp--;
            } else {
                alert(`You missed ${mob.name}`);
            }
            displayMobs();
        });
    }
}
