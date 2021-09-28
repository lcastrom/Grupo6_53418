//Sprint 3 Parte 1:
let registros = [];

function agregarRegistro(){
let nombre = document.getElementById ('dato_nombre_usuario').value
let edad = document.getElementById ('dato_edad_usuario').value
let contrasena = document.getElementById ('dato_contrasena').value

let registro = {
    'nombre': nombre, 
    'edad': edad, 
    'contraseña': contrasena, 
}
console.log(registro)
registros.push (registro)

alert ("Guardando...")
}

//Sprint 2
function validar_nombre_usuario (string) 
{
    respuesta = validarString (string);
    if (respuesta === true ){
        agregarRegistro(); 
    }
    return respuesta;
}
function validarString(string) {
    //Solo puede contener solo letras de la A a la Z y espacios. 
    //Si al testear (evaluar) mi expresion de regEx sobre mi string 
    //encuentro que el patrón no corresponde, retorna falso.
    let reg_exp = /^[a-zA-Z\s]*$/;
    if(!reg_exp.test(string)){ //
        return false
    }
    // Debe validar que el string no inicie ni termine con espacios. Divido el texto en palabras separadas por espacios, 
    //si la primera palabra tiene una longitud de 0, quiere dec1r que el 1er caracter del string era un espacio. Por lo cual retorna falso.
    let words = string.split(" ")
    if (words[0].length===0){
        return false
    }
//si la ultima palabra tiene una longitud de 0, quiere dec1r que el 1er caracter del string era un espacio. Por lo cual retorna falso.
    if (words[words.length-1].length===0){
        return false
    }
//Debe validar que la primera letra después de cada espacio sea mayúscula.
//se recorre la lista de palabras y si la palabra no está vacia, se compara la primera letra de la palabra con esta misma letra convertida 
//a mayúscula. Si no son iguales, quiere decir que la primera letra NO ERA mayúscula, por lo que retorna falso. 
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if(word){            
            let firstLetter = word[0]
            console.log(words)
            if (firstLetter.toUpperCase()!==firstLetter){
                return false
            }
        }
    }
    return true
}

function validar_edad_usuario(edad){
    let medad_numerico;
    let mvalido = true;
    try {
        medad_numerico = Number(edad);
        if (medad_numerico < 0){
            alert("La Edad Debe ser Positivo");
            mvalido = false;
        }
        else{
            if (!((medad_numerico >= 13) && (medad_numerico < 110))){
                alert("La Edad Debe ser igual o mayor a 13 y menor que 110");
                mvalido = false;
            }                
        }
    } catch (error) {
        alert("La Edad No es un Numero");
        mvalido = false;
        
    }
    return mvalido;
}

function validar_contrasena(string){
    let mvalido = true;
    let mordinal = 0;
    let mindice;
    let ch;
    let index = 0;
    if (string.length < 6) {
        alert("Longitud Contraseña Debe tener 6 o más caracteres");
        mvalido = false;
    }
    else{
        /* cumple con la condicion de 6 caracteres */
        /*recorrer los caracteras de la contraseña y verificar que tenga lo caracteres valisos */
        for (let i = 0; i < string.length-1; i++) {
            ch=string[i];
            mindice = ch.charCodeAt(index);
            if (! (( mindice >= 48 && mindice <=57 ) || ( mindice >= 65 && mindice <= 90 ) || ( mindice >= 97 && mindice <= 122) ) ) {
                alert("Solo puede contener caracteres alfanuméricos. Es decir, letras de la A a la Z y los números del 0 al 9.");
                mvalido = false;
                break;        
            }

        }        
    }
    return mvalido;
}

//module.exports.validar_nombre_usuario = validar_nombre_usuario;
//module.exports.validar_edad_usuario = validar_edad_usuario;
//module.exports.validar_contrasena = validar_contrasena;

