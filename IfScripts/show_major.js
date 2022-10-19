var studentName="Betty";
var studentMajor="BIOL"

if (studentMajor=="BIOL" && studentName=="Betty")
{   
    console.log("Student:" + studentName)
    console.log("Major: Biology")
    console.log("Advising Location: Science Bldg, Room 310")
    
}
else if (studentMajor=="CSCI" && studentName=="Tom")
{   
    console.log("Student:" + studentName)
    console.log("Major: Computer Science")
    console.log("Advising Location: Sheppard Hall, Room 314")
    
}
else if (studentMajor=="ENG" && studentName=="John")
{   
    console.log("Student:" + studentName)
    console.log("Major: English")
    console.log("Advising Location: Kerr Hall, Room 201")
    
}
else if(studentMajor=="HIST" && studentName=="Jen")
{   
    console.log("Student:" + studentName)
    console.log("Major: History")
    console.log("Advising Location: Kerr Hall, Room 114")
    
}
else if(studentMajor=="MKT" && studentName=="Mia")
{   
    console.log("Student:" + studentName)
    console.log("Major: Marketing")
    console.log("Advising Location: Westly Hall, Room 310")
    
}

else 
{
    console.log("Student or Major cannot be found in Major")
}