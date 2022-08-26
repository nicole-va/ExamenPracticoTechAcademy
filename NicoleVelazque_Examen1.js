/*
Escribe un programa que calcule el salario semanal de un trabajador teniendo en cuenta
que las horas ordinarias (40 primeras horas de trabajo) se pagan a 265.00 USD la hora. A
partir de la hora 41, se pagan a 350.00 USD la hora. Tomando en cuenta que un trabajador
acumulo en la semana, 53 horas, el programa debe mostrar el monto a pagar por las horas
ordinarias y el monto a pagar por las horas extra. Ejemplo:

*/

let horasTrabajadas = 53;
let sueldoOrdinario = 0; 
let sueldoExtra = 0;
let diferenciaHoras 

sueldoOrdinario =  40 * 265;
console.log("El total a pagar por horas laborales normal (40hrs) es de: " + sueldoOrdinario);
if(horasTrabajadas > 40){
    diferenciaHoras = horasTrabajadas - 40;
    sueldoExtra = diferenciaHoras * 350;
    console.log("El total a pagar por horas Extra "+ diferenciaHoras + " hrs es de: " + sueldoExtra);
}