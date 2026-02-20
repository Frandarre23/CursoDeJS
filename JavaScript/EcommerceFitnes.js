// Declaraciones globales
let eliminacion;
let eleccion;
let productos = [
    { nombre: 'proteina', precio: 30000, cantidad: 0 },
    { nombre: 'creatina', precio: 20000, cantidad: 0 },
    { nombre: 'vitaminas', precio: 50000, cantidad: 0 },
    { nombre: 'omega3', precio: 35000, cantidad: 0 },
    { nombre: 'aminoacido', precio: 28000, cantidad: 0 },
    { nombre: 'preentreno', precio: 85000, cantidad: 0 }
];

// Funciones
const añadirAlCarrito = (indice) => {
    productos[indice].cantidad++;
    console.log("Añadiste " + productos[indice].nombre);
    alert("Añadiste " + productos[indice].nombre);
}

function calcularTotal() {
    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio * productos[i].cantidad;
    }

    return total
}

function calcularCantidadTotal() {
    let totalCantidad = 0;

    for (let i = 0; i < productos.length; i++) {
        totalCantidad += productos[i].cantidad;
    }

    return totalCantidad;
}

function eliminarDeCarrito(indice) {
    if (productos[indice].cantidad > 0) {
        console.log("Usted elimino " + productos[indice].nombre);
        alert("Usted elimino " + productos[indice].nombre)
        productos[indice].cantidad--
    } else {
        alert('No hay ' + productos[indice].nombre + ' para eliminar');

    }
}

function menuPrincipal() {

    let respuesta = prompt("Diga que quiere elegir del menu: \n 1) Proteina \n 2) Creatina \n 3) Vitamina \n 4) Omega 3 \n 5) Aminoacidos \n 6) Preentreno \n T) Ver el total hasta el momento \n E) eliminar producto del pedido \n 0) Salir del menu")

    if(respuesta == null){
        eleccion = "0"
    }else{
        eleccion = respuesta.toUpperCase();
    }

    switch (eleccion) {
        case "1":
            añadirAlCarrito(0)
            break;
        case "2":
            añadirAlCarrito(1)
            break;
        case "3":
            añadirAlCarrito(2)
            break;
        case "4":
            añadirAlCarrito(3)
            break;
        case "5":
            añadirAlCarrito(4)
            break;
        case "6":
            añadirAlCarrito(5)
            break;
        case "T":
            let total = calcularTotal()
            let totalProductos = calcularCantidadTotal()

            alert("El total es de: $" + total + " y el total de prdocutos es de: " + totalProductos)
            console.log("El total es de: $" + total + " y el total de prdocutos es de: " + totalProductos);
            break;
        case "E":
            if (calcularCantidadTotal === 0) {
                alert("No hay productos para eliminar");
                break;
            }
            
            eliminacion = "";

            while (eliminacion !== "0") {
                menuEliminacion();
            }
            break;
        case "0":
            console.log("Usted salio del menu, Muchas gracias por la compra");
            break;
        default:
            alert("Usted selecciono una opcion que no esta en el menu.");
            break;

    }
}

function menuEliminacion() {
    eliminacion = prompt(mostrarPedido() + " que producto va eliminar del carrito: \n 1) Proteina \n 2) Creatina \n 3) Vitamina \n 4) Omega 3 \n 5) Aminoacidos \n 6) Preentreno\n 0) Volver al menu principal");

    switch (eliminacion) {
        case "1":
            eliminarDeCarrito(0);
            break;
        case "2":
            eliminarDeCarrito(1);
            break;
        case "3":
            eliminarDeCarrito(2);
            break;
        case "4":
            eliminarDeCarrito(3);

            break;
        case "5":
            eliminarDeCarrito(4);

            break;
        case "6":
            eliminarDeCarrito(5);
            break;
        case "0":
            console.log("Usted volvio al menu principal, Gracias");
            break;
        default:
            alert("Opcion incorrecta.");
            break;
    }
}

function mostrarPedido() {
    let mensaje = "Pedido actual:\n";
    let hayProductos = false;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].cantidad > 0) {
            mensaje += productos[i].nombre + ": " + productos[i].cantidad + "\n";
            hayProductos = true;
        }
    }

    if (!hayProductos) {
        mensaje += "No hay productos en el carrito";
    }

    return mensaje;
}

// Main
while (eleccion !== "0") {

    menuPrincipal();

}