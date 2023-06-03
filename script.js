var boton = document.getElementById("guardarGustos");
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var gusto = document.getElementById("gusto");
var telefono = document.getElementById("telefono");
var editando = document.getElementById("editando");
var aceptarCambios = document.getElementById("aceptarCambios");
var cancelarCambios = document.getElementById("cancelarCambios");
var listaDatosTabla = [];
var datoEdicion;

function editarValor(id) {
  let datoTabla;
  let datosMostrar =
    "<tr>    <th>Gusto</th>    <th>%</th>    <th>Edit</th> </tr>";
  for (let i = 0; i < listaDatosTabla.length; i++) {
    let x = listaDatosTabla[i];
    if (listaDatosTabla[i].id === id) {
      datoTabla = listaDatosTabla[i];
      datosMostrar += `<tr> <td><input type="text" class="inputField" id="gustoedit" value="${x.gusto}"/>
       </td><td><input type="text" class="inputField" id="porcentajeEdit" value="${x.porcentaje}"/></td>
       <td>En edición</td>`;
    } else {
      datosMostrar += `<tr> <td>${x.gusto}</td><td>${x.porcentaje}</td><td><button class="editar" onclick="editarValor(
    ${x.id}
  )">Editar</button></td>`;
    }
  }
  if (datoTabla) {
    datosTabla.innerHTML = datosMostrar;
    editando.style.display = "block";
    datoEdicion = datoTabla;
  } else {
    editando.style.display = "none";
    datoEdicion = undefined;
  }
}

aceptarCambios.onclick = function () {
  var porcentajeEdit = document.getElementById("porcentajeEdit");
  var gustoedit = document.getElementById("gustoedit");
  if (datoEdicion) {
    if (gustoedit) {
      datoEdicion.gusto = gustoedit.value;
    }
    if (porcentajeEdit) {
      datoEdicion.porcentaje = porcentajeEdit.value;
    }
    window.location.href = `resultado.html?nombre=${datoEdicion.nombre}&email=${datoEdicion.email}&telefono=${datoEdicion.telefono}&gusto=${datoEdicion.gusto}&porc=${datoEdicion.porcentaje}`;
  }
};
cancelarCambios.onclick = function () {
  if (datoEdicion) {
    datoEdicion = undefined;
    editando.style.display = "none";
  }
  let datosMostrar =
    "<tr>    <th>Gusto</th>    <th>%</th>    <th>Edit</th> </tr>";
  for (let i = 0; i < listaDatosTabla.length; i++) {
    const x = listaDatosTabla[i];
    datosMostrar += `<tr> <td>${x.gusto}</td><td>${x.porcentaje}</td><td><button class="editar" onclick="editarValor(
        ${x.id}
      )">Editar</button></td>`;
  }
  datosTabla.innerHTML = datosMostrar;
};

boton.onclick = function (event) {
  event.preventDefault();
  if (
    nombre.value !== "" &&
    email.value !== "" &&
    gusto.value !== "" &&
    telefono.value !== ""
  ) {
    listaDatosTabla.push({
      id: listaDatosTabla.length + 1,
      nombre: nombre.value,
      email: email.value,
      gusto: gusto.value,
      telefono: telefono.value,
      porcentaje: 0,
    });
    let datosMostrar =
      "<tr>    <th>Gusto</th>    <th>%</th>    <th>Edit</th> </tr>";
    for (let i = 0; i < listaDatosTabla.length; i++) {
      const x = listaDatosTabla[i];
      datosMostrar += `<tr> <td>${x.gusto}</td><td>${x.porcentaje}</td><td><button class="editar" onclick="editarValor(
        ${x.id}
      )">Editar</button></td>`;
    }
    datosTabla.innerHTML = datosMostrar;
  } else {
    alert("para guardar el gusto debe llenar todos los campos");
  }
};
