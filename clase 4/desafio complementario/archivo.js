
function precioConDescuento(precioCosto, montoDescuento){
    PrecioProducto = precioCosto - (precioCosto*montoDescuento/100)
}
let precioCosto = prompt("Inserta el precio del producto");
let montoDescuento = prompt("Inserta el porcentaje del descuento");
precioConDescuento (precioCosto,montoDescuento);
let precioMasIva =(PrecioProducto*0.21);

console.log ("el valor con el descuento es: " + PrecioProducto);
console.log ("y el iva es de: " + precioMasIva);
