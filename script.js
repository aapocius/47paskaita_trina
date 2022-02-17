'use strict';

//Sukurti tuščią masyvą.
// Sukurti input, kuris pridės žodžius į masyvą.
// Suprogramuoti žodžių iš masyvo pridėjimą į DOM.
// Suprogramuoti žodžių iš masyvo pridėjimą į localstorage.
// Suprogramuoti žodžių pridėjimą iš localstorage atgal į masyvą.
// Papildomai: suprogramuoti žodžių ištrinimą iš masyvo ir per DOM.

var names   = [];
var nameInput   = document.getElementById("name");
var messageBox  = document.getElementById("display");

function insert ( ) {
 
 names.push( nameInput.value );  
 clearAndShow();

 //prideda masyva i localstorge
 localStorage.setItem("names", JSON.stringify(names));
var lsNames = JSON.parse(localStorage.getItem("names"));



}
function clearAndShow () {
  // isvalo laukeli
  
  nameInput.value = "";
  
  // parodo 
 messageBox.innerHTML = " ";
 messageBox.innerHTML += names.join(", ") ;

 console.log(names);

}
 
//istrina masyo elementus
messageBox.innerHTML = names;
  function arrDelete() {
        names.pop();
        console.log(names);
        messageBox.innerHTML = names;
   
        // localStorage.splice('names', 1);
        localStorage.removeItem('names');
        // localStorage.setItem(names, JSON.stringify(names));
    
        
  }


