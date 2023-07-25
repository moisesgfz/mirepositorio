const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
const errorNombre = document.getElementById('error-nombre');
const errorCorreo = document.getElementById('error-correo');
const errorMensaje = document.getElementById('error-mensaje');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  validarFormulario();
});

function validarFormulario() {
  if (nombre.value.trim() === '') {
    errorNombre.textContent = 'Por favor, ingrese su nombre';
  } else {
    errorNombre.textContent = '';
  }

  if (correo.value.trim() === '') {
    errorCorreo.textContent = 'Por favor, ingrese su correo electrónico';
  } else if (!validarCorreo(correo.value)) {
    errorCorreo.textContent = 'Por favor, ingrese un correo electrónico válido';
  } else {
    errorCorreo.textContent = '';
  }

  if (mensaje.value.trim() === '') {
    errorMensaje.textContent = 'Por favor, ingrese un mensaje';
  } else {
    errorMensaje.textContent = '';
    alert('¡Mensaje enviado!');
  }
}

function validarCorreo(correo) {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegular.test(correo);
}