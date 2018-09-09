﻿

// variables generales

var pro = app.project;
var comp;
var miFondo;
var miCapa;
var miScalaFinal;
var miDuracion;
var miFootage;
var miScalaExpresion;
var miRotacionExpresion;
var miNulo;

// Chequeo e importación del fondo;

app.beginUndoGroup("Importacion");
var chequeo = false;
for(var i= 1; i<= pro.numItems; i++){
    miFootage = pro.item(i);
    if (miFootage.name == "luna 02.mov"){ //cambiar por el archivo que sea
        chequeo =true;
        
        }
    }
if(!(chequeo)){
        var miFile = new File("/Users/javige/Desktop/luna\ 02.mov"); //cambiar por el archivo que sea
        var miImportOption = new ImportOptions();
        miImportOption.file = miFile;
        pro.importFile(miImportOption);
        chequeo =true;
        }
    
app.endUndoGroup();

// Creacion de nulo y linkado

app.beginUndoGroup("nulo");

comp =  pro.activeItem;

if (!(comp instanceof CompItem)){    //alerta para seleccionar la compo
    alert("Selecciona la compo a VayaTelizar");
    } 


miDuracion = comp.duration; // probar un catch error
miNulo = comp.layers.addNull(miDuracion);


for (var i= 1; i<= comp.numLayers; i++){
    miCapa= comp.layer(i);
    if (!(miCapa.adjustmentLayer || miCapa.nullLayer) ){
        miCapa.parent = miNulo;
        }
    }

app.endUndoGroup();

// Pregunta de Scala y aplicación

app.beginUndoGroup("Scala");
var miScala = prompt("Cuánto es la escala final?",125);

miScalaExpresion = "x=ease(time, thisLayer.inPoint, thisLayer.outPoint,100,"+miScala.toString()+");[x,x]";
comp.layer(1).property("Transform").property("Scale").expression = miScalaExpresion;

app.endUndoGroup();

// Pregunta sobre rotacion y reotacion independiente de capas vinculadas a slider
app.beginUndoGroup("rotation");
var siRota = confirm("¿quieres que roten?");

var suRotacion;

if(siRota){suRotacion=prompt("Grados para rotar",3);
    miNulo=comp.layer(1);
    miNulo.effect.addProperty("ADBE Slider Control");
    miNulo.effect("Slider Control").property("Slider").setValue(suRotacion);
    var Neg= suRotacion*-1;
    var SliderControl = 
    miRotacionExpresion ="ease(time, thisLayer.inPoint, thisLayer.outPoint,thisComp.layer(1).effect(\"Slider Control\")(\"Slider\")*(-1),thisComp.layer(1).effect(\"Slider Control\")(\"Slider\"))";
    
    for (var i= 1; i<= comp.numLayers; i++){
    miCapa= comp.layer(i);
    
    if (!(miCapa.adjustmentLayer || miCapa.nullLayer) ){
        miCapa.property("Transform").property("Rotation").expression = miRotacionExpresion;
        }
    }
    }
app.endUndoGroup();

// Añadir la capa fondo al final;

app.beginUndoGroup("Añadir Fondo");
for(var i= 1; i<= pro.numItems; i++){
    miFootage = pro.item(i);
    if (miFootage.name == "luna 02.mov"){ //cambiar por el archivo que sea
        miFondo = miFootage;
        
        }
    }

comp.layers.add(miFondo);
comp.layer(1).moveToEnd();





