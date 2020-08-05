/*var ruta = window.location;
var vent = navigator;
console.log(ruta);
console.log(vent);
document.write("Estas en: " + ruta.origin);*/

/*Form*/
var texto = document.getElementById("txt_edad");
var boton = document.getElementById("btn_pro");
boton.addEventListener("click", dibujo_click);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "olive";

/*Función de empezar a dibujar*/
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

/*Repetición metodo While
while(l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  dibujarLinea(colorcito, 300, yi, xf, 0);
  l++
}
*/

/*Repetición metodo for
for (l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  xfi = 300 - (10*l);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  dibujarLinea(colorcito, 300, yi, xfi, 300);
  dibujarLinea(colorcito, yi, 0, 300, xf);
  dibujarLinea(colorcito, xfi, 0, 0, xf);
}*/

/*Lineas Diagonales
for (l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, yi, xf, 0, 300);
  dibujarLinea(colorcito, yi, xf, 300, 0);
}*/

/*X
for (l = 0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  xfi = 300 - (10 * l);
  dibujarLinea(colorcito, yi, 0, 0, xf);
  dibujarLinea(colorcito, yi, 0, 300, xfi);
}*/


/*Lineas Horizontales y verticales en repetición
for (l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * l;
  dibujarLinea(colorcito, 0, yi, 300, xf);
  dibujarLinea(colorcito, yi, 0, xf, 300);
}*/

/*contorno
dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito, 1, 1, 299, 1);
dibujarLinea(colorcito, 299, 1, 299, 299);*/



/*Iniciar funcion click
function dibujo_click()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "olive";
  var espacio = ancho / lineas;

  for (l = 0; l < lineas; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, ancho);
  }
}
*/


