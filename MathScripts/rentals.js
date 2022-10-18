var people = 38;
var van = Math.ceil (people / 15);
var vanCost = van * 250;
var vanCostPP = vanCost / people;
var vanCostPP = parseFloat(vanCostPP.toFixed(2));

console.log ("If there are " + people + " going on tour, then you need " + van + " vans. It will cost $" + vanCost + 
" a day. If you wanted to split is among the people on tour then it will cost $" + vanCostPP + " per person to cover the cost of all the vans")
