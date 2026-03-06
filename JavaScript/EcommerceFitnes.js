// Declaraciones globales
let eliminacion;
let eleccion;
let usuarioActual = null;


// Usuarios
class Usuario {

    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.carrito = [];
    }

}

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function guardarUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function registrar() {

    let email = prompt("Ingrese email:");
    if (!email) return;

    let password = prompt("Ingrese contraseña:");
    if (!password) return;

    let usuarios = obtenerUsuarios();
    let existe = usuarios.find(u => u.email === email);

    if (existe) {
        alert("Ese usuario ya está registrado");
        return;
    } else {
        let nuevoUsuario = new Usuario(email, password);

        usuarios.push(nuevoUsuario);
        guardarUsuarios(usuarios);

        alert("Usuario registrado correctamente");
    }
}

function login() {
    let email = prompt("Email:");
    let password = prompt("Contraseña:");

    let usuarios = obtenerUsuarios();

    let usuarioEncontrado = usuarios.find(u => u.email === email && u.password === password);

    if (usuarioEncontrado) {
        alert("Login correcto");
        usuarioActual = usuarioEncontrado;
        localStorage.setItem("sesionActiva", email);
    } else {
        alert("Datos incorrectos");
    }
}

function verificarSesion() {

    let emailGuardado = localStorage.getItem("sesionActiva");
    if (!emailGuardado) return;

    let usuarios = obtenerUsuarios();

    let usuario = usuarios.find(u => u.email === emailGuardado);

    if (usuario) {
        usuarioActual = usuario;
    }
}

function logout() {
    localStorage.removeItem("sesionActiva");
    usuarioActual = null;
    alert("Sesión cerrada");
}

function agregarAlCarrito(producto) {

    if (!usuarioActual) {
        alert("Debe iniciar sesión");
        return;
    }

    usuarioActual.carrito.push(producto);

    let usuarios = obtenerUsuarios();

    let indice = usuarios.findIndex(u => u.email === usuarioActual.email);

    if (indice !== -1) {
        usuarios[indice] = usuarioActual;
        guardarUsuarios(usuarios);
    }
}

