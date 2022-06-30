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

function mostrarProductos(card) {

  contenedorProductos.innerHTML = ""


  card.forEach(el => {
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
              agregarStorage(el.id);

           })
  });


  
};




function agregarStorage(id) {

  let productoStorage = JSON.parse(localStorage.getItem(`${id}`))

  // let productosEnCarrito = carrito.find(e=> e.id === id)
        let productoAgregar = productos.find(e => e.id === id)
  if (productoStorage === null) {
 
      localStorage.setItem(`${id}`, JSON.stringify({...productoAgregar, cantidad: 1}))
    agregarCarrito();
  } else {
    productoStorage.cantidad = productoStorage.cantidad + 1;
    productoStorage.precio = productoStorage.precio + productoAgregar.precio

    localStorage.setItem(`${id}`, JSON.stringify(productoStorage))
    agregarCarrito();

  }



}

function agregarCarrito() {

  carrito.length = 0

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    typeof JSON.parse(localStorage.getItem(key)) == "object" && carrito.push(JSON.parse(localStorage.getItem(key)))
  }
  carritoVentana();
  cantidadEnCarrito();
  
}

function carritoVentana() {
  contenedorCarrito.innerHTML = ""

  carrito.forEach (producto => {
    contenedorCarrito.innerHTML += `
          <p>${producto.nombre}:</p>
          <p>$ ${producto.precio}</p>
          <p>Cantidad: ${producto.cantidad}</p>
          <button id="eliminar" data-id="${producto.id}" type="button" class="btn-sm btn btn-danger">Eliminar</button> `
  } )


}


function cantidadEnCarrito() {
  if (carrito.length !== 0){
  contadorCarrito.innerText = carrito.reduce((cantidadTotal,{cantidad})=> cantidadTotal + cantidad, 0)
  precioTotal.innerText = carrito.reduce((precioTotal,{precio} ) => precioTotal + precio, 0)
}else{
  contadorCarrito.innerText = ""
  precioTotal.innerText = ""
}
}

contenedorCarrito.addEventListener("click", (e)=>{
if (e.target.id === "eliminar") {
eliminarProducto(parseInt(e.target.dataset.id))
}

})

function eliminarProducto(id) {
  let productoBorrar = JSON.parse(localStorage.getItem(`${id}`))

  let productoSelec = productos.find(producto => producto.id === id)

if (productoBorrar.cantidad > 1) {
  productoBorrar.cantidad = productoBorrar.cantidad - 1;
  productoBorrar.precio = productoBorrar.precio - productoSelec.precio;
  localStorage.setItem(`${id}`, JSON.stringify(productoBorrar))
}else{
  localStorage.removeItem(`${id}`)
}
agregarCarrito();
}


