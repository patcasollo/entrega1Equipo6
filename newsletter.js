const form = document.getElementById("form");
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const terminos = document.getElementById('terminos');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validarEntradas();
});

function validarEntradas() {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();

    if (nombreValue === '') {
        setErrorFor(nombre, "El campo nombre del usuario no fue contestado");
    } else {
        setSuccessFor(nombre);
    }

    if (emailValue === '') {
        setErrorFor(email, "El campo email no fue contestado");
    } else if (!validarEmail(emailValue)){
        setErrorFor(email, "El email no esta en un formato valido");
    } else {
        setSuccessFor(email);
    }

    if (!document.getElementById('terminos').checked){
        setErrorFor(terminos, "Se requiere que acceptes los terminos y condiciones");
    } else {
        setSuccessFor(terminos);
    }

}

function validarEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

function setErrorFor(input, mensaje) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = mensaje;

    formControl.className = 'form-control incorrecto';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control correcto';
}

