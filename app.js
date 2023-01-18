// HTML Selectors & Events

let gridBox = document.querySelector('.grid');
let gridSizeSlider = document.querySelector('#gridSizeSlider');
let colorPicker = document.querySelector('#colorPicker');
let gridSizeLabel = document.querySelector('.gridSize');
let gridSizeContainer = document.querySelector('.gridSizeContainer');

let eraserTool = document.querySelector('.toolEraser');
let pencilTool = document.querySelector('.toolPencil');
let paintTool = document.querySelector('.toolPaint');
let gridTool = document.querySelector('.toolGrid');
let clearBttn = document.querySelector('.bttnClear');
let gridCells = document.querySelectorAll('.gridCell');

clearBttn.onclick = (e) => clearGrid();
colorPicker.oninput = (e) => setSelectedColor(e.target.value);
gridSizeSlider.oninput = (e) => drawGrid(e.target.value);
gridTool.onclick = () => toggleGridSlider();
// eraserTool.onclick = (e) => selectTool(e.target.parentElement, 'eraser');
// pencilTool.onclick = (e) => selectTool(e.target.parentElement, 'pencil');
// paintTool.onclick = (e) => selectTool(e.target.parentElement, 'paint');
// gridTool.onclick = (e) => selectTool(e.target.parentElement, 'grid');

// Variables

let selectedColour = '#ff0000';

let selectedTool = '';

let tools = [ eraserTool, pencilTool, paintTool, gridTool ];

let gridDimension = 16;
let mouseClicked = false;
document.body.onmousedown = () => (mouseClicked = true);
document.body.onmouseup = () => (mouseClicked = false);

const BACKGROUNDCOLOUR = '#e1e7e5';

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
	gridBox.innerHTML = '';

	updateGridSize();
	let area = Math.pow(gridDimension, 2);

	gridBox.style.gridTemplateColumns = `repeat(${gridDimension}, 1fr)`;
	gridBox.style.gridTemplateRows = `repeat(${gridDimension}, 1fr)`;

	for (let i = 0; i < area; i++) {
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
	if (event.type === 'mouseover' && !mouseClicked) return;
	else if (selectedTool === 'eraser') event.target.style.backgroundColor = '#ffffff';
	else if (selectedTool === 'pencil') event.target.style.backgroundColor = selectedColour;
	else if (selectedTool === 'paint') paintGrid(selectedColour);
}

// Clear grid cells

function clearGrid() {
	let gridCells = document.querySelectorAll('.gridCell');
	console.log(gridCells);
	for (let element of gridCells) {
		element.style.backgroundColor = '#ffffff';
	}
}

// Toggle Grid Resizer

function toggleGridSlider() {
	gridSizeContainer.classList.toggle('hidden');
}

// Select tool

for (let tool of tools) {
	tool.addEventListener('click', selectTool);

	let type = tool.classList[0].split('tool')[1];
}

function selectTool(event) {
	let toolDiv = event.currentTarget;
	let toolName = toolDiv.classList[0].split('tool')[1].toLowerCase();

	if (!selectedTool) {
		toolDiv.classList.add('selected');
		selectedTool = toolName;
		console.log(selectedTool);
		return;
	}

	if (selectedTool === toolName) {
		selectedTool = '';
		toolDiv.classList.remove('selected');
		console.log(selectedTool);
		return;
	}

	if (selectedTool !== toolDiv) {
		for (let tool of tools) {
			tool.classList.remove('selected');
		}

		selectedTool = toolName;
		toolDiv.classList.add('selected');
		console.log(selectedTool);
	}
}

// Paint grid

function paintGrid(colour) {
	let gridCells = document.querySelectorAll('.gridCell');

	for (let element of gridCells) {
		element.style.backgroundColor = colour;
	}
}

drawGrid(gridDimension);

function test(str) {
	console.log(str);
}
