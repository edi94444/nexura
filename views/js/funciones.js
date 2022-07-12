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





$(".editarEmpleado").click(function(){ 
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
});





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
