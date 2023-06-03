var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var gusto = document.getElementById("gusto");
var telefono = document.getElementById("telefono");
var porcentaje = document.getElementById("porcentaje");

function getQueryParams(qs) {
  qs = qs.split("+").join(" ");

  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while ((tokens = re.exec(qs))) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

document.addEventListener("DOMContentLoaded", () => {
  debugger;
  var query = window.location.search.substring(1);
  const params = getQueryParams(query);
  nombre.innerHTML = params.nombre;
  email.innerHTML = params.email;
  gusto.innerHTML = params.gusto;
  telefono.innerHTML = params.telefono;
  porcentaje.innerHTML = params.porc;
  console.log(params);
});
