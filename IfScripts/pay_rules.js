var hoursWorked = 40;
var payrate = 25.00;
 

if (hoursWorked <= 40)
{
    grosspay =  (hoursWorked * payrate);
}

else (hoursWorked > 40)
{
    grosspay = ((hoursWorked*1.5)*payrate);
}

console.log ("if you worked " + hoursWorked + " hours, then you would make $" + grosspay);