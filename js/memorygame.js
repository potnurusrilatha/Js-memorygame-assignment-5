const moves = document.getElementById("movesCount");
const time = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.getElementById(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//items array

const items = [
    { name: "colorfull", image:"colorfull.png"},
    { name: "flowertop", image:"flowertop.png"},
    { name:"hibiscus", image:"hibiscus.png"},
    { name:"jasmine", image:"jasmine.png"},
    { name:"lilly", image:"lilly.png"},
    { name:"mariegold", image:"mariegold.png"},
    { name:"marigold", image:"marigold.png"},
    { name:"purpleflower", image:"purpleflower.png"},
    { name:"redrose", image:"redrose.png"},
    { name:"tree",image:"tree.png"},
];

//intial Time
let seconds = 0;
let minutes = 0;

//intialize moves and win count

let movesCount = 0;
winCount = 0;

//for timer

const timeGenerator = () => {
    seconds += 1;
    //minutes logic
    if(seconds >= 60) {
        minutes +=1;
        seconds = 0;
    }

};

//format time before displaying
let secondValue = seconds < 10 ? '0${seconds}' : seconds;
let minutesValue = minutes < 10 ? '0${minutes}' : minutes;
timeValue.innerHTML = '<span>Time:</span>${minutesValue}:${secondsValue}';

//for calculating moves
const movesCounter = () => {
    movesCount +=1;
    moves.innerHTML = '<span>Moves:</span>${movesCount}';
};

//pick random objects from the item array

const generateRandom = (size = 4) => {
    //temporary array
    let tempArray = [... items];
    //intializes cardValues array
    let cardValues = [];
    //sizeshould be double (4*4 matrix)/2 since pairs of obejects would exist
    size = (size * size) / 2;
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues,push(tempArray[randomIndex]);
        //once selected remove the object from temp array
        tempArray.splice(randomIndex, 1);

    }
    return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML="";
    cardValues = [...cardValues, ...cardValues];
    //simple shuffle
    cardValues.sort(() => Math.random() - 0.5);
    for(let i = 0; i < size * size; i++) {
    /* Create cards 
      before => front values(?)
      after => backside (actual image);
      data-card-values is a custom attribute which stores the names of the cards to match later */
    gameContainer.innerHTML += `
    <div class="card-container" data-card-values="${cardValues[i].name}">
        <div class="card-before">?</div>
        <div class="card-after">
        <img src="${cardValues[i].image}"
        class="image"/></div>
        </div>
        `;
    }
};

//intialize values and function call
const intializer = () => {
    result.innerHTML = "";
    winCount = 0;
    let cardValues = generateRandom();
    matrixGenerator(cardValues);
};

intializer();
