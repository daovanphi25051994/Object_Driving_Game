let arrayCars = ["https://m.hondacarindia.com/Content/mobile/images/home_banner/honda-city.jpg"];
let arrayImpediment = ["https://www.buly1803.com/3449/volcanic-pumice-stone.jpg"];
const MARGIN_TOP = 0;
const MARGIN_LEFT = 0;
const MARGIN_RIGHT = 500;
const MARGIN_BOTTOM = 800;

function Car(image, width, height, left, top) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.getWidth = function () {
        return this.width;
    }
    this.getHeight = function () {
        return this.height
    }
    this.getLeft = function () {
        return this.left;
    }
    this.getTop = function () {
        return this.top;
    }
    this.moveLeft = function () {
        this.left -= 100;
    }
    this.moveRight = function () {
        this.left += 100;
    }
    this.moveUp = function () {
        this.top -= 100;
    }
    this.moveDown = function () {
        this.top += 100;
    }
    this.createCar = function () {
        return '<img width="' + this.width + '"' +
            ' height="' + this.height + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }
}

let Impediment = function (image, width, height, top, left) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
    this.createImpediment = function () {
        return '<img width="' + this.width + '"' +
            ' height="' + this.height + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }
}

let lexus = new Car(arrayCars[0], 100, 100, 100, 400);
let stone = new Impediment(arrayImpediment[0], 100, 100, 100, 200);

function createCar() {
    document.getElementById("car").innerHTML = lexus.createCar();
}
function createImpediment() {
    document.getElementById("impediment").innerHTML = stone.createImpediment();
}

function moveCar(evt) {
    switch (evt.keyCode) {
        case 37 :
            if (lexus.getLeft() > MARGIN_LEFT) {
                lexus.moveLeft();
                createCar();
                checkLose();
            }
            break;
        case 39:
            if (lexus.getLeft() < (MARGIN_RIGHT - lexus.getWidth())) {
                lexus.moveRight();
                createCar();
                checkLose();
            }
            break;
        case 38:
            if (lexus.getTop() > MARGIN_TOP) {
                lexus.moveUp();
                createCar();
                checkLose();
            }
            break;
        case 40:
            if (lexus.getTop() < (MARGIN_BOTTOM - lexus.getHeight())) {
                lexus.moveDown();
                createCar();
                checkLose();
            }
            break;
    }
}

function start() {
    createImpediment();
    createCar();
    window.addEventListener("keydown", moveCar);
}
function checkLose() {
    if (stone.left === (lexus.left + lexus.getWidth()) && (stone.top + stone.height) === lexus.getTop()) {
        console.log("lose");
    }
    if (stone.left + stone.width === lexus.left && (stone.top + stone.height) === lexus.getTop()) {
        console.log("lose");
    }
    if (stone.left === (lexus.left + lexus.getWidth()) && stone.top === lexus.getTop()) {
        console.log("lose");
    }
    if (stone.left + stone.width === lexus.left && stone.top === lexus.getTop()) {
        console.log("lose");
    }
    if (stone.left === lexus.left && (stone.top + stone.height) === lexus.getTop()) {
        console.log("lose");
    }
    if (stone.left === lexus.left && stone.top === lexus.getTop() + lexus.getHeight()) {
        console.log("lose");
    }
    if (stone.left === (lexus.left + lexus.getWidth()) && stone.top === lexus.getTop() + lexus.getHeight()) {
        console.log("lose");
    }
    if (stone.left + stone.width === lexus.left && stone.top === lexus.getTop() + lexus.getHeight()) {
        console.log("lose");
    }
}



