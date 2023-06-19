document.getElementById("p2").style.color = "Brown";
document.getElementById("Skills").style.color = "Red";


var Nome = document.myForm.Nome.value; // variabile con i vari form
var email = document.myForm.email.value;
var message = document.myForm.message.value;
var submit = document.myForm.action

//regex per l'email 
var email_reg_exp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;


// se nome non e definito  , fai errore
if ((Nome == "") || (Nome == "undefined")) {
    alert("Il campo Nome è obbligatorio.");
    document.myForm.Nome.focus();
    return false;
}

   // se email diverso da elemento email o email  vuoto o l'email è indefinito
    if (!email_reg_exp.test(email) || (email == "") || (email == "undefined")) {
        alert("Inserire un indirizzo email corretto.");
        document.myForm.email.select();
        return false;
        }


        else {
            document.myForm.action = "elabora";
            document.myForm.submit();
            }
            

    