// Obtener elementos del DOM
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Expresión regular para validar email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Función para validar nombre
function validateName() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Error: El campo nombre no puede estar vacío');
        nameInput.focus();
        return false;
    }
    
    return true;
}

// Función para validar correo electrónico
function validateEmail() {
    const email = emailInput.value.trim();
    
    // Verificar si está vacío
    if (email === '') {
        alert('Error: El campo correo electrónico no puede estar vacío');
        emailInput.focus();
        return false;
    }
    
    // Verificar formato usando regex
    if (!emailRegex.test(email)) {
        alert('Error: El correo electrónico no tiene un formato válido.\nEjemplo: usuario@dominio.com');
        emailInput.focus();
        return false;
    }
    
    return true;
}

// Función para validar contraseña
function validatePassword() {
    const password = passwordInput.value;
    
    if (password.length < 8) {
        alert('Error: La contraseña debe tener mínimo 8 caracteres');
        passwordInput.focus();
        return false;
    }
    
    return true;
}

// Función para limpiar el formulario
function clearForm() {
    form.reset();
    // Enfocar el primer campo después de limpiar
    nameInput.focus();
}

// Manejar el evento submit del formulario
form.addEventListener('submit', function(event) {
    // Prevenir el envío por defecto del formulario
    event.preventDefault();
    
    // Ejecutar validaciones en orden
    const isNameValid = validateName();
    if (!isNameValid) return;
    
    const isEmailValid = validateEmail();
    if (!isEmailValid) return;
    
    const isPasswordValid = validatePassword();
    if (!isPasswordValid) return;
    
    // Si todas las validaciones pasaron, mostrar mensaje de éxito
    alert('¡Registro exitoso!\n\nBienvenido/a ' + nameInput.value.trim() + 
          '\nTus datos han sido registrados correctamente.');
    
    // Limpiar el formulario después de validación exitosa
    clearForm();
    
    // Log opcional para desarrollo (puede removerse en producción)
    console.log('Usuario registrado exitosamente:', {
        nombre: nameInput.value.trim(),
        email: emailInput.value.trim(),
        timestamp: new Date().toISOString()
    });
});

// Inicialización cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Formulario de registro UNEMI cargado correctamente');
    
    // Enfocar automáticamente el primer campo
    nameInput.focus();
    
    // Opcional: Agregar validación en tiempo real mientras se escribe
    nameInput.addEventListener('input', function() {
        // Remover espacios al inicio mientras se escribe
        if (this.value.startsWith(' ')) {
            this.value = this.value.trimStart();
        }
    });
    
    emailInput.addEventListener('input', function() {
        // Convertir a minúsculas automáticamente
        this.value = this.value.toLowerCase();
    });
});