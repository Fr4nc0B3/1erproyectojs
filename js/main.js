function saludar() {
    alert("Bienvenido a NSExquisiteses " + nombre + " listo para endulzarte?");
  }
  //funcion comprar producto
  function comprarTorta() {
    exquisites = prompt(
      "Elija una de nuestras exquisiteses \n 1: Brownie  \n 2: Cheesecake \n 3: Crumble de Manzanas" );

    if (exquisites === "1") {
      alert(" Elegiste Brownie para tu compra");
    } else if (exquisites === "2") {
      alert(" Elegiste Cheesecake para tu compra");
    } else if (exquisites === "3") {
      alert(" Elegiste Crumble de Manzanas  para tu compra");
    }
    //aca vuelvo a preguntar por el prompt de opcion para terminar el proceso
    opcion = prompt(
      "Vuelva a ingresar una opcion \n 2: Mostrar precios finales  \n 3: Terminar");
  }
  // declaro la funcion finalizar compra
  function finalizarCompra() {
    if (exquisites === "1") {
      alert(
        "Usted eligio Brownie por un monto  final de " +
         (brownie -(brownie * 0.15)));
    } else if (exquisites === "2") {
      alert(
        "Usted eligio Cheesecake  por un monto  final de " +
          (cheesecake -(cheesecake * 0.15)));
    } else if (exquisites == "3") {
      alert(
        "Usted eligio Crumble de Manzanas por un monto  final de " +
          (crumble -(crumble * 0.15)));
    }

    opcion = prompt("Ingrese 3 para terminar")
  }



  //declaro variables
  let exquisites;
  let brownie = 1800;
  let cheesecake = 2100;
  let crumble = 1500;
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
  console.log("La opcion elegida fue: " + opcion);
  console.log("La exquisites elegida fue: " + exquisites);  
  console.log("El nombre del cliente es: " + nombre);
  alert("Gracias por su compra"); 