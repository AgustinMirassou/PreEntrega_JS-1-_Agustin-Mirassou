
let suma = 0;
let continuar;

do{
    const NUMERO = parseFloat(prompt("ingrese precio del producto"));

    if(!isNaN(NUMERO)){
    suma += NUMERO;
    continuar =prompt("desea agregar otro producto al carrito(SI o no)").toLowerCase();
    }else{
alert("ingrese un numero valido");
        continuar ="si";
    }
    }while(continuar === "si");

const TOTAL = suma * 1.01 ; // comision de la pagina
alert("el subtotal de la compra es " + suma + " y el total mas impuestos es " + TOTAL);

const CUOTAS3 = (TOTAL / 3 ).toFixed(2);
const CUOTAS6 = (TOTAL / 6 ).toFixed(2); 

alert("usted puede pagar en 3 cuotas " + CUOTAS3 + " o en 6 cuotas " + CUOTAS6  );
