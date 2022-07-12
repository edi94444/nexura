<?php
    require_once "../controllers/controller.php";
    require_once "../models/crud.php";

    
    $control = new MvcController();
    $control->creaEmpleadosController($_POST['formCrear']);
    
?>