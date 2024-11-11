document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.getElementById('overlay-menu');
    const btnClose = document.querySelector('.btn-fechar i');

    // Abre o menu mobile quando o botão é clicado
    btnMenu.addEventListener('click', function () {
        menuMobile.classList.add('abrir-menu');
        overlayMenu.style.display = 'block';
    });

    // Fecha o menu mobile quando o botão de fechar ou a sobreposição são clicados
    btnClose.addEventListener('click', function () {
        fecharMenu();
    });

    overlayMenu.addEventListener('click', function () {
        fecharMenu();
    });

    function fecharMenu() {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    }

    // Validação básica de formulário
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = form.querySelector('input[placeholder="Seu nome completo:"]').value;
        const email = form.querySelector('input[placeholder="Seu e-mail:"]').value;
        const mensagem = form.querySelector('textarea').value;

        if (nome && email && mensagem) {
            alert('Formulário enviado com sucesso!');
            form.reset(); // Limpa o formulário após o envio
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});
