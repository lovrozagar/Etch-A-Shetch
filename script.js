"use strict"

const BASE_GRID = 16;

const container = document.querySelector('#container');
addGrid(BASE_GRID);

changeColor();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let newGridNumber = +prompt("Enter new grid size");
    container.replaceChildren();
    addGrid(newGridNumber);
    changeColor();
});

function addGrid(gridSize) {
    let minWidth = 100 / gridSize;
    for (let i = 0; i < gridSize ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.minWidth = `${minWidth}%`;
        container.appendChild(div);
    }
}

function changeColor() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'blue';
        });
    });
}