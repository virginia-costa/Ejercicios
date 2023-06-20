// EJERCICIO 1
/* Dado el array `let array = ['ab', 'abb', 'abbabbabbaa']`
 eliminar las letras contiguas repetidas y devolver el array ordenado de mayor a menor.
 Salida esperada era
 `['abababa','ab','ab']`
*/

/* function eliminarLetrasRepetidas(array) {
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

console.log(resultado); */

//EJERCICIO 2
/*
El objetivo de la función FormatString es quitar todos los caracteres especiales de la cadena
de caracteres que viene como parámetro.
Solo se permiten:
    1. Las 26 letras del alfabeto inglés
    2. Números de 0-9
    3. Espacios
    4. Guiones medios y bajos.
        1. La siguiente función, ¿cumple con lo necesario para resolver el enunciado? No
 */
/* function FormatString(sentence) {
  const result = [];

  sentence = sentence.toUpperCase();

  for (let i = 0; i < sentence.length; i++) {
    const charCode = sentence.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) || // A-Z
      (charCode >= 48 && charCode <= 57) || // 0-9
      charCode === 32 || // space
      charCode === 45 || // hyphen
      charCode === 95 // underscore
    ) {
      result.push(sentence[i]);
    }
  }

  return result.join("");
}
const sentence = "Hola_123-Mundo!!";
const formattedSentence = FormatString(sentence);
console.log(formattedSentence);      */

//EJERCICIO 3
/**
 * Dado const input1 = [{ propiedad: 'b' }, { propiedad: 'a' }, { propiedad: 'c' }];
 * Crea una función que devuelva un nuevo arreglo con los objetos ordenados alfabéticamente
 * por una propiedad específica en orden descendente.
 *
 * Salida esperada
 *  [{ propiedad: 'c' }, { propiedad: 'b' }, { propiedad: 'a' }]
 */
/* function ordenarObjetos(arr, propiedad) {
  return arr.sort((a, b) => b[propiedad].localeCompare(a[propiedad]));
}

const input1 = [{ propiedad: 'b' }, { propiedad: 'a' }, { propiedad: 'c' }];
const resultado = ordenarObjetos(input1, 'propiedad');

console.log(resultado); */

//EJERCICIO 4
/*
 * Crea una función que tome dado: const input2 = { a: 'valor1', b: 'valor2', c: 'valor3' };
 * devuelva un nuevo objeto con todas las claves del objeto original,
 * pero con los valores convertidos a mayúsculas.
 *
 * Salida esperada
 *  const output2 = { a: 'VALOR1', b: 'VALOR2', c: 'VALOR3' };
 */
/* function convertirValoresAMayusculas(objeto) {
  const nuevoObjeto = {};

  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      nuevoObjeto[clave] = objeto[clave].toUpperCase();
    }
  }

  return nuevoObjeto;
}

const input2 = { a: 'valor1', b: 'valor2', c: 'valor3' };
const output2 = convertirValoresAMayusculas(input2);

console.log(output2); */

//EJERCICIO 5
/**
 * Crea una función que dado: const input3 = [1, 5, 2, 9, 3];
 * devuelva la suma de los números más grandes en el arreglo.
 *
 * Salida esperada
 * const output3 = 14;
 */
/* function sumaNumerosMasGrandes(arreglo) {
  arreglo.sort((a, b) => b - a);
  const suma = arreglo[0] + arreglo[1];
  return suma;
}

const input3 = [1, 5, 2, 9, 3];
const output3 = sumaNumerosMasGrandes(input3);

console.log(output3); */

//EJERCICIO 6
/*
 * Crea una función que dado: const input4 = { a: 'valor1', b: 'valor2', c: 'valor3' };
 * devuelva un nuevo objeto con todas las claves y valores invertidos.

Salida esperada
const output4 = { valor1: 'a', valor2: 'b', valor3: 'c' };
 */
/* function invertirClavesYValores(objeto) {
  const nuevoObjeto = {};

  for (let clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      nuevoObjeto[objeto[clave]] = clave;
    }
  }

  return nuevoObjeto;
}

const input4 = { a: 'valor1', b: 'valor2', c: 'valor3' };
const output4 = invertirClavesYValores(input4);

console.log(output4); */

//EJERCICIO 7
/*
 * Crea una función que dado: const input5 = [{ propiedad: 3 }, { propiedad: 1 }, { propiedad: 2 }]; devuelva un nuevo arreglo con los objetos ordenados numéricamente por una propiedad específica en orden ascendente.
   Salida esperada
    const output5 = [{ propiedad: 1 }, { propiedad: 2 }, { propiedad: 3 }];

 */
/*     function ordenarObjetosNumericamente(arr, propiedad) {
      return arr.sort((a, b) => a[propiedad] - b[propiedad]);
    }

    const input5 = [{ propiedad: 3 }, { propiedad: 1 }, { propiedad: 2 }];
    const output5 = ordenarObjetosNumericamente(input5, 'propiedad');

    console.log(output5); */

//EJERCICIO 8
/*
 * Crea una función que dado: const texto = "Hola hola HOLA mundo mundo Hola"; retorne un objeto que contenga la frecuencia de cada palabra en la cadena. La función debe ignorar el caso de las palabras.
   Salida esperada
        {
            hola: 3,
            mundo: 2
        }
 */
