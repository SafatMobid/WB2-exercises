var saving_current = "24000";
var interestrate = "9.3";
var saving_want = "54000";

var year = (saving_want - saving_current) / interestrate;

console.log("At a " + interestrate + "% interest rate, your saving account will be worth " + saving_want + " in " + year + " years");