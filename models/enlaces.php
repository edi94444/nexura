<?php 

class Paginas{
	
	public static function enlacesPaginasModel($enlaces){


		if($enlaces == "listar"){

			$module =  "views/modules/".$enlaces.".php";
		
		}

		else if($enlaces == "index"){

			$module =  "views/modules/listar.php";
		
		}		

		else{

			$module =  "views/modules/listar.php";

		}
		
		return $module;

	}

}

?>