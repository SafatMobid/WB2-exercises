var a=100
var b=1000
var c=10
var size = "smallest" 

if (size == "largest")
{ 
    if (a > b && a > c)
    console.log(a + " is the largest");

    if (b > a && b > c)
    console.log(b + " is the largest");

    if (c > b && c > a)
    console.log(c + " is the largest");
}

else if (size = "smallest")
{   
    if (a < b && a < c)
    console.log(a + " is the smallest");
    
    if (b < a && b < c)
    console.log(b + " is the smallest");
    
    if (c < b && c < a)
    console.log(c + " is the smallest");
}