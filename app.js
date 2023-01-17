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
eraserTool.onclick = (e) => selectTool(e.target.parentElement, 'eraser');
pencilTool.onclick = (e) => selectTool(e.target.parentElement, 'pencil');
paintTool.onclick = (e) => selectTool(e.target.parentElement, 'paint');
gridTool.onclick = (e) => selectTool(e.target.parentElement, 'grid');

// Variables

let selectedColour = '#ff0000';

let selectedTool = '';

let gridDimension = 2;
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
	console.log(gridSizeContainer.style.display);
	gridSizeContainer.classList.toggle('hidden');
}

// Select tool

function selectTool(element, tool) {
	if (tool === 'grid') toggleGridSlider();

	selectedTool != tool ? (selectedTool = tool) : (selectedTool = '');

	element.classList.toggle('selected');
}

// Paint grid

function paintGrid(colour) {
	let gridCells = document.querySelectorAll('.gridCell');

	for (let element of gridCells) {
		let example = getComputedStyle(element, null);
		let bColor = example.getPropertyValue('background-color');
		console.log(bColor);
		// if (!element.style.backgroundColour) {
		// 	console.log(element.style.backgroundColor);
		// 	console.log(element.style.classList);
		// 	console.log('null');
		// } else {
		// 	console.log(element.style.backgroundColor);
		// }
	}
}

// RGBToHex(element.style.backgroundColor) !== colour

// Convert rgb to hex

function RGBToHex(rgb) {
	// Choose correct separator
	let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
	// Turn "rgb(r,g,b)" into [r,g,b]
	rgb = rgb.substr(4).split(')')[0].split(sep);

	let r = (+rgb[0]).toString(16),
		g = (+rgb[1]).toString(16),
		b = (+rgb[2]).toString(16);

	if (r.length == 1) r = '0' + r;
	if (g.length == 1) g = '0' + g;
	if (b.length == 1) b = '0' + b;

	let hex = '#' + r + g + b;

	return '#' + r + g + b;
}

RGBToHex('rgb(60, 52, 52)');
// drawGrid();

drawGrid(gridDimension);
