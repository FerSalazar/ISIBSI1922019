    
<html>
<body>

<?php
//echo $_POST['usuario'];
//echo $_POST['password'];
//echo $_POST['email'];
//echo $_POST['fecha_nacimiento'];

//Nombre de usuario
$nu = $_POST['usuario'];
echo "Nombre de usuario: ".$nu;
//Contrase�a
$c = $_POST['password'];
echo "Contrase�a: ".$c;
//Email
$e = $_POST['email'];
echo "Email: ".$e;
//Fecha Nacimiento
$fn = $_POST['nacimiento'];
echo "Fecha nacimiento: ".$fn;
//Campo Oculto
$co = $_POST['oculto'];
echo "Campo Oculto: ".$co;

?>
</body>
</html>