document.addEventListener('DOMContentLoaded', function () {
    // ScrollSpy
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    }

    // Fechar menu responsivo ao clicar em um item de navegação
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));
    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Botão "Voltar ao Topo"
    const botaoVoltarAoTopo = document.getElementById("voltar-ao-topo");

    window.addEventListener("scroll", function() {
        // Mostra ou oculta o botão com base no deslocamento da página
        botaoVoltarAoTopo.style.display = window.pageYOffset > 200 ? "block" : "none";
    });

    botaoVoltarAoTopo.addEventListener("click", function() {
        // Rola suavemente até o topo da página
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Alternância de Tema
    const themeToggle = document.getElementById('toggle-theme');
    const themeStyle = document.getElementById('theme-style');

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        const isDarkTheme = document.body.classList.contains('dark-theme');

        // Alterna entre as folhas de estilo com base no tema atual
        themeStyle.href = isDarkTheme ? 'dark-theme.css' : 'styles.css';
    });
});
