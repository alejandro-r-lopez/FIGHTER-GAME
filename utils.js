export function renderMobs(mobs) {
    const newMob = document.createElement('li');
    const mobName = document.createElement('p');
    const mobHP = document.createElement('p');
    const mobImg = document.createElement('p');

    mobName.textContent = mobs.name;
    mobHP.textContent = mobs.hp;

    if (mobs.hp > 0) {
        mobImg.classList.add('mob-image');
    }
    if (mobs.hp === -1) {
        hideDefeated();
    }
    if (mobs.hp === 0) {
        mobImg.src = './assets/explosion.png';
        mobName.textContent = '';
        mobHP.textContent = '';
        setTimeout(hideDefeated, 900);
        mobs.hp = -1;
    }

    // if (mobs.hp === mobs.hp--) {
    //     mobImg.src = './assets/mob-one-hit.png';
    // }

    function hideDefeated() {
        newMob.classList.add('hide');
    }

    mobImg.classList.add('mob-style');
    newMob.classList.add('mob-item');

    newMob.append(mobName, mobHP, mobImg);
    return newMob;
}

export function toggleGameOver() {
    const gameOverScreen = document.getElementById('game-over');
    const gameScreen = document.getElementById('game-screen');
    gameOverScreen.classList.toggle('hide');
    gameScreen.classList.toggle('hide');
}
