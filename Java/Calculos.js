function calcularOrden(){
    var FP = parseFloat(document.getElementById("FP").value);
    var FS = parseFloat(document.getElementById("FS").value);
    var orden = Math.log10(Math.sqrt(Math.pow(10,0.1*40)-1)/Math.sqrt(Math.pow(10,0.1*3)-1))/Math.log10(FS/FP);
    return orden;
}

function calculo2Orden(){
    var FP = parseFloat(document.getElementById("FP").value);
    var RS = parseFloat(document.getElementById("RS").value);
    var C1= 1.414/(2*FP*RS*Math.PI);
    var C2= 0.707/(2*FP*RS*Math.PI);
    return [C1,C2];
}

function calculo3Orden(){
    var FP = parseFloat(document.getElementById("FP").value);
    var RS = parseFloat(document.getElementById("RS").value);
    var C1= 3.546/(2*FP*RS*Math.PI);
    var C2= 1.392/(2*FP*RS*Math.PI);
    var C3= 0.2024/(2*FP*RS*Math.PI);
    return [C1,C2,C3];
}

function calculo4Orden(){
    var FP = parseFloat(document.getElementById("FP").value);
    var RS = parseFloat(document.getElementById("RS").value);
    var C1= 1.082/(2*FP*RS*Math.PI);
    var C2= 0.9241/(2*FP*RS*Math.PI);
    var C3= 2.6130/(2*FP*RS*Math.PI);
    var C4= 0.3825/(2*FP*RS*Math.PI);
    return [C1,C2,C3,C4];
}

function calculo5Orden(){
    var FP = parseFloat(document.getElementById("FP").value);
    var RS = parseFloat(document.getElementById("RS").value);
    var C1= 1.753/(2*FP*RS*Math.PI);
    var C2= 1.354/(2*FP*RS*Math.PI);
    var C3= 0.4214/(2*FP*RS*Math.PI);
    var C4= 3.235/(2*FP*RS*Math.PI);
    var C5= 0.309/(2*FP*RS*Math.PI);
    return [C1,C2,C3,C4,C5];
}

function calculo6Orden(){
    var FP = parseFloat(document.getElementById("FP").value);
    var RS = parseFloat(document.getElementById("RS").value);
    var C1= 1.0350/(2*FP*RS*Math.PI);
    var C2= 0.9660/(2*FP*RS*Math.PI);
    var C3= 1.4140/(2*FP*RS*Math.PI);
    var C4= 0.7071/(2*FP*RS*Math.PI);
    var C5= 3.8630/(2*FP*RS*Math.PI);
    var C6= 0.2588/(2*FP*RS*Math.PI);
    return [C1,C2,C3,C4,C5,C6];
}

function calculo7Orden(){
    var FP = parseFloat(document.getElementById("FP").value);
    var RS = parseFloat(document.getElementById("RS").value);
    var C1= 1.5310/(2*FP*RS*Math.PI);
    var C2= 1.3360/(2*FP*RS*Math.PI);
    var C3= 0.4885/(2*FP*RS*Math.PI);
    var C4= 1.6040/(2*FP*RS*Math.PI);
    var C5= 0.6235/(2*FP*RS*Math.PI);
    var C6= 4.4930/(2*FP*RS*Math.PI);
    var C7= 0.2225/(2*FP*RS*Math.PI);
    return [C1,C2,C3,C4,C5,C6,C7];
}
	
function calculo8Orden(){
    var FP = parseFloat(document.getElementById("FP").value);
    var RS = parseFloat(document.getElementById("RS").value);
    var C1= 1.0200/(2*FP*RS*Math.PI);
    var C2= 0.9809/(2*FP*RS*Math.PI);
    var C3= 1.2020/(2*FP*RS*Math.PI);
    var C4= 0.8313/(2*FP*RS*Math.PI);
    var C5= 1.8000/(2*FP*RS*Math.PI);
    var C6= 0.5557/(2*FP*RS*Math.PI);
    var C7= 5.1250/(2*FP*RS*Math.PI);
    var C8= 0.1950/(2*FP*RS*Math.PI);
    return [C1,C2,C3,C4,C5,C6,C7,C8];
}
	
function calculo9Orden(){
    var FP = parseFloat(document.getElementById("FP").value);
    var RS = parseFloat(document.getElementById("RS").value);
    var C1= 1.4550/(2*FP*RS*Math.PI);
    var C2= 1.3270/(2*FP*RS*Math.PI);
    var C3= 0.5170/(2*FP*RS*Math.PI);
    var C4= 1.3050/(2*FP*RS*Math.PI);
    var C5= 0.7661/(2*FP*RS*Math.PI);
    var C6= 2.0000/(2*FP*RS*Math.PI);
    var C7= 0.5000/(2*FP*RS*Math.PI);
    var C8= 5.7580/(2*FP*RS*Math.PI);
    var C9= 0.1736/(2*FP*RS*Math.PI);
    return [C1,C2,C3,C4,C5,C6,C7,C8,C9];
}
	
function calculo10Orden(){
    var FP = parseFloat(document.getElementById("FP").value);
    var RS = parseFloat(document.getElementById("RS").value);
    var C1= 1.0120/(2*FP*RS*Math.PI);
    var C2= 0.9874/(2*FP*RS*Math.PI);
    var C3= 1.1220/(2*FP*RS*Math.PI);
    var C4= 0.8908/(2*FP*RS*Math.PI);
    var C5= 1.4140/(2*FP*RS*Math.PI);
    var C6= 0.7071/(2*FP*RS*Math.PI);
    var C7= 2.2020/(2*FP*RS*Math.PI);
    var C8= 0.4540/(2*FP*RS*Math.PI);
    var C9= 6.3900/(2*FP*RS*Math.PI);
    var C10= 0.1563/(2*FP*RS*Math.PI);
    return [C1,C2,C3,C4,C5,C6,C7,C8,C9,C10];
}
		
	
	
	
	
	
		
		
		
	
	


