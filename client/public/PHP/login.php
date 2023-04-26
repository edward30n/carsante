<?php
// Iniciar la sesión
session_start();

// Conectar a la base de datos
$conexion = mysqli_connect("localhost", "usuario", "contraseña", "basededatos");

// Comprobar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Obtener los valores del formulario
	$correo = mysqli_real_escape_string($conexion, $_POST["correo"]);
	$contraseña = mysqli_real_escape_string($conexion, $_POST["contraseña"]);

	// Buscar al usuario en la base de datos
	$query = "SELECT id, nombre FROM usuarios WHERE correo = '$correo' AND contraseña = '$contraseña'";
	$resultado = mysqli_query($conexion, $query);

	// Comprobar si se encontró al usuario
	if (mysqli_num_rows($resultado) == 1) {
		// Iniciar sesión y redirigir al usuario a la página personalizada
		$usuario = mysqli_fetch_assoc($resultado);
		$_SESSION["usuario_id"] = $usuario["id"];
		header("Location: pagina_personalizada.php");
		exit;
	} else {
		// Mostrar un mensaje de error
		$mensaje = "El correo electrónico y/o la contraseña son incorrectos";
	}
}

// Cerrar la conexión a la base de datos
mysqli_close($conexion);
?>