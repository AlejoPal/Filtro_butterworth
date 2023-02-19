
function Mostrarinfo(){
    var orden = Math.ceil(calcularOrden());
    console.log(orden);
    switch(orden){
        case 2:
            var img = document.createElement('img'); 
            img.src = '../Imagenes/Pasabajos2.png'; 
            document.getElementById("Llenar").appendChild(img)
            document.getElementById("Llenar").appendChild(genera_tabla(calculo2Orden()));
    }
}

function genera_tabla(arreglo) {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i < 2; i++) {
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
  