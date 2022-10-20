var hoursWorked = 20;
var payrate = 20;

if (hoursWorked <= 40)
{
    grosspay =  (hoursWorked * payrate)
}

if (hoursWorked > 40)
{
    grosspay = (hoursWorked*payrate)
    overtime = (hoursWorked - 40)
    overtimepay = (overtime*payrate)
    increasePay = (overtimepay*1.5)
    grosspay = ((40 * payrate) + increasePay)
}

console.log ("if you worked " + hoursWorked + " hours, then you would make $" + grosspay);