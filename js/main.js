let carrito = [];

let productos = [
  {
    id: 1,
    nombre: "Brownie",
    tipo: "Torta",
    precio: 1800,
  },
  {
    id: 2,
    nombre: "Delicias de Vainilla",
    tipo: "Torta",
    precio: 2200,
  },
  {
    id: 3,
    nombre: "Delicias de Chocolate",
    tipo: "Torta",
    precio: 2200,
  },
  {
    id: 4,
    nombre: "Crumble de Manzanas",
    tipo: "Tarta",
    precio: 1500,
  },
  {
    id: 5,
    nombre: "Lemon Pie",
    tipo: "Tarta",
    precio: 2300,
  },
  {
    id: 6,
    nombre: "Tarta Bombom",
    tipo: "Tarta",
    precio: 1600,
  },
];


function saludar() {

  alert("Bienvenido a NSExquisiteses " + nombre + " listo para endulzarte?");
}
let nombre = prompt("ingresa tu nombre")
saludar()


 let ingreso = parseInt(prompt("ingrese el precio a filtrar(minimo, 1500)"));
let filtrado = productos.filter((el) => {
  return el.precio <= ingreso
});
console.log(filtrado);



function agregarProducto(idProducto, cantidad) {
  //obtener datos del producto origanl
  let exquisites = productos.find((producto) => producto.id === idProducto);
  //revisamos si el producto ya existe en mi carrito
  let productoEnCarrito = carrito.find(producto => producto.id === idProducto);
//evaluamos, si no esta se crea un nuevo objeto dentro de carrito
    if (productoEnCarrito === undefined) {
      //creo el nuevo objeto para agregar al carrito
         let producto_nuevo = new productoNuevo(exquisites.id, exquisites.nombre, exquisites.tipo, exquisites.precio)
    carrito.push({
      //agrego el objeto creado con la constructora anterior y creando la nueva propiedad de cantidad
      id: producto_nuevo.id,
      nombre: producto_nuevo.nombre,
      precioUnitario: producto_nuevo.precio,
      precioTotal: producto_nuevo.precio * cantidad,
      cantidad: cantidad})
    } else {
      // si el producto ya existe, modifico las cantidades y el precio total
      let productoIndice = carrito.findIndex(producto => producto.id === idProducto);
      carrito[productoIndice].cantidad = carrito[productoIndice].cantidad + cantidad
      carrito[productoIndice].precioTotal = carrito[productoIndice].precioTotal + exquisites.precio * cantidad
    }

 }

 function productoNuevo(id, nombre, tipo,precio){
  
  this.id = id;
  this.nombre = nombre;
  this.tipo = tipo;
  this.precio = precio
} 

 let opcion = prompt(
  "Ingrese una opcion: \n 1: Comprar torta  \n 3: Terminar  "
);
//agrego bucle
while (opcion !== "3") {
  if (opcion === "1") {
    comprarTorta();
  }
  if (opcion === "3"){
    alert(" Su recibo es: " +           
     "Productos :" + "\n" +
      carrito.map((producto) => `\n Cantidad: ${producto.cantidad} - Nombre: ${producto.nombre} - Precio x Unidad: ${producto.precioUnitario} - Precio total: ${producto.precioTotal}`) +"\n" +      
                "Costo total de la compra: " + carrito.reduce((acc, { precioTotal }) => acc + precioTotal, 0))
  };
}

//funcion comprar producto
function comprarTorta() {
 let exquisites = parseInt(prompt(
    "Elija una de nuestras exquisiteses \n 1: Brownie  \n 2: Delicias de Vainilla \n 3: Crumble de Manzanas \n 4: Delicias de Chocolate  \n 5: Lemon Pie \n 6: Tarta Bombom"
  ));
  let cantidad = parseInt(prompt("ingrese su cantidad: "));
  switch (exquisites) {
  
    case 1:
      alert(" Elegiste Brownie para tu compra");
      agregarProducto(exquisites, cantidad)
      break;
    case 2:
      alert(" Elegiste Delicias de Vainilla para tu compra");
      agregarProducto(exquisites, cantidad)
      break;
    case 3:
      alert(" Elegiste Crumble de Manzanas para tu compra");
      agregarProducto(exquisites, cantidad)
      break;
    case 4:
      alert(" Elegiste Delicias de Chocolate para tu compra");
      agregarProducto(exquisites, cantidad)
      break;
    case 5:
      alert(" Elegiste Lemon Pie para tu compra");
      agregarProducto(exquisites, cantidad)
      break;
    case 6:
      alert(" Elegiste Tarta Bombom para tu compra");
      agregarProducto(exquisites, cantidad)
      break;
    default:
      alert("Solo puedes ingresar numeros del 1 al 6");
      break;
  }

  return (opcion = prompt(
    "Vuelva a ingresar una opcion \n 1: Continuar compra  \n 3: Terminar"
  ));
}

alert("Gracias por su compra");



