function principal() {
  let hamburguesas = [
    {
      nombre: "hamburguesa",
      carne10: true,
      carne4: false,
      cebolla: false,
      lechuga: false,
      tomate: false,
      bacon: false,
      precio: 3700,
      rutaImagen: "hamburguesa.jpg"
    },
    {
      nombre: "hamburguesa con queso",
      carne10: true,
      carne4: false,
      cebolla: false,
      lechuga: false,
      tomate: false,
      bacon: false,
      precio: 3900,
      rutaImagen: "hamburguesaQueso.jpg"
    },
    {
      nombre: "Bacon Cheddar McMelt",
      carne10: false,
      carne4: true,
      cebolla: true,
      lechuga: false,
      tomate: false,
      bacon: true,
      precio: 8500,
      rutaImagen: "baconMcMelt.jpg"
    },
    {
      nombre: "doble carne doble queso",
      carne10: true,
      carne4: false,
      cebolla: true,
      lechuga: false,
      tomate: false,
      bacon: false,
      precio: 6900,
      rutaImagen: "dobleCarne.jpg",
    },
    {
      nombre: "tasty doble",
      carne10: false,
      carne4: true,
      cebolla: true,
      lechuga: true,
      tomate: true,
      bacon: false,
      precio: 9500,
      rutaImagen: "tastyDoble.jpg",
    },
    {
      nombre: "tasty triple",
      carne10: false,
      carne4: true,
      cebolla: true,
      lechuga: true,
      tomate: true,
      bacon: false,
      precio: 10200,
      rutaImagen: "tastyTriple.jpg",
    },
    {
      nombre: "cuarto de libra",
      carne10: false,
      carne4: true,
      cebolla: true,
      lechuga: false,
      tomate: false,
      bacon: false,
      precio: 7700,
      rutaImagen: "cuarto.jpg",
    },
    {
      nombre: "doble cuarto de libra",
      carne10: false,
      carne4: true,
      cebolla: true,
      lechuga: false,
      tomate: false,
      bacon: false,
      precio: 8800,
      rutaImagen: "dobleCuarto.jpg",
    },
    {
      nombre: "big mac",
      carne10: true,
      carne4: false,
      cebolla: true,
      lechuga: true,
      tomate: false,
      bacon: false,
      precio: 7300,
      rutaImagen: "bigMac.jpg",
    },
    {
      nombre: "mcnifica",
      carne10: false,
      carne4: true,
      cebolla: true,
      lechuga: true,
      tomate: true,
      bacon: false,
      precio: 8000,
      rutaImagen: "mcNifica.jpg",
    },
    {
      nombre: "doble mcbacon",
      carne10: false,
      carne4: true,
      cebolla: true,
      lechuga: false,
      tomate: false,
      bacon: true,
      precio: 9500,
      rutaImagen: "dobleMcbacon.jpg",
    },
    {
      nombre: "triple mcbacon",
      carne10: false,
      carne4: true,
      cebolla: true,
      lechuga: false,
      tomate: false,
      bacon: true,
      precio: 10200,
      rutaImagen: "tripleMcbacon.jpg",
    },
  ];

  crearTarjetasHamburguesas(hamburguesas);

  let inputBuscar = document.getElementById("inputBuscar");
  inputBuscar.addEventListener("input", busqueda);
  function busqueda() {
    let textoMinuscula = inputBuscar.value.toLowerCase();
    let filtroNombre = hamburguesas.filter((hamburguesa) =>
      hamburguesa.nombre.includes(textoMinuscula)
    );
    crearTarjetasHamburguesas(filtroNombre);
  }

  let select = document.getElementById("filtros");
  select.addEventListener("change", cambiar);

  function cambiar() {
    if (select.value === "value0") {
      crearTarjetasHamburguesas(hamburguesas);
    } else if (select.value === "value1") {
      crearTarjetasHamburguesas(ordenarPorPrecio(hamburguesas, "asc"));
    } else if (select.value === "value2") {
      crearTarjetasHamburguesas(ordenarPorPrecio(hamburguesas, "desc"));
    } else if (select.value === "value3") {
      crearTarjetasHamburguesas(filtrarPorPropiedad(hamburguesas, "tomate"));
    } else if (select.value === "value4") {
      crearTarjetasHamburguesas(filtrarPorPropiedad(hamburguesas, "lechuga"));
    } else if (select.value === "value5") {
      crearTarjetasHamburguesas(filtrarPorPropiedad(hamburguesas, "carne10"));
    } else if (select.value === "value6") {
      crearTarjetasHamburguesas(filtrarPorPropiedad(hamburguesas, "carne4"));
    }else if (select.value === "value7") {
      crearTarjetasHamburguesas(filtrarPorPropiedad(hamburguesas, "cebolla"));
    }else if (select.value === "value8") {
      crearTarjetasHamburguesas(filtrarPorPropiedad(hamburguesas, "bacon"));
    }
  }
  function filtrarPorPropiedad(hamburguesas, propiedad) {
    return hamburguesas.filter((hamburguesa) => hamburguesa[propiedad]);
  }

  function ordenarPorPrecio(array, direccion) {
    let copiaArrayHamburguesas = array.map((hamburguesa) => {
      return {
        nombre: hamburguesa.nombre,
        precio: hamburguesa.precio,
        rutaImagen: hamburguesa.rutaImagen,
      };
    });
    copiaArrayHamburguesas.sort((a, b) => {
      if (direccion === "asc") {
        return a.precio - b.precio;
      } else if (direccion === "desc") {
        return b.precio - a.precio;
      }
      return 0;
    });
    return copiaArrayHamburguesas;
  }
}

principal();

function crearTarjetasHamburguesas(hamburguesas) {
  let contenedor = document.getElementById("contenedorProductos");
  contenedor.innerHTML = "";
  if (hamburguesas.length === 0) {
    contenedor.innerHTML = `
    <p>No se encontraron coincidencias</p>
    `;
  } else {
    hamburguesas.forEach((hamburguesa) => {
      contenedor.innerHTML += `
      <div class=hamburguesa>
        <h3>${hamburguesa.nombre}</h3>
        <img src=./image/${hamburguesa.rutaImagen}>
        <p>precio: $${hamburguesa.precio}</p>
      </div>
      `;
    });
  }
}
