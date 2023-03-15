
function validateForm()
{
   var uname=document.getElementById("email").value;
   var pwd=document.getElementById("pwd1").value;
   if(uname == '')
   {
         alert("please enter user name.");
         return false
   }
   else if(pwd == '')
   {
         alert("enter the password");
         return false
   }
   else  if (pwd.length<6||pwd.length>6)
   {
          alert("password min and max length is 6.");
   return false
   }
   else
   { 
          alert('Thank you for login&you are redirecting to Campuslife website');
          return true
    }


}   


