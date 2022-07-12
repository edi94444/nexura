<?php


require_once "conexion.php";

class Datos extends Conexion{




	#CREA EMPLEDOS
	#-------------------------------------
	public static function creaEmpleadosModel($datosModel, $tabla){


	   $stmt = Conexion::conectar()->prepare("INSERT INTO $tabla (nombre, email, sexo, area_id, boletin, descripcion) VALUES (:nombre, :email, :sexo, :area_id, :boletin, :descripcion)");	   

	   $stmt->bindParam(":nombre", $datosModel["nombre"]);
	   $stmt->bindParam(":email", $datosModel["email"]);
	   $stmt->bindParam(":sexo", $datosModel["sexo"]);
	   $stmt->bindParam(":area_id", $datosModel["area_id"]);
	   $stmt->bindParam(":boletin", $datosModel["boletin"]);
	   $stmt->bindParam(":descripcion", $datosModel["descripcion"]);

	   if($stmt->execute()){

			$stmt = Conexion::conectar()->prepare("SELECT MAX(id) AS id FROM $tabla");		
			$stmt->execute();
			$id = $stmt->fetch();

			foreach($datosModel['roles'] as $rol){
					$stmt = Conexion::conectar()->prepare("INSERT INTO empleado_rol (empleado_id, rol_id) VALUES (:empleado_id, :rol_id)");
					$stmt->bindParam(":empleado_id", $id['id']);
					$stmt->bindParam(":rol_id", $rol);

					if($stmt->execute()){
						$valido = 1;
					}else{
						$valido = 0;
					}
			}
		}

		if($valido == 1){
		   return "ok";
	   }
	   else{
		   return "error";
	   }   

	   $stmt->close();

   }



   #LISTAR EMPLEADOS
	#-------------------------------------

	public static function listarEmpleadosModel($tabla){

		$stmt = Conexion::conectar()->prepare("SELECT e.id, e.nombre nombre, e.email, e.sexo, e.area_id, e.boletin, e.descripcion, a.nombre area
		FROM $tabla e
		INNER JOIN areas a ON e.area_id = a.id
		ORDER BY e.id desc;");	
		$stmt->execute();
		 
		return $stmt->fetchAll();

		$stmt->close();

	}



	#EDITAR EMPLEADO
	#-------------------------------------

	public static function editarEmpleadoModel($datosModel, $tabla){

		$stmt = Conexion::conectar()->prepare("SELECT id, nombre, email FROM $tabla WHERE id = :id");
		$stmt->bindParam(":id", $datosModel);	
		$stmt->execute();

		return $stmt->fetch();

		$stmt->close();

	}



	#ACTUALIZAR EMPLEADO
	#-------------------------------------

	public static function actualizarEmpleadoModel($datosModel, $tabla){

		$stmt = Conexion::conectar()->prepare("UPDATE $tabla SET email = :email WHERE id = :id");

		$stmt->bindParam(":email", $datosModel["email"]);
		$stmt->bindParam(":id", $datosModel["id"]);
	

		if($stmt->execute()){

			return "ok";

		}

		else{

			return "error";

		}

		$stmt->close();

	}



	#ELIMINR EMPLEADO
	#------------------------------------
	public static function eliminarEmpleadosModel($datosModel, $tabla){

		$stmt = Conexion::conectar()->prepare("DELETE FROM $tabla WHERE id = :id");
		$stmt->bindParam(":id", $datosModel);

		if($stmt->execute()){

			return "ok";

		}

		else{

			return "error";

		}

		$stmt->close();

	}


	#LISTAR AREAS
	#-------------------------------------

	public static function listarAreasModel($tabla){

		$stmt = Conexion::conectar()->prepare("SELECT id, nombre FROM $tabla");	
		$stmt->execute();
		 
		return $stmt->fetchAll();

		$stmt->close();

	}


	#LISTAR ROLES
	#-------------------------------------

	public static function listarRolesModel($tabla){

		$stmt = Conexion::conectar()->prepare("SELECT id, nombre FROM $tabla");	
		$stmt->execute();
		 
		return $stmt->fetchAll();

		$stmt->close();

	}

}

?>