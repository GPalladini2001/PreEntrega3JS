function principal(){
  let hamburguesas = [
    {
      nombre: "doble carne doble queso",
      carne: "10",
      pan: "regular",
      cebolla: true,
      lechuga: false,
      tomate:  false,
      tasty: false,
      bacon: false,
      quesos: 2,
      carnes: 2,
      precio: 6900,
      rutaImagen: "dobleCarne.jpg",
    },
    {
      nombre: "tasty doble",
      carne: "4",
      pan: "xl",
      cebolla: true,
      lechuga: true,
      tomate:  true,
      tasty: true,
      bacon: false,
      quesos: 3,
      carnes: 2,
      precio: 9500,
      rutaImagen: "tastyDoble.jpg",
    },
    {
      nombre: "tasty triple",
      carne: "4",
      pan: "xl",
      cebolla: true,
      lechuga: true,
      tomate:  true,
      tasty: true,
      bacon: false,
      quesos: 4,
      carnes: 3,
      precio: 10200,
      rutaImagen: "tastyTriple.jpg",
    },
    {
      nombre: "cuarto de libra",
      carne: "4",
      pan: "cuarto",
      cebolla: true,
      lechuga: false,
      tomate:  false,
      tasty: false,
      bacon: false,
      quesos: 2,
      carnes: 1,
      precio: 7700,
      rutaImagen: "cuarto.jpg",
    },
    {
      nombre: "doble cuarto de libra",
      carne: "4",
      pan: "cuarto",
      cebolla: true,
      lechuga: false,
      tomate:  false,
      tasty: false,
      bacon: false,
      quesos: 2,
      carnes: 2,
      precio: 8800,
      rutaImagen: "dobleCuarto.jpg"
    },
    {
      nombre: "big mac",
      carne: "10",
      pan: "big mac",
      cebolla: true,
      lechuga: true,
      tomate:  false,
      tasty: false,
      bacon: false,
      quesos: 1,
      carnes: 2,
      precio: 7300,
      rutaImagen: "bigMac.jpg"
    },
    {
      nombre: "mcnifica",
      carne: "4",
      pan: "cuarto",
      cebolla: true,
      lechuga: true,
      tomate:  true,
      tasty: false,
      bacon: false,
      quesos: 1,
      carnes: 1,
      precio: 8000,
      rutaImagen: "mcNifica.jpg"
    },
    {
      nombre: "doble mcbacon",
      carne: "4",
      pan: "xl",
      cebolla: true,
      lechuga: false,
      tomate:  false,
      tasty: false,
      bacon: true,
      quesos: 2,
      carnes: 2,
      precio: 9500,
      rutaImagen: "dobleMcbacon.jpg",
    },
    {
      nombre: "triple mcbacon",
      carne: "4",
      pan: "xl",
      cebolla: true,
      lechuga: false,
      tomate:  false,
      tasty: false,
      bacon: true,
      quesos: 3,
      carnes: 3,
      precio: 10200,
      rutaImagen: "tripleMcbacon.jpg",
    },
  ]

  crearTarjetasHamburguesas(hamburguesas)
}

principal()

function crearTarjetasHamburguesas(hamburguesas){
  let contenedor = document.getElementById("contenedorProductos")
  hamburguesas.forEach(hamburguesa =>{
    contenedor.innerHTML +=`
    <div class=hamburguesa>
      <h3>${hamburguesa.nombre}</h3>
      <img src=./image/${hamburguesa.rutaImagen}>
      <p>precio: $${hamburguesa.precio}</p>
    </div>
    `
  })
}