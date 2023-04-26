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
const muteButton = document.getElementById('mute-button');
const imperialMarch = new Audio('./assets/Imperial-March.mp3');

let defeated = 0;
let HP = 2;
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

makeMove();

function playBackgroundMusic() {
    imperialMarch.volume = 0.3;
    return imperialMarch.paused ? imperialMarch.play() : imperialMarch.pause();
}

muteButton.addEventListener('click', () => {
    muteButton.classList.toggle('mute-button-toggle');
    playBackgroundMusic();
});

heroImg.classList.add('first-move');

function makeSound() {
    const explosion = new Audio('./assets/explosion.mp3');
    explosion.volume = 0.2;
    explosion.play();
}

function makeMove() {
    heroImg.classList.toggle('first-move');
}

displayMobs();
heroHP.textContent = HP;
defeatCount.textContent = defeated;

heroImg.src = './assets/x-wing.png';

function revertHitMark() {
    heroImg.src = 'assets/x-wing.png';
}

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
            if (Math.random() > 0.5) {
                HP--;
                heroImg.classList.add('shake');
                heroImg.src = './assets/x-wing-hit.png';

                setTimeout(revertHitMark, 600);
            } else {
                alert(`${mob.name} missed!`);
            }
            if (mob.hp === 0) {
                defeated++;
                makeSound();
            }
            if (HP === 0) {
                heroImg.src = 'assets/explosion.png';
                setTimeout(toggleGameOver, 600);
                HP = 10;
                defeated = 0;
            }

            function retreat() {
                heroImg.classList.remove('attack');
            }
            setTimeout(retreat, 900);
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
