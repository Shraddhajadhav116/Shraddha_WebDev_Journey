let user_guess = [];
let machine_guess = [];

let levelCount = 1;
let gameStarted = false;

let start = document.querySelector(".start-disc");
let h4 = document.querySelector("h4");

let colorMap = {
    green: "box-1",
    yellow: "box-2",
    red: "box-3",
    purple: "box-4"
};

let random_array = ["green", "yellow", "red", "purple"];

start.addEventListener("click", function(){
    if(gameStarted == false){
        gameStarted = true;
        level_up();
    }
})

function gameFlash(box){
    box.classList.add("gameFlash");

    setTimeout(function(){
        box.classList.remove("gameFlash");
    }, 200);
}

function userFlash(box){
    box.classList.add("userFlash");

    setTimeout(function(){
        box.classList.remove("userFlash");
    }, 200);
}

function checkGuess(index){
    if(user_guess[index] === machine_guess[index]){
        if(user_guess.length == machine_guess.length){
         setTimeout(level_up, 1000);
        }
    }else{
       h4.innerText = "Game Over! Press start to start game again!"; 

       startBtnDisabled = false;
       
       start.innerText = (`Score : ${levelCount-1}`);
       
       setTimeout(() => {
        start.innerText = "Start";
        startBtnDisabled = true;
        gameReset();
       }, 2000);
    }
}
function level_up(){
    user_guess = [];
    h4.innerText = `Level ${levelCount} !`;
    levelCount++;

    let randInd = Math.floor(Math.random() * random_array.length);

    let randColor = random_array[randInd];

    let randColorBox = document.querySelector(`.${colorMap[randColor]}`);

    machine_guess.push(randColor);
    console.log("machine guess :", machine_guess);


    gameFlash(randColorBox);
}

function boxPress(){
    let box = this;
    userFlash(box);

    let userColor = box.getAttribute("id");

    user_guess.push(userColor);

    checkGuess(user_guess.length-1);

}

let allColorBoxes = document.querySelectorAll(".box");

for(box of allColorBoxes){
    box.addEventListener("click", boxPress);
}

function gameReset(){
    levelCount = 1;
    user_guess = [];
    machine_guess = [];
    gameStarted = false;
    // start.innerText = "Start";
}
