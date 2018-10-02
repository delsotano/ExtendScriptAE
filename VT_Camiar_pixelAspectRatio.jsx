// Tiene que haber compos seleccionadas
var selected = [];

selected = app.project.selection;
var prgunta = prompt ("Pixel aspect ratio deseado", 1.46, "PaR")
for (var i = 0; i< selected.length; i++){
    var micomp = selected[i];
    micomp.pixelAspect = prgunta;
    
    }
