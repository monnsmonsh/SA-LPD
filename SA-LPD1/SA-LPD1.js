// Solicitar al usuario 3 números por prompt
var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));
var num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Verificar si los números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales.");
} else {
    // Encontrar el número mayor, del centro y menor
    var mayor, centro, menor;

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        centro = (num2 >= num3) ? num2 : num3;
        menor = (num2 <= num3) ? num2 : num3;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        centro = (num1 >= num3) ? num1 : num3;
        menor = (num1 <= num3) ? num1 : num3;
    } else {
        mayor = num3;
        centro = (num1 >= num2) ? num1 : num2;
        menor = (num1 <= num2) ? num1 : num2;
    }

    // Imprimir por consola o DOM los números ordenados
    console.log("Mayor a menor: " + mayor + ", " + centro + ", " + menor);
    console.log("Menor a mayor: " + menor + ", " + centro + ", " + mayor);

    // Imprimir mensaje si los números son iguales
    if (mayor === centro && centro === menor) {
        console.log("Los números son iguales.");
    }
}
