function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (isNaN(temp)) {
        alert("Please enter a valid number");
        return;
    }

    if (unit === "Celsius") {
        const fahrenheit = (temp * 9/5) + 32;
        const kelvin = temp + 273.15;
        result = `${temp}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
    } else if (unit === "Fahrenheit") {
        const celsius = (temp - 32) * 5/9;
        const kelvin = celsius + 273.15;
        result = `${temp}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
    } else if (unit === "Kelvin") {
        const celsius = temp - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        result = `${temp}K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
    }

    document.getElementById('result').innerText = result;
}
