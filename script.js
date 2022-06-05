const colorPicker = document.querySelector("#colorPicker");
const sizeSlider = document.querySelector("#sizeSlider");
const sizeLabel = document.querySelector("#sizeLabel");
let currentColor = colorPicker.value;
let currentSize = sizeSlider.value;





colorPicker.addEventListener("change", () => {
    currentColor = colorPicker.value;
});



sizeSlider.addEventListener("change", () => {
    currentSize = sizeSlider.value;
    sizeLabel.innerHTML = `${currentSize} x ${currentSize}`;
   
})





