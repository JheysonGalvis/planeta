var teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

document.addEventListener("keydown", dibujar);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

/*Función de empezar a dibujar*/
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujar(evento)
{
  /*if(evento.keyCode == teclas.UP){
    console.log("UP");
  }
  if (evento.keyCode == teclas.DOWN) {
    console.log("DOWN");
  }
  if (evento.keyCode == teclas.LEFT) {
    console.log("LEFT");
  }
  if (evento.keyCode == teclas.RIGHT) {
    console.log("RIGHT");
  }*/

  var color = "olive";
  var movimiento = 5;
  
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(color, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(color, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}