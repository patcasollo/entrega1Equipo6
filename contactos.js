const form = document.getElementById('form');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const comentario = document.getElementById('comentario');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validarEntradas();
});

function validarEntradas() {
    const emailValue = email.value;
    const telefonoValue = telefono.value;
    const comentarioValue = comentario.value;

    if (emailValue === ''){
        setErrorFor(email, "No se lleno el campo de email");
    } else if (!validarEmail(emailValue)) {
        setErrorFor(email, "No tiene formato valido");
    } else {
        setSuccessFor(email);
    }

    if (telefonoValue === ''){
        setErrorFor(telefono, "No se lleno el campo de teléfono");
    } else if(!validarTelefono()){
        setErrorFor(telefono, 'Utilice el formato correcto');
    }else{
        setSuccessFor(telefono);
    }

    if (comentarioValue === ''){
        setErrorFor(comentario, "No se lleno el campo de texto");
    } else {
        setSuccessFor(comentario);
    }
}

function validarEmail(email){
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

function validarTelefono(telefono){
    var num_tel = /^\d{10}$/;
    if (telefono.value.match(num_tel)){
        return true;
    } else {           
        return false;  
    }
}

function setErrorFor(input, mensaje){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = mensaje;

    formControl.className = 'form-control incorrecto';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = 'form-control correcto';
}