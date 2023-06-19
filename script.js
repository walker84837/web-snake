// Inizializzazione
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
let main = document.querySelector("main");
main.appendChild(canvas);
// Costanti
let BLACK = "#403212";
let GREEN = "#C7AB00";
let RED = "#FF7f00";
let FPS = 13;
// Funzioni
function drawSnake(snakeList) {
  for (let _i = 0, snakeList_1 = snakeList; _i < snakeList_1.length; _i++) {
    let block = snakeList_1[_i];
    ctx.fillStyle = GREEN;
    ctx.fillRect(block[0], block[1], 20, 20);
  }
}
// letiabili
let snakeX = 0;
let snakeY = 0;
let snakeList = [[snakeX, snakeY]];
let snakeLength = 1;
let direction = "right";
let foodX = Math.floor((Math.random() * (canvas.width - 20)) / 20) * 20;
let foodY = Math.floor((Math.random() * (canvas.height - 20)) / 20) * 20;
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  } else if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (event.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  }
});
// Resize canvas to fit the available space
function resizeCanvas() {
  canvas.width = main.clientWidth;
  canvas.height = main.clientHeight;
  foodX = Math.floor((Math.random() * (canvas.width - 20)) / 20) * 20;
  foodY = Math.floor((Math.random() * (canvas.height - 20)) / 20) * 20;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
// Loop di gioco
let game_over = false;
function gameLoop() {
  if (game_over) {
    return;
  }
  // Aggiornamento serpente
  if (direction === "down") {
    snakeY += 20;
  } else if (direction === "left") {
    snakeX -= 20;
  } else if (direction === "right") {
    snakeX += 20;
  } else if (direction === "up") {
    snakeY -= 20;
  }
  snakeList.push([snakeX, snakeY]);
  if (snakeList.length > snakeLength) {
    snakeList.shift();
  }
  // Gestione collisioni
  if (snakeX === foodX && snakeY === foodY) {
    foodX = Math.floor((Math.random() * (canvas.width - 20)) / 20) * 20;
    foodY = Math.floor((Math.random() * (canvas.height - 20)) / 20) * 20;
    snakeLength += 1;
  }
  if (
    snakeX < 0 ||
    snakeX > canvas.width - 20 ||
    snakeY < 0 ||
    snakeY > canvas.height - 20
  ) {
    game_over = true;
  }
  for (let _i = 0, _a = snakeList.slice(0, -1); _i < _a.length; _i++) {
    let block = _a[_i];
    if (block[0] === snakeX && block[1] === snakeY) {
      game_over = true;
    }
  }
  // Disegno
  ctx.fillStyle = BLACK;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawSnake(snakeList);
  ctx.fillStyle = RED;
  ctx.fillRect(foodX, foodY, 20, 20);
  // FPS
  setTimeout(gameLoop, 1000 / FPS);
}
// Avvio del gioco
gameLoop();
