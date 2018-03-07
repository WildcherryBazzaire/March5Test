var arr = ["John","Gotti","Says","Hello!"];
var string = "Goodbye!";
var randomP = document.getElementById("random");

arr.pop();
arr.push(string);

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

function random() {
  randomP.innerHTML = arr[Math.floor(Math.random() * (arr.length))]
}