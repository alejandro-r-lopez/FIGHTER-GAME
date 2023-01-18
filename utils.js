export function renderMobs(mobs) {
    const newMob = document.createElement('li');
    const mobName = document.createElement('p');
    const mobHP = document.createElement('p');
    const mobImg = document.createElement('img');

    mobName.textContent = mobs.name;
    mobHP.textContent = mobs.hp;
    mobImg.src = './assets/mob-three.png';

    newMob.classList.add('mob-style');

    newMob.append(mobName, mobHP, mobImg);
    return newMob;
}
