
/*document.addEventListener('pantallaDos', function() {
    let elems = document.querySelectorAll('.sidenav-trigger');
    var instance = M.Sidenav.getInstance(elems);
    instance.open();
});*/
const botonInicio = document.getElementById("botonInicio2");

botonInicio.addEventListener("click", () =>{
    let email = document.getElementById("icon_prefix").value;
    let password = document.getElementById("icon_telephone").value;
    const caracters = /\S+@\S+\.\S+/;
    if(email === "" || password === ""){
        alert("Tiene campos vacios");
    }else if(caracters.test(email)){
        alert("Ingrese email válido");
    }else if(isNaN(password)){
        alert("Las contraseñas solo deben tener números")
    }else if(password.length > 8){
        alert("Su contraseña debe tener menos de ocho caractéres");
    }
    let change = document.getElementById("opcionesApp");
    change.style = "display: block;";
    let pantalla1 = document.getElementById("pantallaUno1");
    pantalla1.style = "display:none;";
});




/*function validateEmail(email) {

    email.password.addEventListener("click", () =>{

        let caracters = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email){

        }
    });
    return caracters.test(email);
  };

    



document.getElementById("icon_prefix").addEventListener("click", () => {
        let textoEmail = event.target;
        let valido = document.getElementById("valid");
        let emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
        if(emailValid.test(textoEmail.value)){
            valido.innerText = "valido";
        }else{
            valido.innerText = "incorrecto";
        }
    }
    );*/




/* Holiii acá va tu código también */