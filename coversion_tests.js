// Description: This script tests various numeric conversion techniques
// Author: Safat M. NewProgrammer

var a = "  101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5   ";

a1 = parseInt (a);
b1 = parseInt (b);
c1 = parseInt (c);
d1 = parseInt (d);

a2 = parseFloat (a);
b2 = parseFloat (b);
c2 = parseFloat (c);
d2 = parseFloat (d);

a3 = Number (a);
b3 = Number (b);
c3  = Number (c);
d3 = Number (d);

a4 = +a;
b4 = +b;
c4 = +c;
d4 = +d;

console.log ("The parseInt for the variables " + a1, a2, a3, a4);
console.log ("The parseFloat for the variables " + b1, b2, b3, b4);
console.log ("The Number() for each of the variable is " + c1,c2, c3 ,c4);
console.log ("The Unary+ Operator for each variable is " + d1,d2, d3, d4);