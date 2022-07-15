'use strict'


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// versión jquery y javascript botón crear empleado ////////////

/* $("#crearEmpleado").click(function(){    

     $.ajax({

        url : 'views/modules/registro.php',
            
    }).done( function(resp) {
        $("#botonCrear").removeClass('d-none');
        $("#botonEditar").addClass('d-none');
        $("#botonEliminar").addClass('d-none');

        $("#exampleModalLabel").html('Crear Empleado');
        $("#modalCrearEmpleado").html(resp);

    });    
});
 */



/* $("#botonCrear").on("click", function(){
    var formCrear = $("#formCrear").serialize();

     $.ajax({

        url : 'ajax/crearEmpleadoAjax.php',
        data: formCrear,
        type : 'post'
    
    }).done( function(resp) {
        
        if(resp == "ok"){
            window.location.href = 'index.php?action=listar';
        }else{
            alert('Ocurrió un error');
        }; 

        //console.log(resp);


    
    }); 
}); */



////////////
////////////


const modalCrearEmpleado = async() => {

    const res = await fetch("views/modules/registro.php");
    const resp = await res.text();

    botonCrear.classList.remove('d-none');
    botonEditar.classList.add('d-none');
    botonEliminar.classList.add('d-none');

    exampleModalLabel.innerHTML = "Crear Empleado";
    document.querySelector('#modalCrearEmpleado').innerHTML = resp;

}

crearEmpleado.addEventListener("click", modalCrearEmpleado) 




 const confirmarCrearEmpleado = async () => {

    const form = document.querySelector('#formCrear');
    var data = new FormData(form);

    const res = await fetch('ajax/crearEmpleadoAjax.php', {
                    method: "POST",
                    body: data
                });
    const resp = await res.text();   
    
    if(resp == "ok"){
        window.location.href = 'index.php?action=listar';
    }else{
        alert('Ocurrió un error');
    };

 
}

botonCrear.addEventListener("click", confirmarCrearEmpleado)


//////////// versión jquery y javascript botón crear empleado ////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// versión jquery y javascript botón modificar ////////////


//jquery: botón modificar que esta en listar.php para editar empleado
/* $(".editarEmpleado").click(function(){ 
    var id = $(this).attr("data-id");

    $.ajax({

       url : 'views/modules/editar.php',
       data: {id},
       type : 'post',
           
   }).done( function(resp) {
        $("#botonCrear").addClass('d-none');
        $("#botonEliminar").addClass('d-none');
        $("#botonEditar").removeClass('d-none');

        $("#exampleModalLabel").html('Editar Empleado');
        $("#modalCrearEmpleado").html(resp);

   });    
}); */



////////////
////////////


//javascript: botón modificar que esta en listar.php para editar empleado
//esta función se ejecuta en el evento click de los botones clasesEditarEmpleado
const modalEditarEmpleado = async(id) => {

     let data = new FormData();
         data.append("id", id);

    //fetch  method: "POST"
    const res = await fetch('views/modules/editar.php', {
                       
                    method: "POST",     
                    body: data
                    
                });
    //se usa .text() y no json() cuando la respuesta de php no está codificada con json_encode()           
    const resp = await res.text();
    
    document.querySelector("#botonCrear").classList.add('d-none')
    document.querySelector("#botonEliminar").classList.add('d-none');
    document.querySelector("#botonEditar").classList.remove('d-none');

    document.querySelector("#exampleModalLabel").innerHTML = "Editar Empleado";
    document.querySelector("#modalCrearEmpleado").innerHTML = resp;
}



// creo una variable con todos los botones de la clase
let botonesModificarEmpleado = document.querySelectorAll(".editarEmpleado");

//con el "for of" recorro los botones y les asigno el evento
for(let boton of botonesModificarEmpleado){
    
    boton.addEventListener("click", function(){

        let id = boton.getAttribute('data-id');
        modalEditarEmpleado(id);

    }) 
}

//////////// versión jquery y javascript botón modificar ////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////










/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// versión jquery y javascript botón actualizar (confirmar modificar) ////////////


