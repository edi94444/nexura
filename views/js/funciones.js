$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })






$("#botonCrear").on("click", function(){
    var formCrear = $("#formCrear").serializeArray();

     $.ajax({

        url : 'ajax/crearEmpleadoAjax.php',
        data: {formCrear},
        type : 'post',
    
    }).done( function(resp) {
        
        if(resp == "ok"){
            window.location.href = 'index.php?action=listar';
        }else{
            alert('Ocurrió un error');
        };
    
    }); 
});





$("#crearEmpleado").click(function(){    

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






//javascript: botón modificar que esta en listar.php para editar empleado

// creo una variable con todos los botones de la clase
let clasesEditarEmpleado = document.getElementsByClassName("editarEmpleado");

//con el "for of" recorro los botones y les asigno el evento
for(let clase of clasesEditarEmpleado){
    
    clase.addEventListener("click", function(){

        let id = clase.getAttribute('data-id');
        editarEmpleado(id);

    }) 
}


//esta función se ejecuta en el evento click de los botones clasesEditarEmpleado
async function editarEmpleado(id){

     let data = new FormData();
         data.append("id", id);

    //fetch  method: "POST"
    const res = await fetch('views/modules/editar.php', {
                    /* headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },  */   
                    method: "POST",     
                    body: data
                    
                });
    const resp = await res.text();
    
    document.querySelector("#botonCrear").classList.add('d-none')
    document.querySelector("#botonEliminar").classList.add('d-none');
    document.querySelector("#botonEditar").classList.remove('d-none');

    document.querySelector("#exampleModalLabel").innerHTML = "Editar Empleado";
    document.querySelector("#modalCrearEmpleado").innerHTML = resp;
    console.log(resp);

    
}








$("#botonEditar").on("click", function(){
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
});




$(".eliminarEmpleado").click(function(){ 
    var id = $(this).attr("data-id");
    var nombre = $(this).attr("data-nombre");
    $("#botonCrear").addClass('d-none');
    $("#botonEditar").addClass('d-none');
    $("#botonEliminar").removeClass('d-none');

    $("#exampleModalLabel").html('Eliminar Empleado');
    $("#modalCrearEmpleado").html('Está seguro de eliminar empleado '+nombre+'?'); 
    $("#modalCrearEmpleado").append("<input type='hidden' id='capturaId' value='"+id+"'>");   
});


$("#botonEliminar").on("click", function(){
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
});


































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
