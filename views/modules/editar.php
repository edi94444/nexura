<?php
session_start();
require_once "../../controllers/controller.php";
require_once "../../models/crud.php";

			$id=$_POST['id'];
			$editarProducto = new MvcController();
			$res = $editarProducto -> editarEmpleadoController($id);

			echo json_encode($res);
		
?>



