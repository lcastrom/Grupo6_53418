function validar_nombre_usuario2 (string)
{
var regEx = /^[a-z][a-z\s]*$/;
if(string.value.match(regEx))
    {
    return true;
    }
else
    {
    alert("Por favor, ingrese solo caracteres alfabéticos y espacios");
    return false;
    }
}