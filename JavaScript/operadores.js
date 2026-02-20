// Operaciones y Expresiones en JavaScript


/* Descripción:
Este archivo contiene ejercicios prácticos para
comprender el uso de:
- Operadores aritméticos
- Operadores de asignación
- Precedencia de operadores
- Incremento y decremento
- Construcción de expresiones combinadas
*/


/* 
Ejercicio 1: Suma y Resta Básica

Se declaran dos variables numéricas y se realizan
operaciones básicas de suma y resta.
*/

let num1 = 20;
let num2 = 10;

let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;

console.log("Resultado de la suma:", resultadoSuma);
console.log("Resultado de la resta:", resultadoResta);

/*
Resultados esperados:
Resultado de la suma: 30
Resultado de la resta: 10
*/


/* 
Ejercicio 2: Multiplicación y División

Se utilizan las variables anteriores para realizar
multiplicación y división.
Se controla la división por cero.
*/

let multiplicacion = num1 * num2;
let division;

if (num2 !== 0) {
  division = num1 / num2;
  console.log("Resultado de la división:", division);
} else {
  console.log("No se puede dividir por cero");
}

console.log("Resultado de la multiplicación:", multiplicacion);

/*
Resultados esperados:
Resultado de la multiplicación: 200
Resultado de la división: 2
*/


/* 
Ejercicio 3: Operadores de Asignación

Se modifica el valor de una variable usando
operadores de asignación compuestos.
*/

let contador = 10;

contador += 5; // contador = contador + 5
console.log("Después de += 5:", contador);

contador -= 3; // contador = contador - 3
console.log("Después de -= 3:", contador);

contador *= 2; // contador = contador * 2
console.log("Después de *= 2:", contador);

contador /= 4; // contador = contador / 4
console.log("Después de /= 4:", contador);

/*
Resultados esperados:
Después de += 5: 15
Después de -= 3: 12
Después de *= 2: 24
Después de /= 4: 6
*/


/* 
Ejercicio 4: Precedencia de Operadores

Se demuestra cómo JavaScript evalúa expresiones
según la prioridad de operadores.
*/

let cuentaSinParentesis = 10 + 5 * 2 - 3;
let cuentaConParentesis = (10 + 5) * 2 - 3;

console.log("Resultado sin paréntesis:", cuentaSinParentesis);
console.log("Resultado con paréntesis:", cuentaConParentesis);

/*
Explicación:
- Sin paréntesis: 5 * 2 = 10 → 10 + 10 - 3 = 17
- Con paréntesis: (10 + 5) = 15 → 15 * 2 - 3 = 27
Resultados esperados:
Resultado sin paréntesis: 17
Resultado con paréntesis: 27
*/


/* 
Ejercicio 5: Incremento y Decremento

Se utilizan los operadores ++ y -- para modificar
el valor de una variable.
*/

let valor = 5;

valor++; // Incrementa en 1
console.log("Después del incremento:", valor);

valor--; // Decrementa en 1
console.log("Después del decremento:", valor);

/*
Resultados esperados:
Después del incremento: 6
Después del decremento: 5
*/


/* 
Ejercicio 6: Construcción de Expresiones Combinadas

Se calcula una expresión matemática combinada
usando variables y operadores.
*/

let total = (num1 + num2) * 3 - 4 / 2;

console.log("Resultado de la expresión combinada:", total);

/*
Cálculo:
(num1 + num2) = 30
30 * 3 = 90
4 / 2 = 2
90 - 2 = 88

Resultado esperado:
Resultado de la expresión combinada: 88
*/


/* Mi reflexion final sobre estos ejercicios es que ahora me permiten comprender:
- Cómo funcionan los operadores aritméticos.
- La importancia del orden de evaluación.
- El uso correcto de operadores de asignación.
- Cómo construir expresiones más complejas.
*/