//jquery: botón actualizar  sale en la modal editar empleado
/* $("#botonEditar").on("click", function(){
    var formEditar = $("#formEditar").serializeArray();

     $.ajax({

        url : 'ajax/editarEmpleadoAjax.php',
        data: {formEditar},
        type : 'post',
    
    }).done( function(resp) {
        
         if(resp == "ok"){
            window.location.href = 'index.php?action=listar';
        }else{
            alert('Ocurrió un error');
        }; 
    
    }); 
}); */




////////////
////////////


//javascript: botón actualizar  sale en la modal editar empleado
const confirmarEditarEmpleado = async() => {

    const form = document.querySelector('#formEditar');    
    var data = new FormData(form);
    //console.log(data.get('id'));
    
    
    const res = await fetch('ajax/editarEmpleadoAjax.php',{

                    method: "POST",     
                    body: data

                });
    //se usa json() y no text() cuando la respuesta de php está codificada con json_encode()            
    const resp = await res.json();  


    if(resp == "ok"){
        window.location.href = 'index.php?action=listar';
    }else{
        alert('Ocurrió un error');
    };
}

botonEditar.addEventListener("click", confirmarEditarEmpleado);


//////////// versión jquery y javascript botón actualizar (confirmar modificar) ////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////







/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// versión jquery y javascript botón eliminar empleado ////////////


/* $(".eliminarEmpleado").click(function(){ 
    var id = $(this).attr("data-id");
    var nombre = $(this).attr("data-nombre");
    $("#botonCrear").addClass('d-none');
    $("#botonEditar").addClass('d-none');
    $("#botonEliminar").removeClass('d-none');

    $("#exampleModalLabel").html('Eliminar Empleado');
    $("#modalCrearEmpleado").html('Está seguro de eliminar empleado '+nombre+'?'); 
    $("#modalCrearEmpleado").append("<input type='hidden' id='capturaId' value='"+id+"'>");   
}); */


/* $("#botonEliminar").on("click", function(){
    var id = $("#capturaId").val();
    

    $.ajax({

        url : 'ajax/eliminarEmpleadoAjax.php',
        data: {id},
        type : 'post',
    
    }).done( function(resp) {

        console.log(resp);
         if(resp == "ok"){
            window.location.href = 'index.php?action=listar';
        }else{
            alert('Ocurrió un error');
        }; 
    
    });  
}); */



////////////
////////////


const modalBorrarEmpleado = (id, nombre) => {

    botonCrear.classList.add('d-none');
    botonEditar.classList.add('d-none');
    botonEliminar.classList.remove('d-none');
    
    exampleModalLabel.innerHTML = 'Eliminar Empleado';
    document.querySelector('#modalCrearEmpleado').innerHTML = 'Está seguro de eliminar empleado '+nombre+'?';
    document.querySelector('#modalCrearEmpleado').innerHTML += "<input type='hidden' id='capturaId' value='"+id+"'>";
}

let botonesBorrarEmpleado = document.querySelectorAll('.eliminarEmpleado');

for(let boton of botonesBorrarEmpleado){
    boton.addEventListener("click", function(){
        let id = boton.getAttribute('data-id');
        let nombre = boton.getAttribute('data-nombre');
        modalBorrarEmpleado(id, nombre);
    })
}




const confirmarBorrarEmpleado = async () => {
    let id = capturaId.value;

    let data = new FormData();
        data.append("id", id);
    const res = await fetch('ajax/eliminarEmpleadoAjax.php', {

                    method: "POST",
                    body: data

                });
    const resp = await res.json();    
            
    if(resp == "ok"){
        window.location.href = 'index.php?action=listar';
    }else{
        alert('Ocurrió un error');
    };             
    

}


botonEliminar.addEventListener("click", confirmarBorrarEmpleado)


//////////// versión jquery y javascript botón eliminar empleado ////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////































/* 

$( document ).ready(function(  ) {
    alert('HOLA');
  }); 


  jQuery(function ($) {
    $(window).on('load', function () {
        // POS_LOAD scripts. Can use $
        alert('1');
    });
    // POS_READY scripts
    alert('2');
});

*/
