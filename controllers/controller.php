<?php

class MvcController{

	#LLAMADA A LA PLANTILLA
	#-------------------------------------

	public function pagina(){	
		
		include "views/template.php";
	
	}

	#ENLACES
	#-------------------------------------

	public function enlacesPaginasController(){

		if(isset( $_GET['action'])){
			
			$enlaces = $_GET['action'];
		
		}

		else{

			$enlaces = "index";
		}

		$respuesta = Paginas::enlacesPaginasModel($enlaces);

		include $respuesta;

	}

	
	

	#CREA EMPLEDOS
	#------------------------------------
	public function creaEmpleadosController($array){		
		
		$datosController = array();
		foreach($array as $row=>$item){
			
			if(($item['name']) == 'nombre'){
				$datosController['nombre'] = $item['value'];
			}
			if(($item['name']) == 'email'){
				$datosController['email'] = $item['value'];
			}
			if(($item['name']) == 'sexo'){
				$datosController['sexo'] = $item['value'];
			}
			if(($item['name']) == 'area_id'){
				$datosController['area_id'] = $item['value'];
			}
			if(($item['name']) == 'descripcion'){
				$datosController['descripcion'] = $item['value'];
			}
			if(($item['name']) == 'boletin'){
				$datosController['boletin'] = $item['value'];
			}
			if(($item['name']) == 'roles'){
				$datosController['roles'][] = $item['value'];
			}

		}
		
		$respuesta = Datos::creaEmpleadosModel($datosController, "empleado");

		if($respuesta == "ok"){
			echo "ok";
			
		};

	}



	#LISTAR EMPLEADOS
	#------------------------------------

	public function listarEmpleadosController(){

		$respuesta = Datos::listarEmpleadosModel("empleado");
		
		 foreach($respuesta as $row => $item){
			 $boletin = $item["boletin"];
			switch ($boletin) {
				case 1:
					$boletin = "Si";
				break;
				default:
				$boletin = "No";
				break;
			} 			

       
		echo'<tr>
				<th scope="row">'.$item["nombre"].'</th>
				<td>'.$item["email"].'</td>
				<td>'.$item["sexo"].'</td>
				<td>'.$item["area"].'</td>
				<td>'.$boletin.'</td>
				<td><a class="editarEmpleado" data-id="'.$item["id"].'" data-toggle="modal" data-target="#exampleModal"><i class="negrilla bi bi-pencil-square"></i></a></td>

				<td><a class="eliminarEmpleado" data-id="'.$item["id"].'" data-nombre="'.$item["nombre"].'" data-toggle="modal" data-target="#exampleModal"><i class="negrilla bi bi-trash-fill"></i></a></td>

				
				
			</tr>';

		}
		
	}



	#EDITAR EMPLEADO
	#------------------------------------

	public function editarEmpleadoController($id){

		$datosController = $id;
		$respuesta = Datos::editarEmpleadoModel($datosController, "empleado");

		echo'<div class="container-fluid">	
			<form id="formEditar">

				<input type="hidden" value="'.$respuesta["id"].'" name="id">

				<div class="form-row">

					<div class="form-group col-md-4">
						<label for="inputEmail4">Nombre</label>
						<input type="text" class="form-control" id="inputEmail4" value="'.$respuesta["nombre"].'" name="nombre" readonly>
					</div>
				</div>

					
				<div class="form-row">					

					<div class="form-group col-md-2">
						<label for="inputAddress">Email</label>
						<input type="email" class="form-control" id="inputAddress" value="'.$respuesta["email"].'" name="email" required>
					</div>
				</div>

				
			</form>
			</div>';
	}



	#ACTUALIZAR EMPLEADO
	#------------------------------------
	public function actualizarEmpleadoController($array){
		
		
			//recibiendo datos de javascript fetch() FormData
		    $datosController = array( "id"=>$array["id"],
				                      "nombre"=>$array["nombre"],
				                      "email"=>$array["email"]);	


			//recibiendo datos de jquery ajax serializeArray()
			/*  $datosController = array( "id"=>$array[0]["value"],
				                      "nombre"=>$array[1]["value"],
				                      "email"=>$array[2]["value"]); */									  
									  
			$respuesta = Datos::actualizarEmpleadoModel($datosController, "empleado"); 

			if($respuesta == "ok"){

				//enviando respuesta a fetch json
				echo json_encode("ok");

				//enviando respuesta a jquery ajax
				//echo "ok";
				
			};	
	}



	#ELIMINAR EMPLEADO
	#------------------------------------
	public function eliminarEmpleadosController($id){		

		$datosController = $id;
		
		$respuesta = Datos::eliminarEmpleadosModel($datosController, "empleado");

		if($respuesta == "ok"){
			echo json_encode("ok");
		
		}	

	}




	#LISTAR AREAS
	#------------------------------------

	public function listarAreasController(){

		$respuesta = Datos::listarAreasModel("areas");

		foreach($respuesta as $item){
			echo "<option value='$item[id]' >$item[nombre]</option>";			
		}

		
		
	}


	#LISTAR ROLES
	#------------------------------------

	public function listarRolesController(){

		$respuesta = Datos::listarRolesModel("roles");
		$i=0;
		foreach($respuesta as $item){			
			$i++;
			echo "<div class='form-check'>";
			echo "<input class='form-check-input' type='checkbox' id='rolesCheck$i' name='roles' value='$item[id]'>";
			echo "<label class='form-check-label' for='rolesCheck$i'>$item[nombre]</label>";
			echo "</div>";
			
		}		
		
	}
	
}

?>