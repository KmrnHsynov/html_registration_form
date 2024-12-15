document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let errorMessage = '';
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Telfon nomresi
    const phoneRegex = /^\+994\d{8}$/;
    if (!phoneRegex.test(phone)) {
        errorMessage += 'Telefon nömrəsi +99455123456 formatında olmalıdır.\n';
    }

    // Sifre yoxlanmasi
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,50}$/;
    if (!passwordRegex.test(password)) {
        errorMessage += 'Şifrə ən az 8, ən çox 50 hərf, ən az 1 böyük, 1 kiçik hərf, 1 ədəd və 1 simvoldan ibarət olmalıdır.\n';
    }

    // Username yoxlanmasi
    const usernameRegex = /^[A-Za-z0-9]+$/;
    if (!usernameRegex.test(username)) {
        errorMessage += 'Username yalnız hərflər və rəqəmlərdən ibarət olmalıdır.\n';
    }


    // Kodun duzgun isleyib islememesi mesaji buradan alinir
    const errorDiv = document.getElementById('error-message');
    if (errorMessage) {
        errorDiv.textContent = errorMessage;
        errorDiv.style.color = 'red';
    } else {
        errorDiv.textContent = 'Uğurla qeydiyyatdan keçdiniz!';
        errorDiv.style.color = 'green';
    }
});
