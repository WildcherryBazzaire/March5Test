var arr = ["John","Gotti","Says","Hello!"];
var string = "Goodbye!";

arr.pop();
arr.push(string);

var created = document.createElement("div");
created.id = "fourth";
document.body.appendChild(created);

for(var i=0; i < arr.length; i++) {
  var temp = document.createElement("p");
  temp.innerHTML = arr[i];
  document.getElementById("fourth").appendChild(temp);
}

var obj = {
  EricHarris: "Apple Lisa",
  DylanKlebold: "School Hero",
  AndyWarhol: "Empire"
}

for(var key in obj) {
  var temp2 = document.createElement("p");
  temp2.innerHTML = obj[key];
  document.getElementById("fourth").appendChild(temp2);
}