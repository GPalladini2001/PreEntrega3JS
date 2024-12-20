function principal() {
  function cargarHamburguesasAjax(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "info.json", true);

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200){
        let hamburguesas = JSON.parse(xhr.responseText);
        principal(hamburguesas);
      } else if (xhr.readyState === 4){
        console.error("No se pudo cargar el archivo JSON");
      }
    };

    xhr.send();
  }

  cargarHamburguesasAjax();
  let hamburguesasGuardadas =
    JSON.parse(localStorage.getItem(hamburguesas)) || [];
  crearTarjetasHamburguesas(hamburguesasGuardadas);

  let inputBuscar = document.getElementById("inputBuscar");
  inputBuscar.addEventListener("input", busqueda);
  inputBuscar.addEventListener("input", () => {
    localStorage.setItem("barraBusqueda", inputBuscar.value);
  });
  let ultimaBusqueda = localStorage.getItem("barraBusqueda");
  if (ultimaBusqueda) {
    inputBuscar.value = ultimaBusqueda;
    busqueda();
  }
  function busqueda() {
    let textoMinuscula = inputBuscar.value.toLowerCase();
    let filtroNombre = hamburguesas.filter((hamburguesa) =>
      hamburguesa.nombre.includes(textoMinuscula)
    );
    crearTarjetasHamburguesas(filtroNombre);
  }

  let select = document.getElementById("filtros");
  select.addEventListener("change", cambiar);
  select.addEventListener("change", () => {
    localStorage.setItem("filtroSeleccionado", select.value);
  });
  window.addEventListener("load", () => {
    let filtroGuardado = localStorage.getItem("filtroSeleccionado");
    if (filtroGuardado) {
      select.value = filtroGuardado;
      cambiar();
    }
  });

  function cambiar() {
    let hamburguesasFiltradas =
      select.value === "value0"
        ? [...hamburguesas]
        : select.value === "value1"
        ? ordenarPorPrecio(hamburguesas, "asc")
        : select.value === "value2"
        ? ordenarPorPrecio(hamburguesas, "desc")
        : select.value === "value3"
        ? filtrarPorPropiedad(hamburguesas, "tomate")
        : select.value === "value4"
        ? filtrarPorPropiedad(hamburguesas, "lechuga")
        : select.value === "value5"
        ? filtrarPorPropiedad(hamburguesas, "carne10")
        : select.value === "value6"
        ? filtrarPorPropiedad(hamburguesas, "carne4")
        : select.value === "value7"
        ? filtrarPorPropiedad(hamburguesas, "cebolla")
        : select.value === "value8"
        ? filtrarPorPropiedad(hamburguesas, "bacon")
        : [...hamburguesas];

    crearTarjetasHamburguesas(hamburguesasFiltradas);
    Toastify({
      text: "Filtro aplicado",
      duration: 2000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right,rgb(255, 166, 0),rgb(232, 143, 19))",
      },
    }).showToast();
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

  localStorage.setItem("hamburguesas", JSON.stringify(hamburguesas));
}

principal();

function crearTarjetasHamburguesas(hamburguesas) {
  let contenedor = document.getElementById("contenedorProductos");
  contenedor.innerHTML = "";
  hamburguesas.length === 0
    ? (contenedor.innerHTML = `
  <h3>No se encontraron coincidencias</h3>
  `)
    : hamburguesas.forEach((hamburguesa) => {
        contenedor.innerHTML += `
        <div class=hamburguesa>
          <h3>${hamburguesa.nombre}</h3>
          <img src=./image/${hamburguesa.rutaImagen}>
          <p>precio: $${hamburguesa.precio}</p>
        </div>
        `;
      });
}