// Creación guias de seguridad Instagram Stories


app.beginUndoGroup("VT Stories");

var comp = app.project.activeItem;

if ((comp == null) || (!(comp instanceof CompItem))){
    alert("Selecciona la compo");
    }

var iz, de, ar, ab;
var visor;

iz=comp.addGuide(1,50);
de=comp.addGuide(1,comp.width-50);
ar=comp.addGuide(0,250);
ab=comp.addGuide(0,comp.height-250);

visor = app.activeViewer;

visor.setActive();
app.executeCommand(2275);
if (visor.views[0].options.guidesLocked === true) { alert("guías bloqueadas")} else {alert("bloquea las guías")};





app.endUndoGroup();