// Ejercicio 1 parte 1
const number1 = prompt("Ingresa el primer número:");

const number2 = prompt("Ingresa el segundo número:");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

const result = number1 + number2;

alert("El resultado de la suma es: " + result);

// Ejercicio 1 parte 2
let temperaturaCelsius = prompt("Ingresa la temperatura en grados Celsius:");

let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

alert("La temperatura en grados Fahrenheit es: " + temperaturaFahrenheit);

// Ejercicio 1 parte 3
let numero = prompt("Ingresa un número: ");

let resultado = (numero / 5);

alert("El resultado es: " + resultado)

// Ejercicio 1 parte 4
let a = [1, 2, 3];
let tipoDato = typeof a;
alert("El tipo de dato de 'a' es: " + tipoDato);
