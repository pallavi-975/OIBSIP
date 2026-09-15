function convertTemperature() {

    // Get input value
    const input = document.getElementById("temperature").value;

    // Get selected unit
    const unit = document.getElementById("unit").value;

    // Get result elements
    const celsiusResult =
        document.getElementById("celsius-result");

    const fahrenheitResult =
        document.getElementById("fahrenheit-result");

    const kelvinResult =
        document.getElementById("kelvin-result");

    const errorMessage =
        document.getElementById("error-message");


    // Clear previous error
    errorMessage.textContent = "";


    // Check empty input
    if (input.trim() === "") {

        errorMessage.textContent =
            "⚠️ Please enter a temperature.";

        return;
    }


    // Convert input into number
    const temperature = Number(input);


    // Check invalid number
    if (isNaN(temperature)) {

        errorMessage.textContent =
            "⚠️ Please enter a valid number.";

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // ================= CELSIUS =================

    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit =
            (celsius * 9 / 5) + 32;

        kelvin =
            celsius + 273.15;
    }


    // ================= FAHRENHEIT =================

    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius =
            (fahrenheit - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;
    }


    // ================= KELVIN =================

    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius =
            kelvin - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;
    }


    // ================= ABSOLUTE ZERO CHECK =================

    if (celsius < -273.15) {

        errorMessage.textContent =
            "⚠️ Temperature cannot be below -273.15 °C.";

        return;
    }


    // ================= DISPLAY RESULTS =================

    celsiusResult.textContent =
        celsius.toFixed(2);

    fahrenheitResult.textContent =
        fahrenheit.toFixed(2);

    kelvinResult.textContent =
        kelvin.toFixed(2);
}