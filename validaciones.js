
/*En caso de cumplir las condiciones retorna verdadero,
de lo contrario retorna falso.*/
//FALLA Si INiCiA EN MiNUSCULAS
function validar_nombre_usuario (string) 
{
    respuesta = validarString (string);
    if (respuesta === false) {
        alert ("Error")    
    }else{
        alert("Valide ahora la edad")        
    }
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

//module.exports.validar_nombre_usuario = validar_nombre_usuario;