function saludar() {
    alert("Bienvenido a NSExquisiteses " + nombre + " listo para endulzarte?");
  }
  //funcion comprar producto
  function comprarTorta() {
    exquisites = prompt(
      "Elija una de nuestras exquisiteses \n 1: Brownie  \n 2: Delicias de Vainilla \n 3: Crumble de Manzanas \n 4: Delicias de Chocolate  \n 5: Lemon Pie \n 6: Tarta Bombom" );

      switch (exquisites) {
        case "1":
          alert(" Elegiste Brownie para tu compra");  
          break;
        case "2":
          alert(" Elegiste Delicias de Vainilla para tu compra");
          break;
        case "3":
          alert(" Elegiste Crumble de Manzanas para tu compra");
          break;
        case "4":
          alert(" Elegiste Delicias de Chocolate para tu compra");
          break;
        case "5":
          alert(" Elegiste Lemon Pie para tu compra");
          break;
        case "6":
          alert(" Elegiste Tarta Bombom para tu compra");
          break;    
        default:
          alert("Solo puedes ingresar numeros del 1 al 6")
          break;
      }

   return opcion = prompt(
      "Vuelva a ingresar una opcion \n 2: Mostrar precios finales  \n 3: Terminar");
  }
  // declaro la funcion finalizar compra

  let carrito = []

  function finalizarCompra() {
    while (opcion !== "3") {
      
 
    if (exquisites === "1") {
      alert(
        "Usted eligio Brownie por un monto  final de " +
         (brownie.precio -(brownie.precio * 0.15)));
    } else if (exquisites === "2") {
      alert(
        "Usted eligio Delicias de Vainilla  por un monto  final de " +
          (deliciasDV.precio -(deliciasDV.precio * 0.15)));
    } else if (exquisites ==="3") {
      alert(
        "Usted eligio Crumble de Manzanas por un monto  final de " +
          (crumble.precio -(crumble.precio * 0.15)));
    } else if (exquisites === "4") {
      alert(
        "Usted eligio Delicias de Chocolate  por un monto  final de " +
          (deliciasDC.precio -(deliciasDC.precio * 0.15)));
    } else if (exquisites === "5") {
      alert(
        "Usted eligio Lemon Pie por un monto  final de " +
          (lemon.precio -(lemon.precio * 0.15)));
    } else if (exquisites === "6") {
        alert(
          "Usted eligio Tarta Bombom  por un monto  final de " +
            (tartaBombom.precio -(tartaBombom.precio * 0.15)));      
    }      
    opcion = prompt("Ingrese 3 para terminar")   
  }
  }



  //declaro variables y objetos
  let exquisites;

 const brownie = {
    id: 1,
    nombre: "Brownie",
    tipo: "Torta",
    precio: 1800,
  };

 const deliciasDV = {
    id: 2,
    nombre: "Delicias de Vainilla",
    tipo: "Torta",
    precio: 2200,
  };

  const deliciasDC = {
    id: 3,
    nombre: "Delicias de Chocolate",
    tipo: "Torta",
    precio: 2200,
  }

 const crumble = {
    id: 4,
    nombre: "Crumble de Manzanas",
    tipo: "Tarta",
    precio: 1500,
  };

  const lemon = {
    id: 5,
    nombre: "Lemon Pie",
    tipo: "Tarta",
    precio: 2300,
  }

  const tartaBombom = {
    id: 6,
    nombre: "Tarta Bombom",
    tipo: "Tarta",
    precio: 1600,
  }

  crumble.precio = 2000
//Declaro mis arrays

 const tortas = [brownie, deliciasDV, deliciasDC];
 const tartas = [crumble, lemon, tartaBombom];

 //Utilizo metodo de arrays

 const productos = tortas.concat(tartas);
  console.log(productos);

  let nombre = prompt("Ingrese su nombre");

  //llamo a la funcion saludar
  saludar();
  let opcion = prompt(
    "Ingrese una opcion: \n 1: Comprar torta \n 3: Terminar  ");
  //agrego bucle 
  while (opcion !== "3") {
    if (opcion === "1") {
      comprarTorta();
    } else if (opcion === "2"){
      finalizarCompra()
    }  else (opcion === "3")
    
  }
  // console.log("La opcion elegida fue: " + opcion);
  // console.log("La exquisites elegida fue: " + exquisites);  
  // console.log("El nombre del cliente es: " + nombre);
  alert("Gracias por su compra"); 