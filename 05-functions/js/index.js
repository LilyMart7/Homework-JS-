function GetSpeed() {

var distance = parseInt(document.querySelector(".distance").value);
console.log("Distance:  " + distance + "meters");

var time = parseInt(document.querySelector(".time").value);
console.log("Time: " + time + " min");

var div = document.querySelector(".result");


var speed = Speed(distance, time);
div.innerHTML = speed + " m/min";
console.log("Your speed is " + speed + " m/min");
}


function Speed(distance = 0, time = 0){
var result = distance / time;
return result;
}











