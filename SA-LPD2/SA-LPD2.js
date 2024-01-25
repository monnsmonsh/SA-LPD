function convertTemp() {
    // Solicitamos al usuario la temperatura en grados Celsius
    var tempCelsius;
    do {
        var input = prompt("Ingrese la temperatura en grados Celsius:");
        tempCelsius = parseFloat(input);

        // Verificar si es un numero
        if (isNaN(tempCelsius)) {
            //si no son numeros mostramos un mensaje de alerta
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(tempCelsius));

    // Convertir la temperatura a grados Fahrenheit y Kelvin
    var tempFahrenheit = (tempCelsius * 9/5) + 32;
    var tempKelvin = tempCelsius + 273.15;

    // Imprimimos por consola las var tempFahrenheit y tempKelvin
    console.log("Grados Kelvin: " + tempKelvin.toFixed(2));
    console.log("Grados Fahrenheit: " + tempFahrenheit.toFixed(2));

    // Para mostrar los resultados mediante un alert
    alert("Grados Kelvin: " + tempKelvin.toFixed(2) + "\nGrados Fahrenheit: " + tempFahrenheit.toFixed(2));
}

// Llamar a la función para probar el programa
convertTemp();
