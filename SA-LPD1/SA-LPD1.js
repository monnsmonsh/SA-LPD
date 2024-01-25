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

    //comparamos qu el num1 sea mayor y/o igual
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        centro = (num2 >= num3) ? num2 : num3;
        menor = (num2 <= num3) ? num2 : num3;
        //comparamos qu el num2 sea mayor y/o igual
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        centro = (num1 >= num3) ? num1 : num3;
        menor = (num1 <= num3) ? num1 : num3;
        //identificamos por defaul del ciclo el orden de los numeros
    } else {
        mayor = num3;
        centro = (num1 >= num2) ? num1 : num2;
        menor = (num1 <= num2) ? num1 : num2;
    }

    // Imprimir por consola los números ya ordenados
    console.log("Mayor a menor: " + mayor + ", " + centro + ", " + menor);
    console.log("Menor a mayor: " + menor + ", " + centro + ", " + mayor);

    //SI es caso de que sean iguales
    // Imprimir mensaje si los números son iguales
    if (mayor === centro && centro === menor) {
        console.log("Los números son iguales.");
    }
}
