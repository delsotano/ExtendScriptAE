
app.beginUndoGroup("Importación y añadido");
var myFile = new File ("/Users/javige/Desktop/luna\ 02.mov");
var myImportOptions = new ImportOptions();
myImportOptions.file = myFile;

app.project.importFile(myImportOptions);

var proj = app.project;
var miComp = proj.activeItem;
var numProj = proj.numItems;
alert(numProj);

var selection = undefined;

for (var i = 1; i<= numProj, i+=1;){
    
    if (proj.item(i).name == "luna 02.mov"){
    selection = proj.item(i);
    if (selection !== undefined) {
    
    miComp.layers.add(selection);
    }
    }
}
app.endUndoGroup();
