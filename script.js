document.addEventListener("DOMContentLoaded", function () {
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");

    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");

    const colorDisplay = document.getElementById("colorDisplay");
    const hexCode = document.getElementById("hexCode");

    function updateColor() {
        let red = parseInt(redRange.value);
        let green = parseInt(greenRange.value);
        let blue = parseInt(blueRange.value);

        let color = `rgb(${red}, ${green}, ${blue})`;
        let hex = `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;

        colorDisplay.style.backgroundColor = color;
        hexCode.textContent = hex.toUpperCase();

        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;
    }

    function syncRangeInput(event) {
        let value = event.target.value;
        if (value < 0) value = 0;
        if (value > 255) value = 255;
        event.target.value = value;

        if (event.target.id === "redInput") redRange.value = value;
        if (event.target.id === "greenInput") greenRange.value = value;
        if (event.target.id === "blueInput") blueRange.value = value;

        updateColor();
    }

    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);

    redInput.addEventListener("input", syncRangeInput);
    greenInput.addEventListener("input", syncRangeInput);
    blueInput.addEventListener("input", syncRangeInput);

    updateColor(); // Inicializa con el color predeterminado
});
