
<div class="container-fluid">


    <h1 class="float-left">Lista de empleados</h1>    

        <!-- Button trigger modal -->
    <button type="button" id="crearEmpleado" class="float-right btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i class="bi bi-person-plus-fill"></i> Crear
    </button>
  
  <table class="table">
    <thead>
      <tr>        
        <th scope="col"><i class="bi bi-person-fill"></i> Nombre</th>
        <th scope="col"><i class="bi bi-at"></i> Email</th>
        <th scope="col"><i class="bi bi-gender-ambiguous"></i> Sexo</th>
        <th scope="col"><i class="bi bi-briefcase-fill"></i> Área</th>
        <th scope="col"><i class="bi bi-envelope-fill"></i> Boletín</th>
        <th scope="col">Modificar</th>
      <th scope="col">Borrar</th>	    
      </tr>
    </thead>
    <tbody>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="modalCrearEmpleado" class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" id="botonCrear" class="btn btn-primary" data-dismiss="modal">Guardar</button>
        <button type="button" id="botonEditar" class="d-none btn btn-primary" data-dismiss="modal">Actualizar</button>
        <button type="button" id="botonEliminar" class="d-none btn btn-primary" data-dismiss="modal">Eliminar</button>
      </div>
    </div>
  </div>
</div>






    


    <?php
      $listarProductos = new MvcController();
      $listarProductos -> listarEmpleadosController();      
    ?>
    </tbody>
  </table>
</div>

<?php



?>




