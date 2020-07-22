var newUser = document.getElementById('newUser');
var newPassword = document.getElementById('newPassword');
var Category = document.getElementById('txtvalue');

function ddlselect(){
    var Category=document.getElementById("category");
    var displaytext=category.options[Category.selectedIndex].text;
    document.getElementById("txtvalue").value=displaytext;
}

// Los guardo en localStorage
function store() {
    localStorage.setItem('Category', category.value);
    localStorage.setItem('newUser', newUser.value);
    localStorage.setItem('newPassword', newPassword.value);
    alert('Dato correctamente guardado');
    window.location="../index.html";
}

//mostrar datos
function mostrar(){
    // Rescato la data del localstorage
     var newUser1 = localStorage.getItem('newUser');
     var newPassword1 = localStorage.getItem('newPassword');
     var Category1 = localStorage.getItem('Category');
     // Obtengo los datos del login-----value
     var userName = document.getElementById('user');
     var userPassword = document.getElementById('pass');
     // Comparo si el usuario existe y lo muestro en un alert
      if(userName.value == newUser1 && userPassword.value == newPassword1) {
          alert('El usuario es : '+newUser1
                 +'\nsu tipo de rol es: '+Category1);
     }else {
         alert('Error del Dato');
  
    }
 
    window.location="../html/Registrer.html";
 }
 