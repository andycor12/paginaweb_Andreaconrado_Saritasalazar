const id = document.getElementById("saveUser")

id.addEventListener('click', saveUser);

function saveUser() {
    const snombre = document.querySelector('#textnombre').value,
        sapellido = document.querySelector('#textapellido').value,
        sapellido2 = document.querySelector('#textapellido2').value,
        stelefono = document.querySelector('#texttelefono').value,
        sdocumento = document.querySelector('#textdocumento').value,
        ssangre = document.querySelector('#textgrupo').value,
        scorreo = document.querySelector('#textcorreo').value,
        subicacion = document.querySelector('#textubicacion').value,
        smensaje = document.querySelector('#textmensaje').value


    addFriend(snombre, sapellido, sapellido2, stelefono, sdocumento, ssangre, scorreo, subicacion, smensaje);

    
}

function drawfriendsTable() {
    var list = getUserlist(),
        tbody = document.querySelector('#friendsTable tbody');
        tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i);
        var nameCell = row.insertCell(0),
            apellidoCell = row.insertCell(1),
            apellido2Cell = row.insertCell(2)
            telefonoCell = row.insertCell(3),
            adocumento = row.insertCell(4),
            asangre = row.insertCell(5),
            acorreo =  row.insertCell(6),
            aubicacion =  row.insertCell(7),
            amensaje =  row.insertCell(8),
            selectCell = row.insertCell(9)



        nameCell.innerHTML = list[i].Nombre;
        apellidoCell.innerHTML = list[i].Primer_apellido;
        apellido2Cell.innerHTML = list[i].Segundo_apellido;
        telefonoCell.innerHTML = list[i].Telefono;
        adocumento.innerHTML = list[i].Numero_de_documento;
        asangre.innerHTML = list[i].Grupo_Sanguineo;
        acorreo.innerHTML = list[i].Correo_electronico;
        aubicacion.innerHTML = list[i].Ubicacion;
        amensaje.innerHTML = list [i].Mensaje;


        var inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i];
        selectCell.appendChild(inputSelect);


        tbody.appendChild(row);
    }




}