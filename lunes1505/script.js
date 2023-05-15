console.log ("Busco mantenerme tranquila");

console.error ("Me siento sola");

let botonInicio = document.getElementById("inicio")/* .addEventListener("click", displayDate); */
console.log(botonInicio);

/* function displayDate () {
    document.getElementById("inicio").innerHTML = Date ();
} */

botonInicio.addEventListener ("click", cambiarColor)
function cambiarColor () {
    console.log ("Probando nuevas cosas");
}

botonInicio.addEventListener ("mousedown", cambiarMouse)
function cambiarMouse () {
    console.log ("poto");
    botonInicio.style.backgroundColor = ("blue");
/*     botonInicio.style.font = ("Times New Roman");
 */    botonInicio.style.fontSize = ("20px");
}

// Función sacada de WW3, versión script (abajo)

function bacan() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "Estás tecleando:" + x;
  }
