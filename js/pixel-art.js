$(document).ready(function(){

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//var indicadorDeColor = document.getElementById("indicador-de-color");
var $indicadorDeColor = $("#indicador-de-color");
var $mousePresionado = false;

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.

var $colorPersonalizado = $("#color-personalizado");
  $colorPersonalizado.change(function(){
  var $colorActual = $colorPersonalizado.val();
  $indicadorDeColor.css("background-color" , $colorActual);
});

function colorSeleccionado() {
  var $colorElegido = $(this).css("background-color");
  $indicadorDeColor.css("background-color" , $colorElegido);
}

function pintaColor(e) {
  var $colorElegido = $indicadorDeColor.css("background-color");
  e.target.style.backgroundColor = $colorElegido;
}

function mouseDown(){
  $mousePresionado = true;
}

function dejaDePintar(){
  $mousePresionado = false;
}

function pintaContinuo(e){
  if($mousePresionado){
    var $colorElegido = $indicadorDeColor.css("background-color");
    e.target.style.backgroundColor = $colorElegido;
  }
}

function paletaColores () {
  var $paleta = $('#paleta');
  for (i=0 ; i<nombreColores.length ; i++) {
    var elementos = $('<div></div>');  
    $paleta.append(elementos);
    elementos.css('background-color',nombreColores[i]);
  }
  $("#paleta div").addClass('color-paleta');
  $("#paleta div").click(colorSeleccionado);
}

function grillaPixeles() {
  var $grill1 = $("#grilla-pixeles");
  for (i=0 ; i< 1750; i++){
    $grill1.append("<div></div>");
  }
  $("#grilla-pixeles div").addClass("pixel-grilla");
    $grill1.click(pintaColor);
    $grill1.mousedown(mouseDown);
    $grill1.mouseup(dejaDePintar);
    $grill1.mousemove(pintaContinuo);
}

function borrarTodo() {
    var $elemento = $("#grilla-pixeles");
    $elemento.animate({
      opacity:0.2
    },1000, function(){
      var $grillaBlanca = $(".pixel-grilla");
      $grillaBlanca.css("backgroundColor","white");
      $elemento.css("opacity", "1"); 
    });
  }
  
function botonBorrar() {
    var $aprietaBoton = $("#borrar");
    $aprietaBoton.click(borrarTodo); 
}

function superCarga(){
    var $heroe = $(".superCarga");
    $heroe.mousemove(function (){
      $heroe.css("cursor", "pointer");
    });
    $heroe.click(function(){
    cargarSuperheroe(window[$(this).attr("id")]);
    });
}

function guardaImagen(){
    var $guardarImagen = $("#guardar");
    $guardarImagen.click(guardarPixelArt);
}

// Invocamos las Funciones
paletaColores();
grillaPixeles();
botonBorrar();
superCarga();
guardaImagen();
});