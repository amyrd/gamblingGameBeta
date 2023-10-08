let coins = 0;
let weaponLevel = 1;
let opponentLevel = 1;

function enterRoom(roomName) {
    hideAllRooms();
    document.getElementById(roomName).style.display = 'block';
}

function hideAllRooms() {
    let rooms = document.querySelectorAll('.room');
    rooms.forEach(room => room.style.display = 'none');
}

function buyUpgrade() {
    if (coins >= 50) {
        coins -= 50;
        weaponLevel += 1;
        updateDisplay();
    } else {
        alert('Not enough coins!');
    }
}

function fightOpponent() {
    let opponentSpeed = getRandom(opponentLevel, opponentLevel + 10);
    let opponentHealth = getRandom(opponentLevel, opponentLevel + 10);
    let opponentDamage = getRandom(opponentLevel, opponentLevel + 10);

    let playerSpeed = weaponLevel + getRandom(1, 10);

    if (playerSpeed >= opponentSpeed) {
        coins += opponentLevel * 10;
        opponentLevel += 1;
        document.getElementById('battleResult').textContent = 'You won!';
    } else {
        opponentLevel = Math.floor(opponentLevel / 2);
        document.getElementById('battleResult').textContent = 'You lost!';
    }

    updateDisplay();
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function returnToMain() {
    hideAllRooms();
    document.getElementById('mainRoom').style.display = 'block';
}

function updateDisplay() {
    document.getElementById('coins').textContent = coins;
    document.getElementById('weaponLevel').textContent = weaponLevel;
    document.getElementById('level').textContent = opponentLevel;
}

updateDisplay();
