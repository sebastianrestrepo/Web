var contMensajes = document.getElementById('contMensajes');
var enviar = document.getElementById('enviar');

enviar.addEventListener("click", function () {
   // alert("Hello World!");
    var textbox = document.getElementById('textbox').value;
    var div = document.createElement("div"); 
    div.innerHTML = '<p id="msj">' + textbox + '</p>'  
    contMensajes.appendChild(div);
    var textbox = document.getElementById('textbox').value = '';
    swal("Nuevo Mensaje!");
});