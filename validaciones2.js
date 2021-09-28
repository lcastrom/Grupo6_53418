let registros = [];

function agregarRegistro(){
let nombre = document.getElementById ('dato_nombre_usuario').value
let edad = document.getElementById ('dato_edad_usuario').value
let contrasena = document.getElementById ('dato_contrasena').value

console.log(nombre)

let registro = nombre + ' ' + edad + ' ' + contrasena
registros.push (registro)

}

function agregarRegistro2(){
    let lstNumero = document.getElementsByIdName ("dato_nombre_usuario"),
        arrayGuardar =[];
    for (let i=0; i < lstNumero.length; i++){
        arrayGuardar[i] = lstNumero[i].value;
        console.log (lstNumero[i].value);
}
}

