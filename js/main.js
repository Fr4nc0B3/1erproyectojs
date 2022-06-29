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
  
  if (productoStorage) {
    productoStorage.cantidad = productoStorage.cantidad + 1
    document.getElementById(`cantidad${productoStorage.id}`).innerHTML =  `<p id="cantidad${productoStorage.id}">Cantidad: ${productoStorage.cantidad}</p>`
    cantidadEnCarrito();
    localStorage.setItem(`${id}`, JSON.stringify(productoStorage))
    agregarCarrito();
  } else {
      let productoAgregar = productos.find(e => e.id === id)
      productoAgregar.cantidad = 1
      localStorage.setItem(`${id}`, JSON.stringify(productoAgregar))
    cantidadEnCarrito();
    carritoVentana(productoStorage);
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
  
}

function carritoVentana(carrito) {


    carrito.forEach (producto => {
      contenedorCarrito.innerHTML += `
            <p>${producto.nombre}</p>
            <p>${producto.precio}</p>
            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
            <button id="eliminar${producto.id}" type="button" class="btn-sm btn btn-danger">Eliminar</button> `
    } )


    // let eliminar = document.getElementById(`eliminar${productoAgregar.id}`) 
    // eliminar.addEventListener("click",()=>{
    //   if (productoAgregar.cantidad === 1) {
    //     localStorage.removeItem(`${productoAgregar.id}`)
    //     carrito = carrito.filter(e=> e.id !== productoAgregar.id)
    //     cantidadEnCarrito();
    //     agregarCarrito()
    //   } else {
    //     let productoEliminar =JSON.parse(localStorage.getItem(`${productoAgregar.id}`))
    //     productoEliminar.cantidad = productoEliminar.cantidad - 1
    //     localStorage.setItem(`${productoAgregar.id}`, JSON.stringify(productoEliminar))

    //     document.getElementById(`cantidad${productoAgregar.id}`).innerHTML =  `<p id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</p>`
    //     cantidadEnCarrito();
    //     agregarCarrito();
    //   }
    // })

}


function cantidadEnCarrito() {

  contadorCarrito.innerText = carrito.reduce((acc,el)=> acc + el.cantidad, 0)
  precioTotal.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
}