/* function obtenerFrecuenciaPalabras(texto) {
  const frecuenciaPalabras = {};

  texto = texto.toLowerCase();
  const palabras = texto.split(' ');

  for (let palabra of palabras) {
    if (frecuenciaPalabras.hasOwnProperty(palabra)) {
      frecuenciaPalabras[palabra] += 1;
    } else {
      frecuenciaPalabras[palabra] = 1;
    }
  }

  return frecuenciaPalabras;
}

const texto = "Hola hola HOLA mundo mundo Hola";
const resultado = obtenerFrecuenciaPalabras(texto);

console.log(resultado); */

//EJERCICIO 9
/*
 * Crea una función que dado: const texto = "Hola hola mundo mundo hola HOLA";
    const n = 2; 
    acepte una cadena de texto y un número n como parámetros y retorne 
    un array con las n palabras más comunes en la cadena. La función debe ignorar el caso de las palabras.
    
Salida esperada
        1. ['hola', 'mundo']
 */
/*       function obtenerFrecuenciaPalabras(texto) {
        const frecuenciaPalabras = {};
      
        texto = texto.toLowerCase();
        const palabras = texto.split(' ');
      
        for (let palabra of palabras) {
          if (frecuenciaPalabras.hasOwnProperty(palabra)) {
            frecuenciaPalabras[palabra] += 1;
          } else {
            frecuenciaPalabras[palabra] = 1;
          }
        }
      
        return frecuenciaPalabras;
      }
      
      const texto = "Hola hola HOLA mundo mundo Hola";
      const resultado = obtenerFrecuenciaPalabras(texto);
      
      console.log(resultado); */

//EJERCICIO 10
/*
 * 10. Crea una función que dado:
const personas = [
{ nombre: 'Juan', edad: 25, género: 'masculino' },
{ nombre: 'María', edad: 30, género: 'femenino' },
{ nombre: 'Carlos', edad: 20, género: 'masculino' },
{ nombre: 'Ana', edad: 22, género: 'femenino' },
{ nombre: 'Andrés', edad: 40, género: 'masculino' },
{ nombre: 'Laura', edad: 28, género: 'femenino' },
{ nombre: 'Pedro', edad: 18, género: 'masculino' },
{ nombre: 'Isabel', edad: 35, género: 'femenino' },
{ nombre: 'Ricardo', edad: 32, género: 'masculino' },
{ nombre: 'Gabriela', edad: 26, género: 'femenino' }
];
 La función debe retornar un objeto que contenga la cantidad de personas de cada género y el promedio de edad de cada género.
    1. **La salida esperada era:** 
        1. {
        masculino: {
        cantidad: 5,
        promedioEdad: 27
        },
        femenino: {
        cantidad: 5,
        promedioEdad: 28.2
        }
        }
 */
function obtenerEstadisticasGenero(personas) {
  let conteoMasculino = 0;
  let sumaEdadMasculino = 0;
  let conteoFemenino = 0;
  let sumaEdadFemenino = 0;

  for (let persona of personas) {
    if (persona.género === 'masculino') {
      conteoMasculino++;
      sumaEdadMasculino += persona.edad;
    } else if (persona.género === 'femenino') {
      conteoFemenino++;
      sumaEdadFemenino += persona.edad;
    }
  }

  const promedioEdadMasculino = sumaEdadMasculino / conteoMasculino;
  const promedioEdadFemenino = sumaEdadFemenino / conteoFemenino;

  const resultado = {
    masculino: {
      cantidad: conteoMasculino,
      promedioEdad: promedioEdadMasculino,
    },
    femenino: {
      cantidad: conteoFemenino,
      promedioEdad: promedioEdadFemenino,
    },
  };

  return resultado;
}

const personas = [
  { nombre: 'Juan', edad: 25, género: 'masculino' },
  { nombre: 'María', edad: 30, género: 'femenino' },
  { nombre: 'Carlos', edad: 20, género: 'masculino' },
  { nombre: 'Ana', edad: 22, género: 'femenino' },
  { nombre: 'Andrés', edad: 40, género: 'masculino' },
  { nombre: 'Laura', edad: 28, género: 'femenino' },
  { nombre: 'Pedro', edad: 18, género: 'masculino' },
  { nombre: 'Isabel', edad: 35, género: 'femenino' },
  { nombre: 'Ricardo', edad: 32, género: 'masculino' },
  { nombre: 'Gabriela', edad: 26, género: 'femenino' },
];

const resultado = obtenerEstadisticasGenero(personas);

console.log(resultado);


useEffect(() => {
  const email = localStorage.getItem("email");
  console.log("el email es:", email);
  const usuarioId = async (email) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      console.log("el email es:", email);
      const response = await fetch(
        `http://localhost:8000/api/usuarios/${email}`,
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        console.log(respuesta);
        const idUsuario = respuesta.idusuaro;
        setIdUsuario(idUsuario);
        localStorage.setItem("usuario_id", idUsuario);
        console.log(idUsuario);
      } else {
        const respuesta = await response.json();
        console.log(respuesta.error);
      }
    } catch (error) {
      alert("An unexpected error has occurred. Please try again.");
    }
  };
  usuarioId();
}, []);







