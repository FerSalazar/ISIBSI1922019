<html>
<head>

<title>JAVASCRIPT_ejercicio_#8</title>

<script type="text/javascript">
function info(cadena) {

  var resultado = "La cadena \""+cadena+"\" ";

  if(cadena == cadena.toUpperCase()) {
    resultado += " está formada sólo por mayúsculas";
  }
  else if(cadena == cadena.toLowerCase()) {
    resultado += " está formada sólo por minúsculas";
  }
  else {
    resultado += " está formada por mayúsculas y minúsculas";
  }

  return resultado;
}


</script>
</head>

<body>
</body>
</html>