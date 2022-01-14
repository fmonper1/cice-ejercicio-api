import "../styles/style.css";

const URL = "https://randomuser.me/api/?format=json";

const divTarjeta = document.querySelector(".tarjeta");
console.log(divTarjeta);

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

pedirUsuarioYMostrarEnDom();
