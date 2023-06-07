// EJERCICIO 1
/* Dado el array `let array = ['ab', 'abb', 'abbabbabbaa']`
 eliminar las letras contiguas repetidas y devolver el array ordenado de mayor a menor.
 Salida esperada era
 `['abababa','ab','ab']`
*/

function eliminarLetrasRepetidas(array) {
  let resultado = [];

  for (let i = 0; i < array.length; i++) {
    let elemento = array[i];
    let nuevaCadena = elemento.charAt(0);

    for (let j = 1; j < elemento.length; j++) {
      if (elemento[j] !== elemento[j - 1]) {
        nuevaCadena += elemento[j];
      }
    }

    resultado.push(nuevaCadena);
  }

  return resultado.sort((a, b) => b.length - a.length);
}

let array = ['ab', 'abb', 'abbabbabbaa'];
let resultado = eliminarLetrasRepetidas(array);

console.log(resultado);
