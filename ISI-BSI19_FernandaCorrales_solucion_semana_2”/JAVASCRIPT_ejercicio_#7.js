<html>
<head>

<title>JAVASCRIPT_ejerciocio_#7</title>

<script type="text/javascript">
var numero = prompt("Introduce un n�mero entero");

var resultado = parImpar(numero);
alert("El n�mero "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
</script>
</head>

<body>
</body>
</html>