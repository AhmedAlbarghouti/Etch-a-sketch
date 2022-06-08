const colorPicker = document.querySelector("#colorPicker");
const sizeSlider = document.querySelector("#sizeSlider");
const sizeLabel = document.querySelector("#sizeLabel");
const grid = document.querySelector("#grid");
let currentColor = colorPicker.value;
let currentSize = sizeSlider.value;



colorPicker.addEventListener("change", () => {
    currentColor = colorPicker.value;
});



sizeSlider.addEventListener("change", () => {
    currentSize = sizeSlider.value;
    sizeLabel.innerHTML = `${currentSize} x ${currentSize}`;
    createBoard();
})

function createBoard() {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
    
    for (let i = 0; i<currentSize*currentSize; i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        grid.appendChild(gridElement);
    }
    
}


createBoard();

