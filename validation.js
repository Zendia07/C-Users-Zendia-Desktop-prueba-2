document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const address = document.getElementById('address');
    const comuna = document.getElementById('comuna');
    const phone = document.getElementById('phone');
    const website = document.getElementById('website');
    const hobbyInput = document.getElementById('hobbyInput');
    const addHobbyButton = document.getElementById('addHobbyButton');
    const hobbiesList = document.getElementById('hobbiesList');

    addHobbyButton.addEventListener('click', function () {
        const hobby = hobbyInput.value.trim();
        if (hobby) {
            const li = document.createElement('li');
            li.textContent = hobby;
            li.classList.add('list-group-item');
            hobbiesList.appendChild(li);
            hobbyInput.value = '';
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

    
        document.querySelectorAll('.error-message').forEach(function (el) {
            el.textContent = '';
        });

 // el email 
        if (!email.value) {
            isValid = false;
            document.getElementById('emailError').textContent = 'El correo electrónico es obligatorio.';
        } else if (!validateEmail(email.value)) {
            isValid = false;
            document.getElementById('emailError').textContent = 'El formato del correo electrónico es incorrecto.';
        }
// Contraseña
        if (!password.value) {
            isValid = false;
            document.getElementById('passwordError').textContent = 'La contraseña es obligatoria.';
        } else if (!validatePassword(password.value)) {
            isValid = false;
            document.getElementById('passwordError').textContent = 'La contraseña debe tener entre 3 y 6 caracteres, al menos un dígito y una letra.';
        }

//Confirmar password
        if (confirmPassword.value !== password.value) {
            isValid = false;
            document.getElementById('confirmPasswordError').textContent = 'La confirmación de la contraseña no coincide.';
        }

        if (!address.value) {
            isValid = false;
            document.getElementById('addressError').textContent = 'La dirección es obligatoria.';
        }

        if (!comuna.value) {
            isValid = false;
            document.getElementById('comunaError').textContent = 'Debe seleccionar una comuna.';
        }

        if (!phone.value) {
            isValid = false;
            document.getElementById('phoneError').textContent = 'El número de teléfono es obligatorio.';
        } else if (!validatePhone(phone.value)) {
            isValid = false;
            document.getElementById('phoneError').textContent = 'El formato del número de teléfono es incorrecto.';
        }

        if (website.value && !validateURL(website.value)) {
            isValid = false;
            document.getElementById('websiteError').textContent = 'El formato de la URL de la página web es incorrecto.';
        }

        if (hobbiesList.children.length < 2) {
            isValid = false;
            document.getElementById('hobbiesError').textContent = 'Debe ingresar al menos 2 aficiones.';
        }

        if (isValid) {
            alert('Formulario enviado correctamente.');
        }
    });

    function validateEmail(email) {
        const atIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');
        return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
    }

    function validatePassword(password) {
        if (password.length < 3 || password.length > 6) return false;
        let hasDigit = false;
        let hasLetter = false;
        for (let i = 0; i < password.length; i++) {
            const char = password[i];
            if (char >= '0' && char <= '9') hasDigit = true;
            if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') hasLetter = true;
        }
        return hasDigit && hasLetter;
    }

    function validatePhone(phone) {
        return /^\d{7,15}$/.test(phone);
    }

    function validateURL(url) {
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        return urlPattern.test(url);
    }
});
