const pantalla = document.getElementById("pantalla");



function agregar(valor) {

  if (pantalla.value === "" && ["+", "*", "/", "%"].includes(valor)) return;

  pantalla.value += valor;

}



function limpiar() {

  pantalla.value = "";

}



function borrarUno() {

  pantalla.value = pantalla.value.slice(0, -1);

}



function calcular() {

  if (pantalla.value === "") return;



  try {

    let expresion = pantalla.value;

    let resultado = eval(expresion);

    if (resultado % 1 !== 0) {

      resultado = parseFloat(resultado.toFixed(4));

    }



    pantalla.value = resultado;

  } catch (error) {

    pantalla.value = "Error";

    setTimeout(limpiar, 1500);

  }

}

