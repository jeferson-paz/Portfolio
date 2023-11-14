window.addEventListener('DOMContentLoaded', event => {
    // Código que precisa esperar pelo DOM estar pronto vai aqui

    // Lógica para inicializar o ScrollSpy (assumindo que você já importou Bootstrap)
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    }

    // Lógica para fechar o menu responsivo ao clicar em um item de navegação
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Lógica para o botão de "voltar ao topo"
    var botaoVoltarAoTopo = document.getElementById("voltar-ao-topo");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 200) {
            // Mostra o botão quando o usuário rolar 200 pixels para baixo
            botaoVoltarAoTopo.style.display = "block";
        } else {
            // Oculta o botão quando o usuário estiver no topo da página
            botaoVoltarAoTopo.style.display = "none";
        }
    });

    botaoVoltarAoTopo.addEventListener("click", function() {
        // Faz a animação de rolagem suave até o topo da página
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
