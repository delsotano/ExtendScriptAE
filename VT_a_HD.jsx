// para pasar compos a HD

app.beginUndoGroup("cambios");

var selection = [];
selection = app.project.selection;

for (var i = 0; i < selection.length; i++){
    
    selection[i].width = 1920;
    selection[i].height= 1080;
    selection[i].pixelAspect= 1;
    selection[i].frameRate = 25;
    
    var miCapa = selection[i].layer(1);
    miCapa.property("Transform").property("Scale").setValue([50,50])
    miCapa.property("Transform").property("Position").setValue([1920/2,1080/2]);
    }
    app.endUndoGroup();
    
