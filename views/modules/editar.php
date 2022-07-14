<?php
session_start();
require_once "../../controllers/controller.php";
require_once "../../models/crud.php";

			$id=$_POST['id'];
			$editarProducto = new MvcController();
			$editarProducto -> editarEmpleadoController($id);


		/* 	$_SESSION['id']=$_POST['id'];
			$editarProducto = new MvcController();
			$editarProducto -> editarEmpleadoController($_SESSION['id']); */
			
?>



