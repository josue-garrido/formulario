function validar(formulario) {
    
    if(formulario.nombre.value.length < 3){
        alert("Escriba por lo menos 3 caracteres en el campo de Nombre")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.nombre.focus();
        return false;
    }

    var checkOk = "QWERTYUIOASDFGHJKLZXCVBNÑÁÉÍÓÚÜ" + "qwertyuiopsdfghjklzxcvbnmñáéíóúü";
    var checkString = formulario.nombre.value;

    alert(checkString);

    var allValid = true;
    //qwertyuiopasdfghjklñzxcvbnm

    for (var i =0; i < checkString.length; i++) {
        //charAt nos ayuda a separar una cadena en caracteres
        // por ejemplo ANA   char A N A
        var ch = checkString.charAt(i);
            for (var j = 0; j < checkOk.length; j++)
            if( ch == checkOk.charAt(j))
                break;
            if( j == checkOk.length ){
                allValid = false;
                break;
            }
        
    }

    //debo de saber el edo de allvalid
    if(!allValid){
        alert("Escriba solo letras en el campo de Nombre");
        formulario.nombre.focus();
        return(false);
    }
}