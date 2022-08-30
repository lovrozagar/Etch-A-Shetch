"use strict"

const BASE_GRID = 16;

const container = document.querySelector('#container');
addGrid(BASE_GRID);
let currentGridSize = BASE_GRID;
let currentPen = '';

const newGrid = document.querySelector('.new-grid');
newGrid.addEventListener('click', () => {
    currentGridSize = +prompt("Enter new grid size (range 1-100)");
    if(currentGridSize === null || currentGridSize === 0){
        currentGridSize = BASE_GRID;
    } 
    else if(currentGridSize > 100){
        currentGridSize = 100
    }
    container.replaceChildren();
    addGrid(currentGridSize);
    if(currentPen === 'black'){
        changeColorBlack();
    }
    else if(currentPen === 'rainbow'){
        changeColor();
    }
});

const resetGrid = document.querySelector('.reset-grid');
resetGrid.addEventListener('click', () => {
    container.replaceChildren();
    addGrid(currentGridSize);
    if(currentPen === 'black'){
        changeColorBlack();
    }
    else if(currentPen === 'rainbow'){
        changeColor();
    }
});

const blackPen = document.querySelector('.black-pen');
blackPen.addEventListener('click', () => {
    changeColorBlack();
    currentPen = 'black';
});

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => {
    changeColor();
    currentPen = 'rainbow';
});

function addGrid(gridSize) {
    let minWidth = 100 / gridSize;
    for (let i = 0; i < gridSize ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.minWidth = `${minWidth}%`;
        div.style.backgroundColor = 'white';
        div.style.opacity = 1;
        container.appendChild(div);
    }
}

function changeColorBlack() {
    let item = document.querySelectorAll('.grid-item');
    item.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `black`;
        });
    });
}


function changeColor() {
    let items = document.querySelectorAll('.grid-item');
    let tempColor;
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            let backgroundColor = getRandomColor();
            item.style.backgroundColor = `${backgroundColor}`;
            darken10Percent(item);
        });
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function darken10Percent(item){
    let tempColor = item.style.opacity;
    if (tempColor <= 0) return;
    item.style.opacity = tempColor - 0.1;
    return 0;
}

//change click to touch