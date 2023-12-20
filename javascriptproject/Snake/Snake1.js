const gameBoard = document.getElementById("gameBoard");
const text = gameBoard.getContext("2d");
const scoreText = document.getElementById("scoreText");
const resetBtn = document.getElementById("resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "bisque";
const snakeColor = "brown";
const snakeBorder = "white";
const foodColor = "cadetblue";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
  { x: unitSize * 4, y: 0 },
  { x: unitSize * 3, y: 0 },
  { x: unitSize * 2, y: 0 },
  { x: unitSize, y: 0 },
  { x: 0, y: 0 },
];
window.addEventListener("keydown", change);
resetBtn.addEventListener("click", resetGame);

function gameStart() {
  running = true;
  scoreText.textContent = score;
  createFood();
  drawFood();
  next();
}

function next() {
  if (running) {
    setTimeout(() => {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      next();
    }, 150);
  } else {
    displayGameOver();
  }
}

function clearBoard() {
  text.fillStyle = boardBackground;
  text.fillRect(0, 0, gameWidth, gameHeight);
}
function createFood() {
  function randomFood(min, max) {
    const randNum =
      Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    return randNum;
  }
  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameWidth - unitSize);
  console.log(foodX);
}
function drawFood() {
  text.fillStyle = foodColor;
  text.fillRect(foodX, foodY, unitSize, unitSize);
}
function moveSnake() {
  const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
  snake.unshift(head);
  if (snake[0].x == foodX && snake[0].y == foodY) {
    score += 1;
    scoreText.textContent = score;
    createFood();
  } else {
    snake.pop();
  }
}
function drawSnake() {
  text.fillStyle = snakeColor;
  text.strokeStyle = snakeBorder;
  snake.forEach((snakePart) => {
    text.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
    text.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
  });
}
function change(event) {
  const keyPressed = event.keyCode;
  const left = 37;
  const up = 38;
  const right = 39;
  const down = 40;

  const goUp = yVelocity == -unitSize;
  const goDown = yVelocity == unitSize;
  const goRight = xVelocity == unitSize;
  const goLeft = xVelocity == -unitSize;

  switch (true) {
    case keyPressed == left && !goRight:
      xVelocity = -unitSize;
      yVelocity = 0;
      break;
    case keyPressed == up && !goDown:
      xVelocity = 0;
      yVelocity = -unitSize;
      break;
    case keyPressed == right && !goLeft:
      xVelocity = unitSize;
      yVelocity = 0;
      break;
    case keyPressed == down && !goUp:
      xVelocity = 0;
      yVelocity = unitSize;
      break;
  }
}
function checkGameOver() {
  switch (true) {
    case snake[0].x < 0:
      running = false;
      break;
    case snake[0].x >= gameWidth:
      running = false;
      break;
    case snake[0].y < 0:
      running = false;
      break;
    case snake[0].y >= gameHeight:
      running = false;
      break;
  }
  for (let i = 1; i < snake.length; i += 1) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
      running = false;
    }
  }
}
function displayGameOver() {
  text.font = "50px MV Boli";
  text.fillStyle = "black";
  text.textAlign = "center";
  text.fillText("Game Over!", gameWidth / 2, gameHeight / 2);
  running = false;
}
function resetGame() {
  score = 0;
  xVelocity = unitSize;
  yVelocity = 0;
  snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
  ];
  gameStart();
}
