var length = 25;
var width = 50;
var area = length * width;
var boxes = Math.ceil (area / 12);
var moreBoxes = Math.ceil ((area / 12) + (0.1 * boxes));

console.log ("If a room is " + length +"ft by " + width + "ft then you would need " + boxes + " boxes to make sure you have enough tiles")
console.log ("If a room is " + length +"ft by " + width + "ft and you wanted about 10% more for crack and accidents then you would need " + moreBoxes + " boxes to make sure you have enough tiles")