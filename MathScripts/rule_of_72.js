var saving_current = "24000";
var interestrate = "0.093";
var saving_want = saving_current * 2;

var year = (saving_want - saving_current) * interestrate;

console.log("At a " + interestrate + "% interest rate, your saving account will be worth " + saving_want + " in " + year + " years");