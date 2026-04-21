"use strict";
console.log("2:", 118 + 56);
console.log("3:", 12345 + 67890);
console.log("4:", 12 * 13);
console.log("5:", 321 - 213);
console.log("6:", 301 / 3);
console.log("7:", 301 % 3);
console.log("8:", -2 + 3 * 5);
console.log("9:", (20 + 5) % 6);
console.log("10:", 15 + -5 * 6 / 10);
console.log("11:", 2 + 10 / 5 * 2 - 7 % 1);
// Variables
let n1 = 10, n2 = 20, n3 = 30;
console.log("12 y 13:", n1, n2, n3);
let a = 121, b = 132;
console.log("14:", a * b);
let x = 285, y = 1396;
console.log("15:", x + y);
// -- Ejercicio 16 --
let dividendo16 = 3784;
let divisor16 = 16;
console.log("16:", dividendo16 % divisor16);
// -- Ejercicio 17 --
console.log("17:", n1 + n2 * n3);
// -- Ejercicio 18 --
let numero1 = 87;
let numero2 = 94;
console.log("18:", numero1 * numero2);
// -- Ejercicio 19 --
//let 1numero = 87; // ERROR: Invalid/Unexpected token. Las variables no pueden empezar con un número.
// let 2numero = 94;
// console.log("19:", 1numero * 2numero);
// -- Ejercicio 20 --
// let número 1 = 87; // ERROR: Unexpected number. Las variables no pueden contener espacios en blanco.
// let número 2 = 94;
// console.log("20:", número 1 * número 2);
// -- Ejercicio 21 --
let número1 = 87;
let número2 = 94;
console.log("21:", número1 * número2);
// -- Ejercicio 22 --
// Definimos la cantidad de metros prefijada que vamos a convertir
let metrosEj22 = 3000;
// Aplicamos la conversión: 1 milla = 1609 metros (dividimos por 1609 para obtener las millas)
let millasEj22 = metrosEj22 / 1609;
console.log("22:", millasEj22);
// -- Ejercicio 23 --
let ej23_num1 = Number(prompt("Ej 23 - Introduce un número:"));
let ej23_num2 = Number(prompt("Ej 23 - Introduce otro número:"));
console.log("23:", ej23_num1 * ej23_num2);
// -- Ejercicio 24 --
let ej24_div = Number(prompt("Ej 24 - Introduce el dividendo:"));
let ej24_dsor = Number(prompt("Ej 24 - Introduce el divisor:"));
console.log("24: Division =", ej24_div / ej24_dsor, "| Resto =", ej24_div % ej24_dsor);
// -- Ejercicio 25 --
let ej25_num1 = Number(prompt("Ej 25 - Introduce número 1:"));
let ej25_num2 = Number(prompt("Ej 25 - Introduce número 2:"));
let ej25_num3 = Number(prompt("Ej 25 - Introduce número 3:"));
console.log("25:", ej25_num1 + ej25_num2 + ej25_num3);
// -- Ejercicio 26 --
let millasNauticas = Number(prompt("Ej 26 - Introduce cantidad de millas náuticas:"));
console.log("26:", millasNauticas * 1852, "metros.");
// -- Ejercicio 27 --
// Objetivo: Calcular y mostrar en pantalla el producto de dos números introducidos por el usuario
// using System;
let ej27_num1 = Number(prompt("Ej 27 - Introduce primer número:"));
let ej27_num2 = Number(prompt("Ej 27 - Introduce segundo número:"));
console.log("27:", ej27_num1 * ej27_num2);
// -- Ejercicio 28 --
// Autor: Usuario | Fecha: 21 de Abril de 2026
// using System;
let ej28_div = Number(prompt("Ej 28 - Introduce el dividendo:"));
let ej28_dsor = Number(prompt("Ej 28 - Introduce el divisor:"));
console.log("28: Division =", ej28_div / ej28_dsor, "| Resto =", ej28_div % ej28_dsor);
// -- Ejercicio 29 --
let vala = Number(prompt("Ej 29 - Introduce el número a:"));
let valb = Number(prompt("Ej 29 - Introduce el número b:"));
let res1 = (vala + valb) * (vala - valb);
let res2 = (vala * vala) - (valb * valb);
console.log("29:", res1, res2);
