const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
// Переменная с background
const gameBackground = new Image();
gameBackground.src = "../img/gameBack.png";
// Переменная с яблоком
const apple = new Image();
apple.src = "../img/apple.png";
const apple2 = new Image();
apple2.src = "../img/apple.png";
const apple3 = new Image();
apple3.src = "../img/apple.png";
// Переменная с корзиной
const box = new Image();
box.src = "../img/box.png";
// каждая клетка в 32 пикселя
let boxBack = 32;
// Переменная для подсчета очков
let score = 0;
// упавшие яблоки
let scoreDown = 0;
// Скорость падения яблок
let speed = 300;
// Таймер конца игры
let endGame = 10000;
// Объект яблоко позиция
let apllePos = {
    x: Math.floor((Math.random() * 20 + 1)) * boxBack,
    y: boxBack
}
let apllePos2 = {
    x: Math.floor((Math.random() * 20 + 1)) * boxBack,
    y: boxBack
}
let apllePos3 = {
    x: Math.floor((Math.random() * 20 + 1)) * boxBack,
    y: boxBack
}
let dir;
// Обработчик движения корзины
document.addEventListener('keydown', (event) => {
    if (event.keyCode == 37) {
        // стрелка влево
        if (boxGame.x > 0) {
            dir = "left";
            boxGame.x -= boxBack;
        }
    } else if (event.keyCode == 39) {
        // Стрелка вправо
        dir = "right";
        if (boxGame.x < 590) {
            boxGame.x += boxBack;
        }
    }
})
let boxGame = {
    x: 9 * boxBack,
    y: 13 * boxBack
}
function appleDown() {
    apllePos.y += boxBack;
    apllePos2.y += boxBack * 1.5;
    apllePos3.y += boxBack * 0.5;
}
// Рисовка в canvas
function drawImage() {
    ctx.drawImage(gameBackground, 0, 0);
    ctx.drawImage(apple, apllePos.x, apllePos.y);
    ctx.drawImage(apple2, apllePos2.x, apllePos2.y);
    ctx.drawImage(apple3, apllePos3.x, apllePos3.y);
    ctx.drawImage(box, boxGame.x, boxGame.y);
    // text
    ctx.fillStyle = "white";
    ctx.font = "32px Arial";
    ctx.fillText('Очки:', boxBack, boxBack);
    ctx.fillText(score, boxBack * 4, boxBack);
    if (apllePos.x === boxGame.x) {
        if (apllePos.y === boxGame.y) {
            score += 1;
            apllePos = {
                x: Math.floor((Math.random() * 20 + 1)) * boxBack,
                y: boxBack
            }
        }
    }
    if (apllePos.y > boxGame.y) {
        scoreDown += 1;
        apllePos = {
            x: Math.floor((Math.random() * 20 + 1)) * boxBack,
            y: boxBack
        }
    }
    if (apllePos2.x === boxGame.x) {
        if (apllePos2.y === boxGame.y) {
            score += 1;
            apllePos2 = {
                x: Math.floor((Math.random() * 20 + 1)) * boxBack,
                y: boxBack
            }
        }
    }
    if (apllePos2.y > boxGame.y) {
        scoreDown += 1;
        apllePos2 = {
            x: Math.floor((Math.random() * 20 + 1)) * boxBack,
            y: boxBack
        }
    }
    if (apllePos3.x === boxGame.x) {
        if (apllePos3.y === boxGame.y) {
            score += 1;
            apllePos3 = {
                x: Math.floor((Math.random() * 20 + 1)) * boxBack,
                y: boxBack
            }
        }
    }
    if (apllePos3.y > boxGame.y) {
        scoreDown += 1;
        apllePos3 = {
            x: Math.floor((Math.random() * 20 + 1)) * boxBack,
            y: boxBack
        }
    }

}




// Конец игры через
function startGame() {
    let game = setInterval(drawImage, 100);
    let appleDownStart = setInterval(appleDown, speed);
    // Ульта
    setTimeout(() => {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode == 32) {
                apllePos.x = boxGame.x;
                apllePos2.x = boxGame.x;
                apllePos3.x = boxGame.x;
            }
        });
        console.log('Ульта готова');
    }, 4000);
    let endGameTimer = setTimeout(() => {
        clearInterval(game);
        clearInterval(appleDownStart);
        canvas.style.display = 'none';
        const outDataGame = document.getElementById('outDataGame');
        outDataGameH1 = outDataGame.querySelectorAll('.h1Data');
        outDataGame.style.display = 'block';
        outDataGameH1[0].innerHTML = nameGamer.value;
        outDataGameH1[1].innerHTML = score;
        outDataGameH1[2].innerHTML = scoreDown;
        outDataGameH1[3].innerHTML = endGame / 1000;
    }, endGame)
}
