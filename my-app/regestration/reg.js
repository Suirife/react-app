const form = document.getElementById('register-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    // Отправка данных на сервер
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            alert('Регистрация успешна');
            window.location.href = '/login';
        } else {
            alert('Ошибка регистрации');
        }
    })
    .catch((error) => {
        console.error(error);
    });
});