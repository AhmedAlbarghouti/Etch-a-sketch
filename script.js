const colorPicker = document.querySelector("#colorPicker");
let currentColor = colorPicker.value;
const sizeSlider = document.querySelector("#sizeSlider");
let currentSize = sizeSlider.value;





colorPicker.addEventListener("change", () => {
    currentColor = colorPicker.value;
});



sizeSlider.addEventListener("change", () => {
    currentSize = sizeSlider.value;
})

