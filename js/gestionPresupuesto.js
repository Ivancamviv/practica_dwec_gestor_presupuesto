"use strict"
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;


function actualizarPresupuesto(valorIntroducido) {
    
    let numero;
    if(valorIntroducido >= 0 && typeof valorIntroducido === 'number' )
    {
        presupuesto = valorIntroducido;
        numero = presupuesto;
    }
    else{
      numero = -1;
    }
    
    return numero;
}

function mostrarPresupuesto() {
    // TODO
    return `Tu presupuesto actual es de ${presupuesto} €`
}

function listarGastos() {
    return gastos;
}
function anyadirGasto(id) {

}


function borrarGasto() {}
function calcularTotalGastos() {}
function calcularBalance() {}











function CrearGasto(descripcion,valor,fecha,...etiquetas) {
    // TODO
    this.descripcion = descripcion;
    this.etiquetas = [];
    if( etiquetas.length == 0 )
    {
        this.etiquetas = [];
    }
    else
    {
        
        for(var i in etiquetas)
        {
            let comparar = this.etiquetas.indexOf(etiquetas[i])
            if(comparar == -1){
                 this.etiquetas.push(etiquetas[i]);
            }
        }
        
        //this.anyadirEtiquetas(...etiquetas);
    }

    if( typeof fecha === "undefined")
    {
        this.fecha = new Date();
    }
    else
    {
        if( isNaN(Date.parse(fecha)) )
 	    {
   		     this.fecha = new Date();
        }
 	    else
 	    {
    	    this.fecha = Date.parse(fecha); 
        }
    }
    

    if(valor >= 0 && typeof valor === 'number' ){
        this.valor = valor;
    }
    else{
        this.valor = 0;
    }

    this.mostrarGasto = function(){
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
       }

    this.actualizarDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    }

    this.actualizarValor = function (valor) {
        if(valor >= 0 && typeof valor === 'number')
        {
          this.valor = valor;
        }
    }

    this.anyadirEtiquetas = function (...etiquetas) {
        for(var i in etiquetas)
        {
            let comparar = this.etiquetas.indexOf(etiquetas[i])
            if(comparar == -1){
                 this.etiquetas.push(etiquetas[i]);
            }
        }
    }
    
    this.mostrarGastoCompleto = function(){
        let texto = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.
Fecha: ${new Date(this.fecha).toLocaleString()}
Etiquetas:` + "\n";
for (let i = 0; i < this.etiquetas.length; i++) {
texto += "- " + this.etiquetas[i] + "\n" ;
  }

        return texto;
    }


    this.actualizarFecha = function (fecha){
        if( isNaN(Date.parse(fecha)) )
 	    {
   		     this.fecha;
        }
        else
        {
            this.fecha = Date.parse(fecha);
        }

    }



}



// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos, 
    anyadirGasto, 
    borrarGasto, 
    calcularTotalGastos,
    calcularBalance
}
