// JavaScript para alternar entre modo claro e escuro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Muda o ícone do botão
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }
});
