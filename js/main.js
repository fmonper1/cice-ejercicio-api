import "../styles/style.css";

const URL = "https://randomuser.me/api/?format=json";

const divTarjeta = document.querySelector(".tarjeta");
const divMuroTarjetas = document.querySelector("#muroDeTarjetas");
const boton = document.querySelector("#agregarCard");

const pedirUsuario = async () => {
  const resultado = await fetch(URL);
  const resultadoParseado = await resultado.json();

  console.log(resultadoParseado);
  return resultadoParseado.results[0];
};

const pedirUsuarioYMostrarEnDom = async () => {
  // 1. pedir usuario
  const usuario = await pedirUsuario();
  // 2. mostrar en la pagina
  const divNombreUsuario = document.createElement("div");
  console.log(divNombreUsuario);
  // 3. meter nombre usuario en el div
  divNombreUsuario.textContent = usuario.name.first;
  // 4. meter div en el DOM
  divTarjeta.appendChild(divNombreUsuario);
};

const crearTarjetaNueva = () => {
  console.log("click");
  // 1. crear el div de la tarjeta
  const tarjeta = crearHTMLTarjeta();
  // 2. insertarlo en el muroDeTarjetas
  divMuroTarjetas.appendChild(tarjeta);
};

const crearHTMLTarjeta = () => {
  // divTarjetaNueva.createElement("div")
  const divTarjetaNueva = document.createElement("div");
  // divTarjetaNueva.classList.add("")
  divTarjetaNueva.className = "tarjeta";

  // 1. crear html del boton
  const divBoton = document.createElement("button");
  divBoton.textContent = "eliminiar";
  // 2. añadirle una funcion al click
  const handleClick = () => borrarDivDelDom(divTarjetaNueva);
  divBoton.onclick = handleClick;
  // 3. borrar div cuando se hace click en el boton
  divTarjetaNueva.appendChild(divBoton);

  return divTarjetaNueva;
};

const borrarDivDelDom = (elemento) => {
  console.log(elemento);
  elemento.remove();
};

boton.addEventListener("click", crearTarjetaNueva);

pedirUsuarioYMostrarEnDom();
