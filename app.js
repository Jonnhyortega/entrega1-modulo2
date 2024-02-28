//  FUNCION 1: Crear una función que reciba
//  un número por parámetro e indique en consola
//  si el número es par o impar.
function parOImpar(a) {
  if (a % 2 == 0) {
    console.log("El numero ingresado es par");
  } else if (a % 2 === 1) {
    console.log("El numero ingresado es impar");
  }
}

parOImpar(5);
parOImpar(6);

console.log("fin ejercicio 1");

// FUNCION 2: Crear una función que reciba dos números por parámetro
// e indique en consola que
// número es mayor, y si ninguno lo es,
// indicar por consola que son iguales.
function devuelveMayor(n1, n2) {
  if (n1 > n2) {
    console.log(`El numero ${n1} es mayor que ${n2}`);
  } else if (n1 < n2) {
    console.log(`El numero ${n2} es mayor que ${n1}`);
  } else if (n1 === n2) {
    console.log(`Los numeros ${n1} y ${n2} son iguales.`);
  }
}

devuelveMayor(4, 2);
devuelveMayor(6, 8);

console.log("fin ejercicio 2");
// FUNCION 3:Crear una función que
// reciba un
// número por parámetro e
// indique en consola si ese
// número es múltiplo de 5.

function esMultiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " es múltiplo de 5");
  } else {
    console.log(numero + " no es múltiplo de 5");
  }
}

esMultiploDeCinco(8);
esMultiploDeCinco(25);

console.log("fin ejercicio 3");
// FUNCION 4: Crear una función que
//  reciba un número por parámetro e imprima
//   por consola todos los números desde el 0
//   hasta llegar a ese número.
function imprimirNumeros(index) {
  for (let i = 0; i < index; i++) {
    console.log(i);
  }
}

imprimirNumeros(10);
console.log("----------------------");
imprimirNumeros(20);

console.log("fin ejercicio 4");

// FUNCION 5: Crear una función que reciba una palabra
// y un número por parámetro e imprima
//  por consola  esa palabra la cantidad
// correspondiente al número indicado.

function imprimirPalabra(palabra, repeticiones) {
  for (let i = 0; i < repeticiones; i++) {
    console.log(palabra);
  }
}

imprimirPalabra("holis", 10);
imprimirPalabra("chausis", 2);

console.log("fin ejercicio 5");
// FUNCION 6: Crear una función que reciba
// un array por
// parámetro e imprima por consola
// todos los valores de ese array.

function imprimirValoresArr(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
  }
}

imprimirValoresArr([20, 10, 40, 50]);
console.log("--------------");
imprimirValoresArr([40, 20, 30, 20]);
console.log("fin ejercicio 6");
// FUNCION 7: Crear una función que reciba un array con 10
// números e imprima por consola
// todos los valores de ese array,
// menos el que se encuentre
// en la 5ta posición del mismo.
// Ayuda: Recuerden que el primer
// índice de un array es "0".

function imprimirValoresMenosI5(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] != arr[4]) {
      console.log(arr[i]);
    } else if (arr[i] == arr[4]) {
      console.log("Este numero no se puede imprimir");
    }
  }
}

imprimirValoresMenosI5([10, 20, 30, 40, 50, 60, 80, 90, 100]);
console.log("-----------");
imprimirValoresMenosI5([100, 200, 300, 400, 500, 600, 700, 800, 900, 100]);

console.log("fin ejercicio 7");
// FUNCION 8:  Crea una función que reciba
// un array de
// números y un número por
// parámetro e imprima por consola cada
// número del array multiplicado
// por el número pasado por parámetro.

function multiplicarValores(arr, multiplicador) {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i] * multiplicador);
  }
}

multiplicarValores([10, 20, 30, 40, 50, 60], 10);
console.log("----------");
multiplicarValores([100, 200, 300, 400, 500, 600], 10);
console.log("fin ejercicio 8");

console.log("Fin proyecto :D");
