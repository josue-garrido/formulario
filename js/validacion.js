
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
    if(formulario.edad.value.length < 2){
        alert("Escriba maximo 2 digitos, o la maxima edad es de 99")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.edad.focus();
        return false;
    }

    var checkOk = "1234567890";
    var checkString = formulario.edad.value;

    alert(checkString);

    var allValid = true;

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
        alert("Escriba digitos en el campo de la Edad");
        formulario.edad.focus();
        return(false);
    }

    //validacion de fecha --------------------------------------------------------
    if(formulario.dia.value.length != 2 ){
        alert("el formato de fecha es dd, o la  fecha maxima es de 31")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.dia.focus();
        return false;
    }
    if(formulario.mes.value.length != 2 ){
        alert("Escriba maximo 2 digitos, o la  fecha maxima es de 31")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.mes.focus();
        return false;
    }
    if(formulario.año.value.length != 4 ){
        alert("el formato de la fecha es yyyyy, escribe 4 digitos")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.año.focus();
        return false;
    }
    //partes de la fecha -------------------------------------------------------
    var dia = formulario.dia.value;
    var mes = formulario.mes.value;
    var año = formulario.año.value;
    
    
    if (año < 1950 || año > 2050) return  alert("el año esta fuera de los limites, el rango es de 1950 a 2050");;
    //Validar manualmente
    if (mes < 1 || mes > 12) return alert("el mes esta fuera de rango, el rango es minimo 1 y maximo 12");

    let diasPorMes = [31,28,31,30,31,30,31,31,30,31,30,31 ];

    //Si es bisiesto, febrero tiene 29
    if (mes == 2 && (año % 4 == 0 && año % 100 != 0) || año % 400 == 0)
        diasPorMes[1] = 29; 

    //Que no tenga más días de los permitidos en el mes
    if (dia > diasPorMes[mes - 1]) return alert("el año no es bisiesto");
    
    //Fecha válida
    alert ("la fecha es correcta " + dia + "/" + mes + "/" + año);
    
      

    


     //validando el correo
     if(formulario.correo.value.length < 5){
        alert("Escriba el correo con el formato xxx.x@x.x")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.correo.focus();
        return false;
    }

    var txt = formulario.correo.value;
    //expresion regular
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/
    //ejemplo@ejemplo
    //ejemplo@ejemplo.ejemplo
    //todo lo que esta adentro [] es la expresion

    //para la creacion del curp
    //para una llave compartida de SSSDDDPDF

    alert("Email " + (b.test(txt) ? "" : "no") + "valido");
    //si b.test(txt) "" es verdadero   : sino   "no" falso
    return b.test(txt);

    //var emailval = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      
  
  
    
}



function calcularedad(formulario2){
    
    //validacion de fecha --------------------------------------------------------
    if(formulario2.dia.value.length != 2 ){
        alert("el formato de fecha es dd, o la  fecha maxima es de 31")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.dia.focus();
        return false;
    }
    if(formulario2.mes.value.length != 2 ){
        alert("el formato de mes es mm, o la  fecha maxima es de 31")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario2.mes.focus();
        return false;
    }
    if(formulario2.año.value.length != 4 ){
        alert("el formato de la fecha es yyyyy, escribe 4 digitos")
        //focus() nos ayuda a focalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario2.año.focus();
        return false;
    }
    //partes de la fecha -------------------------------------------------------
    var dia = formulario2.dia.value;
    var mes = formulario2.mes.value;
    var año = formulario2.año.value;
    fecha_actual = new Date();
    año_actual = fecha_actual.getFullYear();
    mes_actual = fecha_actual.getMonth();
    dia_actual = fecha_actual.getDate();
    edad = año_actual - año;
    
    if (año < 1950 || año > 2050) return  alert("el año esta fuera de los limites, el rango es de 1950 a 2050");;
    //Validar manualmente
    if (mes < 1 || mes > 12) return alert("el mes esta fuera de rango, el rango es minimo 1 y maximo 12");

    let diasPorMes = [31,28,31,30,31,30,31,31,30,31,30,31 ];

    //Si es bisiesto, febrero tiene 29
    if (mes == 2 && (año % 4 == 0 && año % 100 != 0) || año % 400 == 0)
        diasPorMes[1] = 29; 

    //Que no tenga más días de los permitidos en el mes
    if (dia > diasPorMes[mes - 1]) return alert("el año no es bisiesto");
    
    //Fecha válida
    alert ("la fecha es correcta " + dia + "/" + mes + "/" + año);
    
      
    if (mes < (mes_actual - 1)) {
        edad--;
      }
      if (((mes - 1) == mes_actual) && (dia_actual < dia)) {
        edad--;
      }
    
      document.getElementById('mostraredad').innerHTML = + edad;
}

function calcularhm(formulario3){
    var numpersonas;
    var i;
    var hombres;
    var mujeres;
    /*document.getElementById('datos').innerHTML="escribe el numero de personas que conforman el grupo <br> <form id='valor'><input type='text' id='numeropersonas'> <input type='submit'></form>";*/
    numpersonas = formulario3.numeropersonas.value;
    document.getElementById('datos').innerHTML =  +  numpersonas;
    
    
    
}
    function porcentaje(){
        var totalpersonas, sexo, numhombres=0,nummujeres=0,porchombres;
        
        totalpersonas =prompt("cuantas personas conforman el grupo");
        for (i=1;i<=totalpersonas;i++)
        {
            sexo=prompt("es hombre o mujer?", "hombre","mujer");
            if (sexo == "hombre"){
                numhombres++;
                alert("se ha añadido un hombre");
            }
            if (sexo=="mujer"){
                nummujeres++;
                alert("se ha añadido una mujer");
            }
        }
        porchombres = (numhombres*100)/totalpersonas;
        alert("el porcentaje de hombres es:"+ " " + porchombres + "%");
        porcmujeres = (nummujeres*100)/totalpersonas;
        alert("el porcentaje de mujeres es:"+ " "+ porcmujeres + "%");

    }