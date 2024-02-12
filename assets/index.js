//Funcionalidad para el menu Hamburgueza
const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

const showBurgerMenu = (e) => {
    burgerMenu.classList.toggle('show-burger-menu');
    navLinks.classList.toggle('burger-list');
    cartMenu.classList.remove('show-cart');
};

const closeOnClick = (e) => {
    if (!e.target.classList.contains('navbar-link')) return;
    navLinks.classList.remove('burger-list');
};

burgerBtn.addEventListener('click', showBurgerMenu);
//Fin


//! SIMULADOR DE COMPRA DE PRODUCTOS, CON LA
//?  CONDICION DE COMPRA CON DESCUENTO POR PAGO CON TRANSFERENCIA BANCARIA DEL 20%
//* PAGO EN EFECTIVO
// HASTA 3 CUOTAS SIN INTERES

// const MARCA = "PRO-JS GAMING";
// const BIENVENIDA = `¡Bienvenido a la ${MARCA}!`;
// alert(BIENVENIDA);
// console.log(BIENVENIDA);
// let nombre = prompt("Ingrese su Nombre");
// let apellido = prompt("Ingrese su Apellido");

// if (nombre !== null) {
//     nombre = nombre.toUpperCase();
// } else {
//     console.log('El nombre ingresado es nulo.');
// }

// if (apellido !== null) {
//     apellido = apellido.toUpperCase();
// } else {
//     console.log('El apellido ingresado es nulo.');
// }

// const productos = [
//     { nombre: 'Monitor Benq Zowie 27', precio: 135000 },
//     { nombre: 'RAM hyperx kingston', precio: 20000 },
//     { nombre: 'Gabinete Razor', precio: 230000 }
// ];

// function mostrarProductos() {
//     let mensaje = "Productos disponibles:\n";
//     productos.forEach((producto, index) => {
//         mensaje += `${index + 1}. ${producto.nombre}: $${producto.precio.toFixed(2)}\n`;
//     });
//     return mensaje;
// }

// function simularCompra() {
//     let carrito = {};
//     let total = 0;

//     while (true) {
//         const seleccion = prompt(`${mostrarProductos()}\nIngrese el número del producto (o escriba "fin" para salir):`);

//         if (seleccion.toLowerCase() === 'fin') {
//             break;
//         }

//         const seleccionIndex = parseInt(seleccion) - 1;

//         if (!isNaN(seleccionIndex) && seleccionIndex >= 0 && seleccionIndex < productos.length) {
//             const cantidad = parseInt(prompt('Ingrese la cantidad de unidades:'));

//             if (cantidad > 0) {
//                 const productoSeleccionado = productos[seleccionIndex].nombre;
//                 carrito[productoSeleccionado] = cantidad;
//                 total += productos[seleccionIndex].precio * cantidad;

//                 const continuarCompra = prompt('¿Desea seguir comprando? (si/no)');
//                 if (continuarCompra.toLowerCase() === 'no') {
//                     break;
//                 }
//             } else {
//                 alert('La cantidad ingresada no es válida. Inténtelo de nuevo.');
//             }
//         } else {
//             alert('Número de producto no válido. Inténtelo de nuevo.');
//         }
//     }

//     console.log('Resumen de la compra:');
//     for (const producto in carrito) {
//         console.log(`${producto}: ${carrito[producto]} unidades`);
//     }

//     if (total > 0) {
//         let descuentoAplicado = total;

//         const medioDePago = prompt(`Seleccione el medio de pago:\n1. Efectivo\n2. Transferencia Bancaria con Descuento\n3. Cuotas`);

//         switch (medioDePago) {
//             case '1':
//                 console.log(`Total a pagar en efectivo: $${total.toFixed(2)}`);
//                 break;
//             case '2':
//                 const respuestaDescuento = prompt(`¿Pagando con transferencia bancaria tienes un 20% de descuento? (si/no):`);
//                 if (respuestaDescuento.toLowerCase() === 'si') {
//                     descuentoAplicado *= 0.8;
//                     console.log('Se aplica un descuento del 20% por pagar con transferencia bancaria.');
//                 } else {
//                     console.log('No aplica descuento por pagar con transferencia bancaria.');
//                 }
//                 console.log(`Total a pagar: $${descuentoAplicado.toFixed(2)}`);
//                 break;
//             case '3':
//                 const cuotas = parseInt(prompt('¿Desea pagar en cuotas? (1/2/3):'));
//                 if ([1, 2, 3].includes(cuotas)) {
//                     console.log(`Total de compra: $${total.toFixed(2)}`);
//                     console.log(`Se aplican ${cuotas} cuotas sin interés.`);
//                     const totalCuotas = total / cuotas;
//                     console.log(`Total a pagar por cuota: $${totalCuotas.toFixed(2)}`);
//                 } else {
//                     console.log('No se ha seleccionado un número válido de cuotas.');
//                 }
//                 break;
//             default:
//                 console.log('Opción de pago no válida.');
//                 break;
//         }
//     } else {
//         console.log('No se ha realizado ninguna compra.');
//     }
// }

// simularCompra();

// const GRACIAS = `¡GRACIAS POR SU COMPRA!`;
// alert(GRACIAS);
// console.log(GRACIAS);

