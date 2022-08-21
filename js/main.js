let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

/*0 = green, 1 = red, 2 = amarelo, 3 = blue */

//Gera ordem aleatoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightcolor(elementColor, Number(i) + 1);
  }
};

//Proxima cor
let lightcolor = (element, Number) => {
  Number = Number * 500;

  setTimeout(() => {
    element.classList.add("selected");
  }, Number - 250);

  setTimeout(() => {
    element.classList.remove("selected");
  });
};

//Verifica se os botoes clicados são os mesmos da ordem do game
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Sua pontuação: ${score}\n Iniciando próximo nível!!`);
    nextLevel();
  }
};

//Clique do usuario
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add("selected");

  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
    checkOrder();
  }, 250);
};

//Retornar a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

//Next level
let nextLevel = () => {
  score++;
  shuffleOrder();
};

let gameOver = () => {
  alert(
    `Pontuação: ${score}\n Você perdeu! Clique em OK para jogar novamente!`
  );
  order = [];
  clickedOrder = [];
  playGame();
};

let playGame = () => {
  alert("Bem vindo ao Genius!");
  score = 0;
  nextLevel();
};

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
