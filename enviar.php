<?php 

	$destino ="mikecr998@gmail.com";
	$asunto ="Contacto desde el sitio web";
	$nombre = $_POST["nombre"];
	$empresa = $_POST["empresa"];
	$email = $_POST["email"];
	$celular = $_POST["telefono"];
	$fecha = $_POST["fecha"];
	$hora = $_POST["hora"];
	$comentarios = $_POST["mensaje"];
	$contenido = "
	<b>Nombre :</b> " . $nombre . "<br><b>Email :</b>" . $email . "<br><b>Celular :</b> " . $celular . "<br><b>Comentarios : </b> " . $comentarios . "<br><b>Fecha :</b> " . $fecha . "<br><b>Hora :</b> " . $hora;
	
	// PARA QUE RECONOZCA LAS ETIQUETAS HTML

	$encabezados  = "MIME-Version: 1.0" . "\r\n";
	$encabezados .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// FUNCION MAIL Y REDIRECCIONAMIENTO
	mail($destino, $asunto, $contenido, $encabezados);
	echo '<script type="text/javascript">
				location.replace("contacto-modal.html");
			  </script>';

 ?>