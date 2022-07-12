<?php

class Conexion{

	public static function conectar(){

		$link = new PDO("mysql:host=localhost;dbname=prueba_tecnica_dev","root","");
		return $link;
		//var_dump($link);

	}

}
/*
	$a = new Conexion;
	$a -> conectar();
*/

?>