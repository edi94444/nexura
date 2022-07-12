<?php
require_once "../../controllers/controller.php";
require_once "../../models/crud.php";
?>


<div class="container">
	<!-- <h1 class="display-4">Crear Empleado</h1> -->

	<div class="alert alert-primary" role="alert">
		Los campos con asteriscos(*) son obligatorios
	</div>

	<form id="formCrear">

		<div class="form-group row">
			<label for="nombre" class="col-sm-2 col-form-label">Nombre Completo*</label>
			<div class="col-sm-10">
				<input type="text" class="form-control validate[required]" id="nombre" name="nombre">
			</div>
		</div>

		<div class="form-group row">
			<label for="email" class="col-sm-2 col-form-label">Correo electrónico*</label>
			<div class="col-sm-10">
				<input type="email" class="form-control" id="email" name="email" >
			</div>
		</div>

		<fieldset class="form-group row">
			<legend class="col-form-label col-sm-2 float-sm-left pt-0"  >Sexo*</legend>
			<div class="col-sm-10">
				<div class="form-check">
					<input class="form-check-input" type="radio" name="sexo" id="sexo1" value="M">
					<label class="form-check-label" for="sexo1">
					Masculino
					</label>
				</div>
				<div class="form-check">
					<input class="form-check-input" type="radio" name="sexo" id="sexo2" value="F">
					<label class="form-check-label" for="sexo2">
					Femenino
					</label>
				</div>		
			</div>
		</fieldset>
		
		<div class="form-group row">
		<label for="area_id" class="col-sm-2 col-form-label">Área*</label>
			<div class="col-sm-10">
				<select id="area_id" class="form-control" name="area_id" require>
					<option value="" selected>Elige..</option>
					<?php
						$control = new MvcController();
						$control -> listarAreasController();						
					?>
				</select>
			</div>
		</div>

		<div class="form-group row">
			<label for="descripcion" class="col-sm-2 col-form-label">Descripción*</label>
			<div class="col-sm-10">
			<textarea class="form-control" rows="5" id="descripcion" name="descripcion" require></textarea>
			</div>
		</div>

		<div class="form-group row">
			<div class="col-sm-10 offset-sm-2">
			<div class="form-check">
				<input class="form-check-input" type="checkbox" id="boletín" name="boletin" value="1">
				<label class="form-check-label" for="boletín">
				Deseo recibir boletín informativo
				</label>
			</div>			
			</div>
		</div>

		<fieldset class="form-group row">
			<legend class="col-form-label col-sm-2 float-sm-left pt-0">Roles*</legend>
			<div class="col-sm-10">
				<?php					
					$control -> listarRolesController();						
				?>										
			</div>
		</fieldset>
		
	</form>
</div>
<?php
	
	
?>
