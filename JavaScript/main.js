/* Descripción:
Este archivo contiene una serie de ejercicios básicos
en JavaScript para practicar el uso de:
- Condicionales (if / else)
- Bucles (for y while)
- Arrays
- Uso de console.log() */

/* 
Ejercicio 1: Validar edad con if / else

Se crea una variable llamada edad.
Si la edad es mayor o igual a 18 se permite el acceso,
caso contrario se deniega.
*/

let edad = 20;

if (edad >= 18) {
    console.log('El usuario tiene el acceso permitido');
}
else {
    comsole.log('El usuario tiene el acceso denegado');
}

// Resultado esperado: "Acceso permitido"

/* 
Ejercicio 2: Bucle for para contar del 1 al 10

Se utiliza un bucle for para imprimir
los números del 1 al 10 en consola.
*/

for (i = 1; i <= 10; i++) {
    console.log('Los numero a imprimir son: ' + i);
}

/* Resultado esperado:
1
2
3
4
5
6
7
8
9
10*/

/* 
Ejercicio 3: Bucle while para sumar números

Se utiliza un bucle while para sumar
los números del 1 al 5.
*/

let suma = 0;
let numero = 1;

while (numero <= 5) {
    suma =+ numero;
    numero++;
}

console.log('La suma final es de: ' + suma);

/* Explicacion: El bucle va a prermitir que se ejecute el codigo 
mientras la variable numero no sea menor o igual que 5 y dentro 
nuestro variable sumador suma va ir acumulando y sumando
la variable numero mientras esta se incrementa (++) a traves de las
iteraciones. entonces el resultado esperado es que la suma de: 15


/* 
EJERCICIO 4: Validación de edades con bucle y condicional

Se recorre un array de edades y se indica
si cada persona es mayor o menor de edad.
*/

let lista = [16, 21, 18, 14, 30];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] >= 18) {
        console.log('edad: ' + lista[i] + ' Mayor de edad');
    } else {
        console.log('edad: ' + lista[i] + ' Menor de edad');
    }
}

/*
Resultado esperado:
Edad 16 : Menor de edad
Edad 21 : Mayor de edad
Edad 18 : Mayor de edad
Edad 14 : Menor de edad
Edad 30 : Mayor de edad
*/

/* Mi reflexion final sobre estos ejercicios es que pude aprender como:
- Usar condicionales para tomar decisiones
- Utilizar bucles for y while para repetir acciones.
- Recorrer arrays y combinar bucles con condicionales.
- Pensar con logica para la resolucion de cada ejercicio.
*/
