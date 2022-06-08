const DEFAULT_MODE = "color";
const colorPicker = document.querySelector("#colorPicker");
const sizeSlider = document.querySelector("#sizeSlider");
const sizeLabel = document.querySelector("#sizeLabel");
const colorModeBtn = document.querySelector("#colorModeBtn");
const randomModeBtn = document.querySelector("#randomModeBtn");
const clearBtn = document.querySelector("#clearBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const grid = document.querySelector("#grid");
let currentColor = colorPicker.value;
let currentSize = sizeSlider.value;
let currentMode = DEFAULT_MODE;
let isMouseDown = false;



function createBoard() {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
    
    for (let i = 0; i<currentSize*currentSize; i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.addEventListener('mouseover', sketch);
        gridElement.addEventListener('mousedown', sketch);
        grid.appendChild(gridElement);
    }
    
}

function sketch(element) {
    if (element.type === 'mouseover' && !isMouseDown) return
    
    if(currentMode == "random"){

    }
    else if(currentMode == "eraser"){
        changeColor("#ffffff");
        
    }
    element.target.style.backgroundColor = currentColor;
    
    
}

function checkMode(mode){
    
    if (mode == "color"){
        colorModeBtn.classList.add("mode-active");
        randomModeBtn.classList.remove("mode-active");
        eraserBtn.classList.remove("mode-active");
        currentMode = "color";
    }else if (mode == "random"){
        randomModeBtn.classList.add("mode-active");
        colorModeBtn.classList.remove("mode-active");
        eraserBtn.classList.remove("mode-active");
        currentMode = "random";
    }else {
        eraserBtn.classList.add("mode-active");
        colorModeBtn.classList.remove("mode-active");
        randomModeBtn.classList.remove("mode-active");
        changeColor("#ffffff");
        currentMode = "eraser";
    }

}

function changeColor(color){
    currentColor = color;
    colorPicker.value = color;
    console.log(`color changed to ${color}`);
}

function clearBoard(){
    grid.innerHTML = '';
    createBoard();
}


colorPicker.addEventListener("change", () => {
    currentColor = colorPicker.value;
    
});



sizeSlider.addEventListener("change", () => {
    currentSize = sizeSlider.value;
    sizeLabel.innerHTML = `${currentSize} x ${currentSize}`;
    createBoard();
});

colorModeBtn.addEventListener("click", () => checkMode("color"));
randomModeBtn.addEventListener("click", () => checkMode("random"));
eraserBtn.addEventListener("click", () => checkMode("eraser"))
clearBtn.addEventListener("click", () => clearBoard());

document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);


window.onload = () => {
    createBoard();
    checkMode(DEFAULT_MODE);
}