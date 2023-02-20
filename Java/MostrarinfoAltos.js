var imgPasaaltos2= document.createElement('img'); 
var imgPasaaltos3= document.createElement('img'); 
var imgPasaaltos4= document.createElement('img'); 
var imgPasaaltos5= document.createElement('img'); 
var imgPasaaltos6= document.createElement('img'); 
var imgPasaaltos7= document.createElement('img'); 
var imgPasaaltos8= document.createElement('img'); 
var imgPasaaltos9= document.createElement('img'); 
var imgPasaaltos10= document.createElement('img'); 



var Alerta = document.createElement('h1');
Alerta.innerHTML = 'Grado invalido';

imgPasaaltos2.src = '../Imagenes/Pasabajos2.png';
imgPasaaltos3.src = '../Imagenes/Pasabajos3.png';
imgPasaaltos4.src = '../Imagenes/Pasabajos4.png';
imgPasaaltos5.src = '../Imagenes/Pasabajos5.png';
imgPasaaltos6.src = '../Imagenes/Pasabajos6.png';
imgPasaaltos7.src = '../Imagenes/Pasabajos7.png';
imgPasaaltos8.src = '../Imagenes/Pasabajos8.png';
imgPasaaltos9.src = '../Imagenes/Pasabajos9.png';
imgPasaaltos10.src = '../Imagenes/Pasabajos10.png';




function MostrarinfoAltos(){
    
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
  