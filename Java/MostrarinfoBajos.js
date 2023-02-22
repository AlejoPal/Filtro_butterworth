var imgPasabajos2= document.createElement('img'); 
var imgPasabajos3= document.createElement('img'); 
var imgPasabajos4= document.createElement('img'); 
var imgPasabajos5= document.createElement('img'); 
var imgPasabajos6= document.createElement('img'); 
var imgPasabajos7= document.createElement('img'); 
var imgPasabajos8= document.createElement('img'); 
var imgPasabajos9= document.createElement('img'); 
var imgPasabajos10= document.createElement('img'); 


var Alerta = document.createElement('h1');
Alerta.innerHTML = 'Grado invalido';
Alerta.className = "Peligro";


imgPasabajos2.src = '../Imagenes/Pasabajos2.png';
imgPasabajos3.src = '../Imagenes/Pasabajos3.png';
imgPasabajos4.src = '../Imagenes/Pasabajos4.png';
imgPasabajos5.src = '../Imagenes/Pasabajos5.png';
imgPasabajos6.src = '../Imagenes/Pasabajos6.png';
imgPasabajos7.src = '../Imagenes/Pasabajos7.png';
imgPasabajos8.src = '../Imagenes/Pasabajos8.png';
imgPasabajos9.src = '../Imagenes/Pasabajos9.png';
imgPasabajos10.src = '../Imagenes/Pasabajos10.png';

imgPasabajos1.className = "img-fluid";
imgPasabajos2.className = "img-fluid";
imgPasabajos3.className = "img-fluid";
imgPasabajos4.className = "img-fluid";
imgPasabajos5.className = "img-fluid";
imgPasabajos6.className = "img-fluid";
imgPasabajos7.className = "img-fluid";
imgPasabajos8.className = "img-fluid";
imgPasabajos9.className = "img-fluid";
imgPasabajos10.className = "img-fluid";



function MostrarinfoBajos(){
    
    var orden = Math.ceil(calcularOrden());
    console.log(orden);
    switch(orden){
        case 2: 
            document.getElementById('Imagen').innerHTML = "";
            document.getElementById("Imagen").appendChild(imgPasabajos2);
            genera_tabla(calculo2Orden());
            break;
        case 3:
            document.getElementById('Imagen').innerHTML = "";
            document.getElementById("Imagen").appendChild(imgPasabajos3);
            genera_tabla(calculo2Orden());
            break;
        case 4:
            document.getElementById('Imagen').innerHTML = "";
            document.getElementById("Imagen").appendChild(imgPasabajos4);
            genera_tabla(calculo4Orden());
            break;
        case 5:
            document.getElementById('Imagen').innerHTML = "";
            document.getElementById("Imagen").appendChild(imgPasabajos5);
            genera_tabla(calculo5Orden());
            break;
        case 6:
            document.getElementById('Imagen').innerHTML = "";
            document.getElementById("Imagen").appendChild(imgPasabajos6);
            genera_tabla(calculo6Orden());
            break;
        case 7:
            document.getElementById('Imagen').innerHTML = "";
            document.getElementById("Imagen").appendChild(imgPasabajos7);
            genera_tabla(calculo7Orden());
            break;
        case 8:
            document.getElementById('Imagen').innerHTML = "";
            document.getElementById("Imagen").appendChild(imgPasabajos8);
            genera_tabla(calculo8Orden());
            break;
        case 9:
            document.getElementById('Imagen').innerHTML = "";
            document.getElementById("Imagen").appendChild(imgPasabajos9);
            genera_tabla(calculo9Orden());
            break; 
        case 10:
            document.getElementById('Imagen').innerHTML = "";
            document.getElementById("Imagen").appendChild(imgPasabajos10);
            genera_tabla(calculo10Orden());
            break;   
        default:
            document.getElementById("Imagen").appendChild(Alerta);


    }
}

function genera_tabla(arreglo) {
    // Obtener la referencia del elemento body
    var body = document.getElementById("Tabla")
    document.getElementById('Tabla').innerHTML = "";
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < arreglo.length; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        if (j == 0){
            var textoCelda = document.createTextNode("C"+(i+1));
        }
        else{
            var textoCelda = document.createTextNode(arreglo[i]);
        }
        
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
  }
  