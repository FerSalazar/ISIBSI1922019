<html>
<head>

<title>JAVASCRIPT_ejercicio_#8</title>

<script type="text/javascript">
function info(cadena) {

  var resultado = "La cadena \""+cadena+"\" ";

  if(cadena == cadena.toUpperCase()) {
    resultado += " est� formada s�lo por may�sculas";
  }
  else if(cadena == cadena.toLowerCase()) {
    resultado += " est� formada s�lo por min�sculas";
  }
  else {
    resultado += " est� formada por may�sculas y min�sculas";
  }

  return resultado;
}


</script>
</head>

<body>
</body>
</html>