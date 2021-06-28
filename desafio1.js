//CALCULADORA DE IVA
function calcularIVA (producto){
    let iva = producto / 5.5
    let resultado = producto + iva
    return resultado
}

let NombreProducto = prompt("Nombre del producto")
let CostoProducto = Number(prompt("Precio del producto"))

alert (`tu ${NombreProducto} cuesta ${calcularIVA(CostoProducto)} con IVA`)
