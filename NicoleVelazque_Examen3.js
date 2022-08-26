/* 
• Crear dos matrices de tamaño con los siguientes datos.
• Rellenar la primera con los datos: 3, 2, 1, 1, 2, 3, 2, 3, 1.
• Rellenar la segunda con los datos: 1, 1, 2, 2, 1, 1, 1, 2, 1.

• Mostrar el contenido de ambas matrices.
• Multiplicar la primera por la segunda y mostrar el resultado.
• Sumar la primera por la segunda y mostrar el resultado.
*/

let arreglo1 = [3, 2, 1, 1, 2, 3, 2, 3, 1];
let arreglo2 = [1, 1, 2, 2, 1, 1, 1, 2, 1];
let suma = [];
let multiplicacion = [];

//Mostrar el contenido de ambas matrices.
console.log("Arreglo 1: "+ arreglo1)
console.log("Arreglo 2: "+ arreglo2)

//Multiplicar la primera por la segunda y mostrar el resultado.
function operaciones(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        console.log("------------------------------");
        multiplicacion[i] = arr1[i] * arr2[i];
        suma[i] = arr1[i] + arr2[i];
        console.log(arr1[i] + " + " + arr2[i] + " = " + suma[i]);
        console.log(arr1[i] + " * " + arr2[i] + " = " + multiplicacion[i]); 
    }
}

operaciones(arreglo1,arreglo2);