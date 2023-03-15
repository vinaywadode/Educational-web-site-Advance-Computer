
function validateForm()
{
   var course=document.getElementById("course").value;
   var duration=document.getElementById("duration").value;
   var coursefess=document.getElementById("coursefess").value;
   var batchtime=document.getElementById("batchtime").value;
   var name=document.getElementById("name").value;
   var address=document.getElementById("address").value;
   var parentname=document.getElementById("parentname").value;
   var Qulification=document.getElementById("Qulification").value;
   var mobile=document.getElementById("mob").value;
   var residence=document.getElementById("residence").value;
   var gmail=document.getElementById("gmail").value; 
   var atposition=gmail.indexOf("@");  
   var dotposition=gmail.lastIndexOf(".");
   var pno=document.getElementById("pno").value;
  
  
    if(course == '')
{
    alert("please choose your course.");
       return false
}
   if(duration == '')
{
     alert("please choose your duration.");
       return false
       
}
 if(coursefess == '')
{
     alert("please enter your fees.");
       return false
}
 if(batchtime == '')
{
     alert("please enter your timing.");
       return false
}
    if(name == '')
{
       alert("please enter name.");
       return false
}
    if(address == '')
{
     alert("please enter your address.");
       return false
 }

if(duration == '')
{
     alert("please choose your duration.");
       return false
}
if(coursefess =='')
{
     alert("please enter your fees.");
       return false
}
if(batchtime == '')
{
     alert("please enter your timing.");
       return false
}
if(parentname == '')
{
       alert("please enter your parentname.");
       return false
}
 if(Qulification == '')
{
       alert("please enter your Qulification.");
       return false
}
 if(mobile == '')
{
     alert("please Enter 10 Digit Mobile No.");
     return false
}   
else if(mobile.length<10 || mobile.length>10)
{
   alert("number min and max  length is 10");
   return false
}
    
 if(residence == '')
{
       alert("please enter your residence.");
       return false
}
  if(gmail == '')
{
     alert("please fill the Email ID box.");
       return false           
}
else  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=gmail.length)
{  
   alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
   return false;  
}    
 if(pno == '')
{
     alert("please Enter your parents 10 Digit Mobile No.");
     return false
}   
else if(pno.length<10 || pno.length>10)
{
   alert(" parents mob number min and max  length is 10");
   return false
}          
}