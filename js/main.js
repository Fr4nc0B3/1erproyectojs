let carrito = [];

const contenedorProductos = document.getElementById("contenedorProductos");

const selecTipo = document.getElementById("selecTipo");


let productos = [
  {
    id: 1,
    nombre: "Brownie",
    img: "https://images.unsplash.com/photo-1610611424854-5e07032143d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    tipo: "torta",
    txt: "",
    precio: 1800,
  },
  {
    id: 2,
    nombre: "Delicias de Vainilla",
    img: "https://images.unsplash.com/photo-1594054528735-d3782132b380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    txt: "(Torta humeda de vainilla c/ relleno de crema chantilly y chips de chocolate blanco, cubierta de ganache de chocolate blanco y crocante)",
    tipo: "torta",
    precio: 2200,
  },
  {
    id: 3,
    nombre: "Delicias de Chocolate",
    img: "https://images.unsplash.com/photo-1464942358668-9db3e718e6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    txt: "(Tortahumeda de chocolate c/rellleno de DDL repostero, cubierta de ganache de chocolate y chips de chocolate)",
    tipo: "torta",
    precio: 2200,
  },
  {
    id: 4,
    nombre: "Crumble de Manzanas",
    img: "https://images.unsplash.com/photo-1622219783350-b544b2d2bd24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    txt: "",
    tipo: "tarta",
    precio: 1500,
  },
  {
    id: 5,
    nombre: "Lemon Pie", 
    img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    txt: "",
    tipo: "tarta",
    precio: 2300,
  },
  {
    id: 6,
    nombre: "Tarta Bombom",
    img: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80",
    txt:"(Base de masa sable de chocolate, relleno de DDL repostero y cubierta de ganace de chocolate semiamargo)",
    tipo: "tarta",
    precio: 1600,
  },
];


selecTipo.addEventListener("change",()=>{

  console.log(selecTipo.value);
  if (selecTipo.value === "all") {
    mostrarProductos(productos)
  }else{
    mostrarProductos(productos.filter(el => el.tipo === selecTipo.value))
  };
  
});




mostrarProductos(productos)

function mostrarProductos(array) {

  contenedorProductos.innerHTML = ""


  array.forEach(el => {
    let div = document.createElement("div")
    div.className = "col mb-4 col-lg-3 cardbox"
    div.innerHTML = `
            <div class="card">
            <img src="${el.img}" class="card-img-top" alt="Conan">
              <div class="textoM card-body">
                <h5 class="card-title">${el.nombre}</h5>
                <p class="card-text">${el.txt}</p>
                <p>$${el.precio}</p>
              </div>
            </div>`

           contenedorProductos.appendChild(div)   
  });


  
};




function saludar() {

  alert("Bienvenido a NSExquisiteses " + nombre + " listo para endulzarte?");
}
let nombre = prompt("ingresa tu nombre")
saludar()


  let ingresoP = parseInt(prompt("ingrese el precio a filtrar(minimo, 1500)"));
  let ingresoT = prompt("Ingrese el tipo de producto que desee 'torta o tarta'");

function filtrado(precio,tipo) {

    ingresoP = precio;
  let precioF = productos.filter((producto) => {
  return producto.precio <= precio
  });
  console.log(precioF);
  ingresoT = tipo;
  let tipoF = productos.filter((producto) => {
   return producto.tipo === tipo
   });    
   console.log(tipoF);

}


filtrado(ingresoP, ingresoT)




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
      //agrego el objeto creado con la constructora anterior y creando la nueva propiedad de cantidad y precioTotal
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



