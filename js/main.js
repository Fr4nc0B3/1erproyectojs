let carrito = [];

const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorCarrito = document.getElementById("carrito-contenedor")


const contadorCarrito = document.getElementById("contadorCarrito")
const precioTotal = document.getElementById("precio-total")


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
    div.className = "col mb-4 col-lg-4 cardbox"
    div.innerHTML = `
            <div class="card">
            <img src="${el.img}" class="card-img-top" alt="${el.nombre}">
              <div class="textoM card-body">
                <h5 class="card-title">${el.nombre}</h5>
                <p class="card-text">${el.txt}</p>
                <p class="precio-card" style="font-size: 17px;">$${el.precio}</p>
                <a id="boton${el.id}" class="btn btn-primary btn-sm">Comprar</a>
              </div>
            </div>`

           contenedorProductos.appendChild(div)   

           let btnCompra = document.getElementById(`boton${el.id}`)

           btnCompra.addEventListener("click",() =>{
              agregarCarrito(el.id);
           })
  });


  
};



function agregarCarrito(id) {

  let productosEnCarrito = carrito.find(e=> e.id === id)

  if (productosEnCarrito) {
    productosEnCarrito.cantidad = productosEnCarrito.cantidad + 1
    document.getElementById(`cantidad${productosEnCarrito.id}`).innerHTML =  `<p id="cantidad${productosEnCarrito.id}">Cantidad: ${productosEnCarrito.cantidad}</p>`
    cantidadEnCarrito();
    
  } else {
      let productoAgregar = productos.find(e => e.id === id)
      productoAgregar.cantidad = 1
    carrito.push(productoAgregar);
    cantidadEnCarrito();
    carritoVentana(productoAgregar);
  }


}

function carritoVentana(productoAgregar) {

    let div = document.createElement("div");
    div.className = "productosEnCarrito"
    div.innerHTML = `
            <p>${productoAgregar.nombre}</p>
            <p>${productoAgregar.precio}</p>
            <p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>
            <button id="eliminar${productoAgregar.id}" type="button" class="btn-sm btn btn-danger">Eliminar</button> `
    contenedorCarrito.appendChild(div)

    let eliminar = document.getElementById(`eliminar${productoAgregar.id}`) 
    eliminar.addEventListener("click",()=>{
      if (productoAgregar.cantidad === 1) {
        eliminar.parentElement.remove();
        carrito = carrito.filter(e=> e.id !== productoAgregar.id)
        cantidadEnCarrito();
      } else {
        productoAgregar.cantidad = productoAgregar.cantidad - 1
        document.getElementById(`cantidad${productoAgregar.id}`).innerHTML =  `<p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>`
        cantidadEnCarrito();
      }
    })
  
}


function cantidadEnCarrito() {

  contadorCarrito.innerText = carrito.reduce((acc,el)=> acc + el.cantidad, 0)
  precioTotal.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
}