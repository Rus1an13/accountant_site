document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Здесь обычно отправляется AJAX-запрос на сервер
        // Для демонстрации просто показываем сообщение

        const formData = new FormData(form);
        const name = formData.get('name');

        // Очистка предыдущего сообщения
        messageDiv.innerHTML = '';
        messageDiv.className = 'form-message';

        // Имитация отправки (в реальном проекте замените на fetch или XMLHttpRequest)