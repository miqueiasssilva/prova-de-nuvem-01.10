document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('emailInput');
    const message = document.getElementById('message');

    const email = emailInput.value.trim();

    if(validateEmail(email)) {
        message.style.color = 'lightgreen';
        message.textContent = 'E-mail cadastrado com sucesso!';
        emailInput.value = '';
    } else {
        message.style.color = 'salmon';
        message.textContent = 'Por favor, insira um e-mail válido.';
    }
});

function validateEmail(email) {
    // Regex simples para validação básica de e-mail
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
