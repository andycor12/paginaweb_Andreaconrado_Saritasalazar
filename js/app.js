var Username = document.getElementById('username');
var Password = document.getElementById('password');
var Category = document.getElementById('txtvalue');

function ddlselect(){
    var Category=document.getElementById("category");
    var displaytext=category.options[Category.selectedIndex].text;
    document.getElementById("txtvalue").value=displaytext;
}

// Los guardo en localStorage
function store() {
    localStorage.setItem('Category', category.value);
    localStorage.setItem('Username', Username.value);
    localStorage.setItem('Password', Password.value);
    alert('Date correct save');
    window.location="../html/sesion.html";
}

//mostrar datos


    $('#success').click(function(){                       
        check();
    });   
//Validamos el inicio de sesion
function check() {
    var Username1 = localStorage.getItem("Username");
    var Password1 = localStorage.getItem("Password");
    var Category1 = localStorage.getItem("Category");
    var Username2 = $('#user').val();
    var Password2 = $('#pass').val();
    if(Username2 == Username1 && Password2 == Password1){
        switch (Category1) {
            case '1':
                alert('El usuario : '+Username2
                +'\nEs administrador@ del Sistema')
                window.location="../index.html";
            break;
            case '2':
                alert('El usuario : '+Username2
                +'\nEs Invitad@ del Sistema')
                window.location="../index.html";
            break;
        }
    }else {
        alert('Error Data');
    }
}