document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');
    const feedback = document.getElementById('feedback-contato');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    // Função de validação de formato de e-mail
    function isValidEmail(email) {
        // Verificar o formato: usuario@dominio.com
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Event Listener para o envio do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)

        // 1. Validação dos campos obrigatórios
        if (nome.value.trim() === '' || email.value.trim() === '' || mensagem.value.trim() === '') {
            feedback.textContent = 'Erro: Todos os campos (Nome, E-mail, Mensagem) são obrigatórios.';
            feedback.style.color = 'red';
            feedback.style.display = 'block';
            return; // Interrompe o processo
        }

        // 2. Validação do formato de e-mail
        if (!isValidEmail(email.value.trim())) {
            feedback.textContent = 'Erro: Por favor, insira um endereço de e-mail válido.';
            feedback.style.color = 'red';
            feedback.style.display = 'block';
            return; // Interrompe o processo
        }

        // Se a validação passou:
        // 3. Simulação do envio
        
        // Limpa os campos do formulário
        form.reset(); 

        // Exibe a mensagem de confirmação
        feedback.textContent = 'Mensagem enviada com sucesso! Em breve, você receberá um retorno.';
        feedback.style.color = 'green';
        feedback.style.display = 'block';

        // Esconder a mensagem após alguns segundos
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 5000);
    });
});