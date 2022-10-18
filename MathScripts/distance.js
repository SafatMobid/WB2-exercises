var x1 = 9;
var x2 = 5;
var y1 = 6;
var y2 = 3;
var xA = x1 - x2;
var yA = y1 -y2;

var distance = Math.sqrt((Math.pow(xA, 2) + (Math.pow(yA, 2))));

console.log ("The distance between the points " + x1+ ","+ y1 + " and " + x2 + "," + y2 + " is " + distance);