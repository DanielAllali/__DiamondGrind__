let game = document.getElementById("game");

document.addEventListener("keydown", function (event) {
    if (event.keyCode == 32) {
        document.getElementById("start").style.display = "none";
        game.style.display = "flex";
    }
});

let income = document.getElementById("income");
let level = document.getElementById("level");
let levelCost = document.getElementById("levelCost");
let caveCost = document.getElementById("caveCost");

let incomeNum = 0;
let levelNum = 1;
let levelCostNum = 200;
let caveCostNum = 5000;

let nextCaveBtn = document.getElementById("nextCaveButton")
let levelUpBtn = document.getElementById("levelUpButton")

let caveCostMulti = 3;

let winDiv = document.getElementById("winDiv");
let pr = document.getElementById("pr");

function gemClick() {
    if (levelNum == 1) {
        incomeNum = incomeNum + Math.round(levelCostNum / 50);// /50
        income.innerHTML = incomeNum + "$";
        if (incomeNum > levelCostNum) {
            levelUpBtn.style.backgroundColor = "mediumspringgreen";
            levelUpBtn.style.cursor = "pointer";
        }
        if (incomeNum > caveCostNum) {
            nextCaveBtn.style.backgroundColor = "mediumspringgreen";
            nextCaveBtn.style.cursor = "pointer";
        }
    }
}

levelUpBtn.addEventListener("click", levelUpClick);
function levelUpClick() {
    if (incomeNum > levelCostNum) {
        incomeNum = incomeNum - levelCostNum;
        income.innerHTML = incomeNum + "$";
        levelCostNum = Math.round(levelCostNum * 3);
        levelCost.innerHTML = levelCostNum + "$";
        if (incomeNum < levelCostNum) {
            levelUpBtn.style.backgroundColor = "grey";
            levelUpBtn.style.cursor = "not-allowed";
        }
    }
}

let diamond = document.getElementById("diamond");

function nextCaveClick() {
    if (incomeNum > caveCostNum) {
        incomeNum = incomeNum - caveCostNum;
        income.innerHTML = incomeNum + "$";
        caveCostNum = caveCostNum * caveCostMulti;
        caveCostMulti = Math.round(caveCostMulti * 1.1);
        caveCost.innerHTML = caveCostNum + "$";
        if (incomeNum < caveCostNum) {
            nextCaveBtn.style.backgroundColor = "grey";
            nextCaveBtn.style.cursor = "not-allowed";
        }
        if (level.innerHTML == "1") {
            diamond.src = "./images/blueGem.png";
            game.style.backgroundImage = "url(./images/level2Bgc.avif)";
            level.innerHTML = "2";
            return;
        }
        if (level.innerHTML == "2") {
            diamond.src = "./images/purpleGem.png";
            game.style.backgroundImage = "url(./images/level3Bgc.avif)";
            level.innerHTML = "3";
            return;
        }
        if (level.innerHTML == "3") {
            diamond.src = "./images/greenGem.png";
            game.style.backgroundImage = "url(./images/level4Bgc.png)";
            level.innerHTML = "4";
            return;
        }
        if (level.innerHTML == "4") {
            diamond.src = "./images/goldGem.png";
            game.style.backgroundImage = "url(./images/level5Bgc.avif)";
            level.innerHTML = "5";
            return;
        }
        if (level.innerHTML == "5") {
            diamond.src = "./images/redGem.png";
            game.style.backgroundImage = "url(./images/level6Bgc.jpg)";
            level.innerHTML = "6";
            return;
        }
        if (level.innerHTML == "6") {
            diamond.src = "./images/whiteGem.png";
            game.style.backgroundImage = "url(./images/level7Bgc.jpg)";
            level.innerHTML = "7";
            return;
        }
        if (level.innerHTML == "7") {
            diamond.src = "./images/diamondLogo.png";
            game.style.backgroundImage = "url(./images/level8Bgc.avif)";
            level.innerHTML = "8";
            return;
        }
        if (level.innerHTML == "8") {
            game.style.display = "none";
            winDiv.style.display = "flex";
            pr.innerHTML = secounds + "s";
        }
    }
}
nextCaveBtn.addEventListener("click", nextCaveClick);

let secounds = 0;
function prSecounds() {
    secounds++;
}
let prInter = setInterval(prSecounds, 1000);

function again() {
    location.reload();
}