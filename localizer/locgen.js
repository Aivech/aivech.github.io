var domain = document.getElementById("modid");
var unlocTemp = document.getElementById("unloctemp");
var locTemp = document.getElementById("loctemp");

var matList = document.getElementById("matlist");
var itemList = document.getElementById("itemlist");

var output = document.getElementById("output");

function generate() {
  var materials = matList.value;
  var items = itemList.value;
  
  var locMatArray = [];
  var unlocMatArray = [];
  var locItemArray = [];
  var unlocItemArray = [];
  
  materials = materials.replace(/\n/mg,";");
  
  items = items.replace(/\n/mg,";");
  
  while(materials.indexOf(";") != -1) {
    var namepair = materials.substring(0,materials.indexOf(";"));
    if(namepair != "") {
      var pair = namepair.split(",");
      unlocMatArray.push(pair[0]);
      locMatArray.push(pair[1]);
    }
    materials = materials.substr(materials.indexOf(";")+1);
  }
  
  if(materials != "") {
    var pair = materials.split(",");
    unlocMatArray.push(pair[0]);
    locMatArray.push(pair[1]);
  }
  
  while(items.indexOf(";") != -1) {
    var namepair = items.substring(0,items.indexOf(";"));
    if(namepair != "") {
      var pair = namepair.split(",");
      unlocItemArray.push(pair[0]);
      locItemArray.push(pair[1]);
    }
    items = items.substr(items.indexOf(";")+1);
  }
  if(items != "") {
    var pair = items.split(",");
    unlocItemArray.push(pair[0]);
    locItemArray.push(pair[1]);
  }
  
  var unloc = "item." + domain.value + ":" + unlocTemp.value + ".name";
  var local = locTemp.value;
  
  output.innerHTML = "";
  
  for (i = 0; i < unlocMatArray.length; i++) {
    var unlocString = unloc.replace(/%m/g,unlocMatArray[i]);
    var localString = local.replace(/%m/g,locMatArray[i]);
    
    for(l = 0; l < unlocItemArray.length; l++) {
      output.innerHTML += (unlocString.replace(/%i/g,unlocItemArray[l]) + "=" + localString.replace(/%i/g,locItemArray[l]) + "<br>");
    }
    output.innerHTML += "<br>";
  }
}
