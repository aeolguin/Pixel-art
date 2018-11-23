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

var paleta = document.getElementById("paleta");
var grillaPixel = document.getElementById("grilla-pixeles");
var indicadorDeColor = document.getElementById("indicador-de-color");
var mousePresionado = false;

console.log(mousePresionado);

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;

  })
);

function colorSeleccionado(e) {
  indicadorDeColor.style.backgroundColor= e.target.style.backgroundColor;
}

function pintaColor(e) {
  e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
}


function mouseDown(e){
  mousePresionado = true
}

function dejaDePintar(e){
  mousePresionado = false
}

function pintaContinuo(e){
  if(mousePresionado){
    e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
  }
}

function paletaColores () {
  for (i=0 ; i<nombreColores.length ; i++) {
    var pal1 = document.createElement("div");
    paleta.appendChild(pal1);
    pal1.className = "color-paleta";
    pal1.style.backgroundColor = nombreColores[i];
    pal1.addEventListener("click" , colorSeleccionado);
    
  }
}

function grillaPixeles() {
  for (i=0 ; i< 1750; i++){
    var grill1 = document.createElement("div");
    grillaPixel.appendChild(grill1);
    grill1.className = "pixel-grilla";
    grill1.addEventListener("click" , pintaColor);
    grill1.addEventListener("mousedown", mouseDown);
    grill1.addEventListener("mouseup", dejaDePintar);
    grill1.addEventListener("mousemove", pintaContinuo);
  }
}

function borrarTodo() {
  $(document).ready(function(){
    var $elemento = $(".pixel-grilla");
    console.log($elemento);
    $elemento.animate({
      opacity:"0,5",
      backgroundColor:"white"},
       1500);
  })
  }
  
function botonBorrar() {
  $(document).ready(function(){
    var $aprietaBoton = $("#borrar");
    $aprietaBoton.click(borrarTodo); 
  })
}

function cargadorDeSuperheroe(e) {
  var cargar = e.target.id;
  if (cargar === "batman") {
    cargarSuperheroe(batman);
  }
  if (cargar === "wonder"){
    cargarSuperheroe(wonder);
  }
  if (cargar === "flash"){
    cargarSuperheroe(flash);
  }
  if (cargar === "invisible"){
    cargarSuperheroe(invisible);
  }
}

function superCarga(){
  $(document).ready(function() {
    var $heroe = $(".superCarga");
    $heroe.click(cargadorDeSuperheroe);
  })
}


function guardaImagen(){
  $(document).ready(function(){
    var $guardarImagen = $("#guardar");
    $guardarImagen.click(guardarPixelArt);
  })
}



// Invocamos las Funciones
paletaColores();
grillaPixeles();
botonBorrar();
superCarga();
guardaImagen();