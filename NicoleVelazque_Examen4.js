/*
Una empresa requiere calcular el pago de salarios según el tipo de empleado. Existen
empleados de confianza y empleados de sindicato, respectivamente ganan 500 y 250 USD
diarios. La nómina se calcula por 15 días. Calcular el pago total que gana cada empleado,
donde se le descuenta el 10% de impuestos si el empleado es de sindicato y 13% si es
empleado de confianza. (Guardar archivo con el nombre TuNombre_Examen4).

a. Defina las clases Persona, Empleado y Nómina

b. Clase Persona con propiedades, nombre, apellido y edad
i. el método getDetalles() el cual imprimirá en consola los atributos de la persona.
ii. El constructor recibe y asigna nombre y apellido a los atributos internos

c. Clase Empleado que hereda de Persona e incluye el atributo de Tipo (empleado de
confianza(C) y de sindicato(S))
i.Sobreescribir el método getDetalles() para que muestre en consola los detalles de Persona
y los de Empleado.
ii.El constructor recibe y asigna nombre, apellido y tipo a los atributos internos.

d. Clase Nomina tiene las propiedades de Empleados (arreglo)
i.Crear el método para calcular el pago por los días laborados será un número aleatorio del 5
al 15, dependiendo del tipo de empleado y descontar los impuestos.
Si es empleado de sindicato el pago por día es 350.00 USD, con un descuento de 10% de
impuestos;
_______________________________________________________________________________________________
_______________________________________________________________________________________________
Si es empleado de confianza el pago por día es de 500.00 USD, con un descuento del 13%
de impuestos.
ii.El constructor recibe arreglo empleado (dos empleados de confianza y uno de sindicato)
iii.Agregar método calcularNomina() que muestra a cada empleado, con el total a pagar por
empleado.
*/

class Persona{
    nombre
    apellido
    edad
    
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetallles(){
        console.log(this.nombre, this.apellido + " de " + this.edad);
    }

}

class Empleado extends Persona{
    tipo 
    dias 

    constructor(nombre,apellido,edad,tipo){
        super(nombre,apellido,edad);
        this.tipo = tipo;
    }

    getDetallles(){
        let cadena
        if(this.tipo == 'C'){
            cadena = '  C pertenece a empleado de confianza'
        }
        if(this.tipo == 'S'){
            cadena = '  S pertenece a empleado de sindicato'
        }
        return ("Empleado" + this.nombre, this.apellido + " de " + this.edad + " - " + cadena);
    }

}

class Nomina{
    empleados = [];
    sueldoFinal = 0;
    iteradorEmpleado = 0; 
    //diasLaborados = 0;
    constructor(empleados){
        this.empleados = empleados;
    }

    pagoPorDiasLaborados(i){
        //this.iteradorEmpleado = i;
    
        let diasLaborados = Math.floor((Math.random() * (15-5)) +5);
        this.dias = diasLaborados;
        let pagoPorDiasLaborados = 0;
        let impuestos = 0;
        
          if(this.empleados[i]['tipo'] == 'C'){
            pagoPorDiasLaborados = diasLaborados * 500;
            impuestos = 0.13;
            this.sueldoFinal = pagoPorDiasLaborados - (pagoPorDiasLaborados*impuestos);
          }
          if(this.empleados[i]['tipo'] == 'S'){
            pagoPorDiasLaborados = diasLaborados * 250;
            impuestos = 0.10;
            this.sueldoFinal = pagoPorDiasLaborados - (pagoPorDiasLaborados*impuestos)
        }
        return this.sueldoFinal;
    }

    calcularNomina(i){
         this.pagoPorDiasLaborados(i);
         let texto = this.empleados[i].getDetallles()
         return console.log(texto + " con un sueldo de " + this.sueldoFinal + " por " + this.dias + " dias trabajados");
    }
}

let arregloEmpleados = []
let empleado1 = new Empleado("Nicole","Velazque","22","C");
let empleado2 = new Empleado("Isa","Arroyo","30","C");
let empleado3 = new Empleado("Nadia","Jacome","32","S");
arregloEmpleados.push(empleado1);
arregloEmpleados.push(empleado2);
arregloEmpleados.push(empleado3);

let calcularNomina = new Nomina(arregloEmpleados);
calcularNomina.calcularNomina(0)
//calcularNomina.pagoPorDiasLaborados(1);
calcularNomina.calcularNomina(1)
//calcularNomina.pagoPorDiasLaborados(2);
calcularNomina.calcularNomina(2)
//calcularNomina.empleados[1].getDetallles()