function guardarUsuarioActual() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios = usuarios.map((u) => {
        if (u.email === usuarioActual.email) {
            return usuarioActual;
        }

        return u;
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

function menuPrincipal() {

    let opcion;

    if (usuarioActual) {

        opcion = prompt(
            "Bienvenido " + usuarioActual.email + "\n\n" +
            "1) Ir a la tienda\n" +
            "2) Ver carrito\n" +
            "3) Cerrar sesión\n" +
            "0) Salir"
        );

        switch (opcion) {

            case "1":
                menuTienda();
                break;

            case "2":
                alert(mostrarPedido());
                break;

            case "3":
                logout();
                break;

        }

    } else {

        opcion = prompt(
            "1) Registrarse\n" +
            "2) Iniciar sesion\n" +
            "0) Salir de la pagina"
        );

        switch (opcion) {

            case "1":
                registrar();
                break;

            case "2":
                login();
                break;

        }

    }

    return opcion;
}

// Tienda
let productos = [
    { nombre: 'proteina', precio: 30000 },
    { nombre: 'creatina', precio: 20000 },
    { nombre: 'vitaminas', precio: 50000 },
    { nombre: 'omega3', precio: 35000 },
    { nombre: 'aminoacido', precio: 28000 },
    { nombre: 'preentreno', precio: 85000 }
];

// Funciones
const añadirAlCarrito = (indice) => {

    if (!usuarioActual) {
        alert("Primero debe iniciar sesion")
        return
    }

    let productoBase = productos[indice];
    let carrito = usuarioActual.carrito

    let productoCarrito = carrito.find(p => p.nombre === productoBase.nombre)

    if (productoCarrito) {
        productoCarrito.cantidad++;
    } else {
        carrito.push({
            nombre: productoBase.nombre,
            precio: productoBase.precio,
            cantidad: 1
        });
    }
    guardarUsuarioActual();

    alert("Añadiste " + productoBase.nombre);
}

function calcularTotal() {
    if (!usuarioActual) {
        return;
    }

    let total = usuarioActual.carrito.reduce((total, prod) => total + prod.precio * prod.cantidad, 0);
    return total
}

function calcularCantidadTotal() {

    if (!usuarioActual) {
        return;
    }

    let cantTotal = usuarioActual.carrito.reduce((total, prod) => total + prod.cantidad, 0);

    return cantTotal;

}

const eliminarDeCarrito = (indice) => {

    let nombreProducto = productos[indice].nombre

    const producto = usuarioActual.carrito.find(p => p.nombre === nombreProducto)

    if (!producto) {
        alert("Ese producto no está en el carrito");
        return;
    }

    producto.cantidad--;

    if (producto.cantidad === 0) {
        usuarioActual.carrito = usuarioActual.carrito.filter(
            p => p.nombre !== nombreProducto
        );
    }

    guardarUsuarioActual();

    alert("Eliminaste " + productos[indice].nombre);
}

function modificarCarrito(indice) {

    let nombreProducto = productos[indice].nombre;

    let producto = usuarioActual.carrito.find(p => p.nombre = nombreProducto)

    if (!producto) {
        alert("El producto no esta en el carrito")
        return
    }

    let nuevaCantidad = prompt(
        "Actualmente tienes " + producto.cantidad +
        " de " + producto.nombre +
        ". Ingrese la nueva cantidad (0 para eliminar):"
    );

    if (nuevaCantidad === null) {
        return
    }

    nuevaCantidad = parseInt(nuevaCantidad)

    if (nuevaCantidad < 0) {
        alert("Cantidad inválida");
        return;
    }

    if (nuevaCantidad === 0) {
        usuarioActual.carrito = usuarioActual.carrito.filter(p => p.nombre !== nombreProducto);
    } else {
        producto.cantidad = nuevaCantidad;
    }

    guardarUsuarioActual();

    alert("Cantidad actualizada corrrectamente");
}

function menuModificar() {
    let opcion = prompt(
        mostrarPedido() +
        "\nSelecione que producto desea modificar: \n" +
        "1) Proteina\n" +
        "2) Creatina\n" +
        "3) Vitamina\n" +
        "4) Omega 3\n" +
        "5) Aminoacidos\n" +
        "6) Preentreno\n" +
        "0) Volver al menu principal"
    );

    if (opcion === "0" || opcion === null) {
        return;
    }

    let indice = parseInt(opcion) - 1;

    if (indice >= 0 && indice < productos.length) {
        modificarCarrito(indice);
    } else {
        alert("Opción inválida");
    }
}

function menuTienda() {

    let respuesta = "";
    while (respuesta !== "0") {
        respuesta = prompt("Diga que quiere elegir del menu: \n" +
            "1) Proteina\n" +
            "2) Creatina\n" +
            "3) Vitamina\n" +
            "4) Omega 3\n" +
            "5) Aminoacidos\n" +
            "6) Preentreno\n" +
            "T) Ver el total hasta el momento\n" +
            "E) eliminar producto del pedido\n" +
            "M) modificar carrito\n" +
            "0) Usted finalizo la compra"
        );

        if (respuesta == null) {
            eleccion = "0"
        } else {
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
                if (calcularCantidadTotal() === 0) {
                    alert("No hay productos para eliminar");
                    break;
                }

                eliminacion = "";

                while (eliminacion !== "0") {
                    menuEliminacion();
                }
                break;
            case "M":
                menuModificar();
                break;
            case "0":
                console.log("Usted salio del menu, Muchas gracias por la compra");
                break;
            default:
                alert("Usted selecciono una opcion que no esta en el menu.");
                break;

        }
    }
}

function menuEliminacion() {
    eliminacion = prompt(mostrarPedido() + "\n que producto va eliminar del carrito: \n" +
        "1) Proteina\n" +
        "2) Creatina\n" +
        "3) Vitamina\n" +
        "4) Omega 3\n" +
        "5) Aminoacidos\n" +
        "6) Preentreno\n" +
        "0) Volver al menu principal"
    );

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

    if (!usuarioActual) {
        return alert("Debe iniciar sesion");
    }

    const carrito = usuarioActual.carrito

    if (carrito.length === 0) {
        return "Pedido actal:\nNo hay productos en el carrito";
    }

    let listaEnCarrito = carrito.map(p => `${p.nombre}: ${p.cantidad}`).join("\n")

    return "pedido actual:\n" + listaEnCarrito;
}

// Main
while (eleccion !== "0") {

    eleccion = menuPrincipal();

}