<?php
session_start();
require_once "../../controllers/controller.php";
require_once "../../models/crud.php";
?>

<div class="container-fluid">
	
	<!-- <form method="post"> -->
		
		<?php
			$_SESSION['id']=$_POST['id'];

			$editarProducto = new MvcController();
			$editarProducto -> editarEmpleadoController($_SESSION['id']);

		?>

	<!-- </form> -->
</div>


