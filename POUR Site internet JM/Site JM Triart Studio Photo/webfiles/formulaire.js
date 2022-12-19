function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var prename = document.forms["myForm"]["prename"];               
    var email = document.forms["myForm"]["email"];    
    var ville = document.forms["myForm"]["ville"];    
    var message = document.forms["myForm"]["message"];   
   
    
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
        prename.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }


    if (prename.value == "")                                  
    { 
        document.getElementById('errorprename').innerHTML="Veuillez entrez un nom valide";  
        prename.focus(); 
        return false; 
    }else{
        document.getElementById('errorprename').innerHTML="";  
    }


    if (ville.value == "")                                  
    { 
        document.getElementById('errorville').innerHTML="Veuillez entrez un nom valide";  
        ville.focus(); 
        return false; 
    }else{
        document.getElementById('errorville').innerHTML="";  
    }



       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
        email.focus(); 
        return false; 
    } 


   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Veuillez entrez un message valide"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}