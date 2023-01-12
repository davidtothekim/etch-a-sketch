// HTML Selectors & Events

let gridBox = document.querySelector('.grid');
let gridSizeSlider = document.querySelector('#gridSizeSlider');
let colorPicker = document.querySelector('#colorPicker');
let gridSizeLabel = document.querySelector('.gridSize');
let gridSizeContainer = document.querySelector('.gridSizeContainer');

let eraserTool = document.querySelector('.toolEraser');

let gridTool = document.querySelector('.toolGrid');
let clearBttn = document.querySelector('.bttnClear');

clearBttn.onclick = (e) => clearGrid();
colorPicker.oninput = (e) => setSelectedColor(e.target.value);
gridSizeSlider.oninput = (e) => drawGrid(e.target.value);
gridTool.onclick = () => toggleGridSlider();

// Variables

let selectedColour = '#ff0000';

let selectedTool = '';

let gridDimension = 16;
let mouseClicked = false;
document.body.onmousedown = () => (mouseClicked = true);
document.body.onmouseup = () => (mouseClicked = false);

//Functions

//Update Grid size text

function updateGridSize() {
	gridSizeLabel.innerText = `${gridSizeSlider.value} x ${gridSizeSlider.value}`;
}
//Change selected color

function setSelectedColor(colour) {
	selectedColour = colour;
}

// drawGrid

function drawGrid(gridDimension) {
	updateGridSize();
	let area = Math.pow(gridDimension, 2);

	gridBox.style.gridTemplateColumns = `repeat(${gridDimension}, 1fr)`;
	gridBox.style.gridTemplateRows = `repeat(${gridDimension}, 1fr)`;

	for (let i = 0; i <= area; i++) {
		let gridCell = drawGridCell();
		gridBox.appendChild(gridCell);
	}
}

// drawCell

function drawGridCell() {
	let gridElement = document.createElement('div');
	gridElement.classList.add('gridCell');

	gridElement.addEventListener('mousedown', changeColor);
	gridElement.addEventListener('mouseover', changeColor);

	return gridElement;
}

// Change colour of grid cells

function changeColor(event) {
	console.log();
	if (event.type === 'mouseover' && !mouseClicked) return;
	event.target.style.backgroundColor = selectedColour;
}

function changeColor2() {
	gridBox.style.backgroundColor = 'red';
}

// Clear grid cells

function clearGrid() {
	let gridCells = document.querySelectorAll('.gridCell');
	for (let element of gridCells) {
		element.style.backgroundColor = '#ffffff';
	}
}

// Toggle Grid Resizer

function toggleGridSlider() {
	console.log(gridSizeContainer.style.display);
	gridSizeContainer.classList.toggle('hidden');
}

// drawGrid();

drawGrid(gridDimension);
